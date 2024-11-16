// Import Firebase scripts for messaging
importScripts(
  "https://www.gstatic.com/firebasejs/9.6.7/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/9.6.7/firebase-messaging-compat.js"
);

firebase.initializeApp({
  apiKey: "AIzaSyAlypN5u7Dj6qa2A4zXPlo_sN1DQEQ_s14",
  authDomain: "spark-village2-9b32d.firebaseapp.com",
  projectId: "spark-village2-9b32d",
  storageBucket: "spark-village2-9b32d.firebasestorage.app",
  messagingSenderId: "922792082026",
  appId: "1:922792082026:web:079984909a0c285f952813",
  measurementId: "G-6324VEQKGL",
});

// Retrieve Firebase Messaging instance to handle background messages

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log("Received background message: ", payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: "/firebase-logo.png",
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
