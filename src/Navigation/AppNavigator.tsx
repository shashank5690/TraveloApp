import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../utils/redux/store';
import ScreenLogin from '../Screens/ScreenLogin/ScreenLogin';
import ScreenRegister from '../Screens/ScreenSignup/ScreenSignup';
import ScreenOnboard from '../Screens/ScreenOnboard/ScreenOnboard';
import HomeScreen from '../Screens/ScreenHome/ScreenHome';
import Details from '../Screens/ScreenDetails/ScreenDetails'; 
import { AuthStackParamList, AppStackParamList } from '../utils/types/interface';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { setUser } from '../Screens/ScreenLogin/redux/authSlice';
import auth from '@react-native-firebase/auth';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

const AuthStack = createStackNavigator<AuthStackParamList>();
const AppStack = createStackNavigator<AppStackParamList>();

const AppNavigator: React.FC = () => {
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = React.useState(true);

  useEffect(() => {
    const checkToken = async () => {
      try {
        const token = await AsyncStorage.getItem('token');
        if (token) {
          const currentUser = auth().currentUser;
          if (currentUser) {
            const user = {
              email: currentUser.email!,
              password: '',
            };
            dispatch(setUser(user));
          }
        } else {
          dispatch(setUser(null));
        }
      } catch (error) {
        dispatch(setUser(null));
      } finally {
        setIsLoading(false);
      }
    };

    checkToken();
  }, [dispatch]);

  if (isLoading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size='large' color="#FF7029" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      {isAuthenticated ? (
        <AppStack.Navigator initialRouteName="HomeScreen">
          <AppStack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
          <AppStack.Screen name="Details" component={Details} options={{ headerShown: false }} />
        </AppStack.Navigator>
      ) : (
        <AuthStack.Navigator initialRouteName="ScreenOnboard">
          <AuthStack.Screen name="ScreenOnboard" component={ScreenOnboard} options={{ headerShown: false }} />
          <AuthStack.Screen name="ScreenLogin" component={ScreenLogin} options={{ headerShown: false }} />
          <AuthStack.Screen name="ScreenRegister" component={ScreenRegister} options={{ headerShown: false }} />
        </AuthStack.Navigator>
      )}
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AppNavigator;
