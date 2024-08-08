import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FormValues } from '../Screens/ScreenLogin/utils/types/interfaces';
import { setUser } from '../Screens/ScreenLogin/redux/authSlice';
import { AppDispatch } from './redux/store';
import { useEffect } from 'react';

// GoogleSignin.configure({
//   webClientId: '265851948029-u0d1v01m4c44h1h97uo6l1jqjubichgn.apps.googleusercontent.com',
// });


export const loginUser = async (email: string, password: string, dispatch: AppDispatch) => {
  try {
    const userCred = await auth().signInWithEmailAndPassword(email, password);
    const token = await userCred.user.getIdToken();
    await AsyncStorage.setItem('token', token);
    const currentUser = auth().currentUser;
    if (currentUser) {
      const user: FormValues = {
        email: currentUser.email!,
        password: '',
      };
      dispatch(setUser(user));
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

export const loginWithGoogle = async (dispatch: AppDispatch) => {
  try {
    await GoogleSignin.hasPlayServices();
    const userInfo = await GoogleSignin.signIn();
    const googleCredential = auth.GoogleAuthProvider.credential(userInfo.idToken);
    const userCredential = await auth().signInWithCredential(googleCredential);
    const idToken = await userCredential.user.getIdToken();
    await AsyncStorage.setItem('authToken', idToken);
    const currentUser = auth().currentUser;
    if (currentUser) {
      const user: FormValues = {
        email: currentUser.email!,
        password: '',
      };
      dispatch(setUser(user));
    }
  } catch (error) {
    Alert.alert('Google login failed, please try again.');
  }
};

export const signupUser = async (user: FormValues, dispatch: AppDispatch) => {
  try {
    const UserCred = await auth().createUserWithEmailAndPassword(user.email, user.password);
    const token = await UserCred.user.getIdToken();
    await AsyncStorage.setItem('token', token);
    const newUser: FormValues = {
      email: user.email,
      password: user.password,
    };
    dispatch(setUser(newUser));
  } catch (error) {
    Alert.alert('Cannot sign up, please try again.');
  } 
};

export const logoutUser = async (dispatch: AppDispatch) => {
  try {
    await auth().signOut();
    await AsyncStorage.removeItem('token');
    dispatch(setUser(null));
  } catch (error) {
    if (error instanceof Error) {
      Alert.alert('Logout Error', error.message);
    } else {
      Alert.alert('Logout Error', 'An unknown error occurred');
    }
  }
};
