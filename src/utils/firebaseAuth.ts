import { AppDispatch } from './redux/store';
import auth from '@react-native-firebase/auth';
import { setUser } from '../Screens/ScreenLogin/redux/authSlice';
import { FormValues } from '../Screens/ScreenLogin/utils/types/interfaces';
import { Alert } from 'react-native';

export const signupUser = async (user: FormValues, dispatch: AppDispatch) => {
  try {
    await auth().createUserWithEmailAndPassword(user.email, user.password);
    dispatch(setUser(user.email)); 
  } catch (error) {
    if (error instanceof Error) {
      Alert.alert('Signup Error', error.message);
    } else {
      Alert.alert('Signup Error', 'An unknown error occurred');
    }
  }
};


export const loginUser = async (email: string, password: string, dispatch: AppDispatch) => {
  try {
    await auth().signInWithEmailAndPassword(email, password);
    const currentUser = auth().currentUser;
    if (currentUser) {
      const user: FormValues = {
        email: currentUser.email!,

        password: '', 
      };
      dispatch(setUser(user.email));
    }
  } catch (error) {
    dispatch(setUser(null));
    if (error instanceof Error) {
      Alert.alert('Login Error', error.message);
    } else {
      Alert.alert('Login Error', 'An unknown error occurred');
    }
  }
};

export const logoutUser = async (dispatch: AppDispatch) => {
  try {
    await auth().signOut();
    dispatch(setUser(null));
  } catch (error) {
    if (error instanceof Error) {
      Alert.alert('Logout Error', error.message);
    } else {
      Alert.alert('Logout Error', 'An unknown error occurred');
    }
  }
};

export const checkAuthStatus = (dispatch: AppDispatch) => {
  auth().onAuthStateChanged(user => {
    if (user) {
      const currentUser: FormValues = {
        email: user.email!,

        password: '', 
      };
      dispatch(setUser(currentUser.email));
    } else {
      dispatch(setUser(null));
    }
  });
};