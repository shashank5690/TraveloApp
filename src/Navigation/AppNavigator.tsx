import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ScreenLogin from '../Screens/ScreenLogin/ScreenLogin';
import ScreenRegister from '../Screens/ScreenSignup/ScreenSignup';
import ScreenOnboard from '../Screens/ScreenOnboard/ScreenOnboard';
import HomeScreen from '../Screens/ScreenHome/ScreenHome';
import Details from '../Screens/ScreenDetails/ScreenDetails'; // Ensure Details is imported
import { RootStackParamList } from '../utils/types/navigation';

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="ScreenOnboard" >
      <Stack.Screen name="ScreenOnboard" component={ScreenOnboard} options={{ headerShown: false }} />
      <Stack.Screen name="ScreenLogin" component={ScreenLogin} options={{ headerShown: false }}/>
      <Stack.Screen name="ScreenRegister" component={ScreenRegister} options={{ headerShown: false }}/>
      <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="Details" component={Details} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
