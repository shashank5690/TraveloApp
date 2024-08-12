import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FormValues } from '../utils/types/interfaces';
interface AuthState {
  isAuthenticated: boolean;
  user: FormValues | null;
}

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<FormValues | null>) => {
      state.user = action.payload;
      state.isAuthenticated = !!action.payload;
    },
  },
});



export const { setUser } = authSlice.actions;


export default authSlice.reducer;