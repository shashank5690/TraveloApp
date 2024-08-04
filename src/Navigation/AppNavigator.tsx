import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ScreenOnboard from '../Screens/ScreenOnboard/ScreenOnboard';
import HomeScreen from '../Screens/ScreenHome/ScreenHome'; 

const Stack = createStackNavigator();

const AppNavigator = () => {
    return (
            <Stack.Navigator initialRouteName="HomeScreen">
                <Stack.Screen
                    name="ScreenOnboard"
                    component={ScreenOnboard}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="HomeScreen"
                    component={HomeScreen}
                    options={{ headerShown: false }} 
                />
            </Stack.Navigator>
    
    );
};

export default AppNavigator;
