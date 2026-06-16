const firebaseConfig = {
  apiKey: "AIzaSyD3aIT02f0tb4eApyCf0IyzuKTgzWGHfIk",
  authDomain: "nak-makan-apa.firebaseapp.com",
  projectId: "nak-makan-apa",
  storageBucket: "nak-makan-apa.firebasestorage.app",
  messagingSenderId: "437469694884",
  appId: "1:437469694884:web:4b807e514e98a41b83cf31",
  measurementId: "G-Q5VLD4L38F",
  databaseURL: "https://nak-makan-apa-default-rtdb.asia-southeast1.firebasedatabase.app"
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
const db = firebase.database();
const storage = firebase.storage();
