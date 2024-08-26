// PushController.js
import { useEffect } from 'react';
import PushNotification from 'react-native-push-notification';

const PushController = () => {
  useEffect(() => {
    PushNotification.configure({
      // (optional) Called when Token is generated (iOS and Android)
      onRegister: function (token) {
        console.log("TOKEN:", token);
      },

      // (required) Called when a remote or local notification is opened or received
      onNotification: function (notification) {
        console.log("NOTIFICATION:", notification);
        // process the notification here
        // required on iOS only
        notification.finish(PushNotificationIOS.FetchResult.NoData);
      },

      // Android only
      senderID: "265851948029", // Your sender ID

      // iOS only
      permissions: {
        alert: true,
        badge: true,
        sound: true
      },

      popInitialNotification: true,
      requestPermissions: true
    });
  }, []);

  return null;
};

export default PushController;
