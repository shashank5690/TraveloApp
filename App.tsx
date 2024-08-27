import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { Alert,  } from 'react-native';
import messaging from '@react-native-firebase/messaging';
import PushController from './src/Notification/PushController';
import AppNavigator from './src/Navigation/AppNavigator'; 
import store from './src/utils/redux/store'; 
import NetworkLogger  from 'react-native-network-logger';
import { View, Button } from 'react-native';

const App = () => {

  // Request user permission for notifications
  const requestUserPermission = async () => {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      console.log('Authorization status:', authStatus);
    }
  };

  // Get device token
  const getDeviceToken = async () => {
    try {
      const deviceToken = await messaging().getToken();
      console.log('Device Token:', deviceToken);
    } catch (error) {
      console.error('Error getting device token:', error);
    }
  };

  useEffect(() => {
    requestUserPermission();
    getDeviceToken();

    // Foreground notifications
    const unsubscribeOnMessage = messaging().onMessage(async remoteMessage => {
      console.log('Foreground notification received:', remoteMessage);
      Alert.alert(
        remoteMessage.notification?.title || 'Notification',
        remoteMessage.notification?.body || 'You have a new notification.',
        [
          {
            text: 'OK',
            onPress: () => console.log('OK Pressed'),
          },
          {
            text: 'View',
            onPress: () => {
              // Handle navigation or state update based on notification data
              console.log('View Pressed');
            },
          }
        ]
      );
    });

    // Background notifications
    const unsubscribeOnNotificationOpenedApp = messaging().onNotificationOpenedApp(remoteMessage => {
      console.log('Notification caused app to open from background state:', remoteMessage.notification);
      // Navigate to a specific screen based on notification data
      // Example: navigation.navigate('SomeScreen', { data: remoteMessage.data });
    });

    // Check if the app was opened by tapping a notification
    const checkInitialNotification = async () => {
      try {
        const remoteMessage = await messaging().getInitialNotification();
        if (remoteMessage) {
          console.log('Notification caused app to open from quit state:', remoteMessage.notification);
          // Navigate to a specific screen based on notification data
          // Example: navigation.navigate('SomeScreen', { data: remoteMessage.data });
        }
      } catch (error) {
        console.error('Error getting initial notification:', error);
      }
    };

    checkInitialNotification();

    return () => {
      unsubscribeOnMessage();
      unsubscribeOnNotificationOpenedApp();
    };
  }, []);

  return (
    <Provider store={store}>
      <PushController />

    <AppNavigator />


    </Provider>
  );
};

export default App;
