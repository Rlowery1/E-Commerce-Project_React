import React, { useState, FormEvent, useEffect } from 'react';
import { API, graphqlOperation, Storage } from 'aws-amplify';
import { updateUserProfile } from '../../../graphql/mutations';
import { getUserProfile } from '../../../graphql/queries';
import { useNavigate } from 'react-router-dom';
import './editProfile.css';
import Header from "../../Header/header";
import Footer from "../../Footer/footer";
import { useDispatch } from 'react-redux';
import {setUserProfile, updateProfilePic} from '../../../redux/actions/userProfileSlice';
interface EditProfileProps {
  onSuccess: () => void;
}

const ProgressIndicator = () => <div className="progress-indicator">Step 3 of 3</div>;

const EditProfile: React.FC<EditProfileProps> = ({ onSuccess }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [userId, setUserId] = useState<string | null>(null);
  const [firstTimeLogin, setFirstTimeLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [profilePic, setProfilePic] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [email, setEmail] = useState('');

  const navigate = useNavigate();

  const fetchUserProfile = async () => {
    try {
      setIsLoading(true);
      const userIdFromStorage = localStorage.getItem('currentUserId');
      if (userIdFromStorage) {
        setUserId(userIdFromStorage);
        const userProfileData: any = await API.graphql(graphqlOperation(getUserProfile, { id: userIdFromStorage }));
        setFirstTimeLogin(userProfileData.data.getUserProfile.firstTimeLogin);

        // Generate a pre-signed URL for the image
        const signedUrl = await Storage.get(userProfileData.data.getUserProfile.profilePic);
        setProfilePic(signedUrl);  // Use the signed URL here

        setIsLoading(false);
      }
    } catch (error) {
      console.log('Error fetching user profile:', JSON.stringify(error, null, 2));
      setIsLoading(false);
    }
  };



  useEffect(() => {
    fetchUserProfile();
  }, []);

  const uploadFileToS3 = async (file: File) => {
    try {
      const fileName = `${userId}/profile-pic`;
      const result = await Storage.put(fileName, file, {
        contentType: file.type,
      });
      return result.key;
    } catch (error) {
      console.error("Upload failed:", error);
      throw new Error("Upload failed");
    }
  };


  const handleUpdateProfile = async (e: FormEvent) => {
    e.preventDefault();

    if (!userId) {
      console.log("User ID is null or empty");
      return;
    }

    const profileData = {
      id: userId, // Now we are sure userId is not null
      name,
      email,
      phone,
      profilePic,
      birthDate,
      firstTimeLogin: false
    };

    try {
      await API.graphql(graphqlOperation(updateUserProfile, { input: profileData }));
      dispatch(setUserProfile(profileData));
      onSuccess();
      alert("Profile updated successfully!");
      navigate('/');
    } catch (error) {
      console.log('Error updating profile:', JSON.stringify(error, null, 2));
    }
  };


  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      try {
        const fileKey = await uploadFileToS3(file);
        const fileUrl = await Storage.get(fileKey);
        setProfilePic(fileUrl as string);
        dispatch(updateProfilePic(fileUrl as string));
      } catch (error) {
        console.log("Error uploading file:", error);
      }
    }
  };

  return (
    <div>
      <Header />
      <div className="edit-profile-container">
        <div className="progress-container">
          {(firstTimeLogin || isLoading) && <ProgressIndicator />}
        </div>
        <div className="info-container">
          <h1>{(firstTimeLogin || isLoading) ? "Almost There!" : "Edit Your Profile"}</h1>
          <p>{(firstTimeLogin || isLoading) ? "Provide a little more information to complete your profile." : "Feel free to update your profile information."}</p>
          <form onSubmit={handleUpdateProfile} className="profile-form">
            <div className="form-group">
              <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
            </div>
            <div className="form-group">
              <input type="text" placeholder="Phone Number" value={phone} onChange={e => setPhone(e.target.value)} />
            </div>
            <div className="form-group custom-group">
              <label className="custom-file-label">Profile Picture</label>
              <input type="file" className="custom-file-input" onChange={handleFileChange} />
            </div>
            <div className="form-group custom-group">
              <label className="custom-date-label">Birth Date</label>
              <input type="date" className="custom-date-input" value={birthDate} onChange={e => setBirthDate(e.target.value)} />
            </div>
            <button type="submit" className="update-btn">Update Profile</button>
          </form>
        </div>
      </div>
      <Footer theme="light"/>
    </div>
  );
};

export default EditProfile;
