import { createSlice } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState = {
  isAuthenticated: false,
  email: '',
  uid: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => ({
      ...state,
      isAuthenticated: true,
      email: action.payload.email,
      uid: action.payload.uid,
    }),
    setAuth: (state, action) => ({
      ...state,
      isAuthenticated: action.payload,
    }),
    logout: () => {
      AsyncStorage.clear();
      return { ...initialState };
    },
  },
});

export const { actions } = userSlice;

export default userSlice.reducer;
