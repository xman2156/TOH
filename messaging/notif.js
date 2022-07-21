const tokenString = document.getElementById("token");
const errorMessage = document.getElementById("error");
const message = document.getElementById("message");
// Initialize Firebase
// TODO: Replace with your project's customized code snippet
const config = {
  apiKey: "AIzaSyBk_yTbvDFAJSQfth1s87OT7ejzQyc_2WU",
  authDomain: "test-c77c2.firebaseapp.com",
  projectId: "test-c77c2",
  storageBucket: "test-c77c2.appspot.com",
  messagingSenderId: "179906695397",
  appId: "1:179906695397:web:eb12a14b56bb7c491f440c"
};

firebase.initializeApp(config);

const messaging = firebase.messaging();

navigator.serviceWorker.register('/TOH/firebase-messaging-sw.js')
.then((registration) => {
  messaging.useServiceWorker(registration);

  messaging
  .requestPermission()
messaging.onMessage(payload => {
  console.log("Message received. ", payload);
  const { title, ...options } = payload.notification;
});

function subscribeTokenToTopic(token, topic) {
  fetch("https://iid.googleapis.com/iid/v1/" + token + "/rel/topics/" + topic, {
    method: "POST",
    headers: new Headers({
      Authorization: "key=SERVICE KEY"
    })
  })
    .then(response => {
      if (response.status < 200 || response.status >= 400) {
        throw "Error subscribing to  the following topic: " +
          response.status +
          " - " +
          response.text();
      } else {
        console.log('Successfully subscribed to "' + topic + '"');
      }
    })
    .catch(error => {
      console.error(error);
    });
}
});

