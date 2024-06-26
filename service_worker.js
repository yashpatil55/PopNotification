
// This snippet file was generated by processing the source file:
// ./messaging-next/service-worker.js
//
// To update the snippets in this file, edit the source and then run
// 'npm run snippets'.

// [START messaging_on_background_message_modular]
import { getMessaging } from "firebase/messaging/sw";
import { onBackgroundMessage } from "firebase/messaging/sw";

const messaging = getMessaging();
onBackgroundMessage(messaging, (payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  // Customize notification here
  const notificationTitle = 'Background Message Title';
  const notificationOptions = {
    body: 'Background Message body.',
    icon: '/firebase-logo.png'
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});
// [END messaging_on_background_message_modular]
