import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from "../pages/Homepage/homePage";
import FallCollection from '../pages/Fall Collection/fallCollection';
import SpringCollection from '../pages/Spring Collection/springCollection';
import SummerCollection from "../pages/Summer Collection/summerCollection";
import NewArrivals from "../pages/New Arrivals/newArrivals";
import Designers from "../pages/Designers/designers";
import Clothing from "../pages/Clothing/clothing";
import Category from "../components/Clothing Category/category";
import Accessories from "../pages/Accessories/accessories";
import Shoes from "../pages/Shoes/shoes";
import Sale from "../pages/Sale/sale";
import Gifts from "../pages/Gifts/gifts";
import AccessoryCategory from "../components/Accessories Category/accessoryCategory";
import ShoeCategory from "../components/Shoes Category/shoeCategory";
import {Provider} from "react-redux";
import store from "../redux/store/store";
import Cart from "../components/Cart/cart";
import GuestCheckout from "../pages/Guest Checkout/guestCheckout";
import {Elements} from "@stripe/react-stripe-js";
import { loadStripe} from "@stripe/stripe-js";
import ForgotPassword from "../pages/Forgot Password/forgotPassword";
import CreateAccount from "../pages/Create Account/createAccount";
import SignIn from "../../src/pages/Sign-In/signIn";
import { Amplify } from 'aws-amplify'; // Import Amplify
import config from '../aws-exports';
import PasswordVerification from "../pages/Password Verification/passwordVerification";
import UserCheckout from "../pages/User Checkout/userCheckout";
import Account from "../pages/Account/account";
import MyOrders from "../pages/My Orders/myOrders";
import Logout from "../pages/Logout/logout";
import Settings from "../pages/Settings/settings";
import AdminPage from "../pages/Admin Page/adminPage";
import AdminRoute from "../components/Routes/adminRoute";
import ProductDetails from "../components/Product Details/productDetails";


// Amplify Configuration
Amplify.configure(config);

const stripePromise = loadStripe('pk_test_51NakH0IOuX6Fj95lL7siw4WKB4u8VMmLSI78bW2UbfqwhStQFhAUuKJim2UqhXFDrKsGwCJINm4slLPFzGOlNAXO00ksIGjNin');

function App() {
  return (
    <Provider store={store}>
      <Elements stripe={stripePromise}>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/fall-collection" element={<FallCollection />} />
            <Route path="/summer-collection" element={<SummerCollection />} />
            <Route path="/spring-collection" element={<SpringCollection />} />
            <Route path="/new-arrivals" element={<NewArrivals />} />
            <Route path="/designers" element={<Designers />} />
            <Route path="/clothing" element={<Clothing />} />
            <Route path="/clothing/:category" element={<Category />} />
            <Route path="/accessories/:category" element={<AccessoryCategory />} />
            <Route path="/accessories" element={<Accessories />} />
            <Route path="/product/:id" element={<ProductDetails/>} />
            <Route path="/shoes" element={<Shoes />} />
            <Route path="/shoes/:category" element={<ShoeCategory />} />
            <Route path="/sale" element={<Sale />} />
            <Route path="/gifts" element={<Gifts />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/guest-checkout" element={<GuestCheckout />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/create-account" element={<CreateAccount />} />
            <Route path="/user-checkout" element={<UserCheckout />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/password-verification" element={<PasswordVerification />} />
            <Route path="/account" element={<Account />} />
            <Route path="/my-orders" element={<MyOrders />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/admin" element={<AdminRoute />} />
          </Routes>
        </Router>
      </Elements>
    </Provider>
  );
}

export default App;
