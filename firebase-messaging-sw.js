// if ('serviceWorker' in navigator) {
// navigator.serviceWorker.register('../firebase-messaging-sw.js')
//   .then(function(registration) {
//     console.log('Registration successful, scope is:', registration.scope);
//   }).catch(function(err) {
//     console.log('Service worker registration failed, error:', err);
//   });
// }
importScripts('https://www.gstatic.com/firebasejs/7.6.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.6.0/firebase-messaging.js');
firebase.initializeApp({
  apiKey: "AIzaSyDxPmNyE-7VfH2cQf7W2kVFdAwxVKzGTi8",
    authDomain: "lun-company-2023.firebaseapp.com",
    projectId: "lun-company-2023",
    storageBucket: "lun-company-2023.appspot.com",
    messagingSenderId: "1012550034715",
    appId: "1:1012550034715:web:037979640dd214f44b9fbe",
    measurementId: "G-H6BWZTQSPZ"
});
const messaging = firebase.messaging();