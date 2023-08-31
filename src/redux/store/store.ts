import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../actions/cartSlice';
import userProfileReducer from '../actions/userProfileSlice'; // import the new reducer

const store = configureStore({
  reducer: {
    cart: cartReducer,
    userProfile: userProfileReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
