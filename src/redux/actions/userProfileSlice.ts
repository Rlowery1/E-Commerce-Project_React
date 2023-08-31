import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type UserProfile = {
  id: string;
  name: string;
  email: string;
  phone: string;
  profilePic: string;
  birthDate: string;
  firstTimeLogin: boolean;
};

const initialState: UserProfile = {
  id: '',
  name: '',
  email: '',
  phone: '',
  profilePic: '',
  birthDate: '',
  firstTimeLogin: true,
};

export const userProfileSlice = createSlice({
  name: 'userProfile',
  initialState,
  reducers: {
    setUserProfile: (state, action: PayloadAction<UserProfile>) => {
      return action.payload;
    },
    clearUserProfile: () => {
      return initialState;
    },
    updateProfilePic: (state, action: PayloadAction<string>) => {
      state.profilePic = action.payload;
    },
  },
});

export const { setUserProfile, clearUserProfile, updateProfilePic } = userProfileSlice.actions;

export default userProfileSlice.reducer;
