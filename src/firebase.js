import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA2rzq1ZOZnvufyrnglPhCSHBQLqERkIcc",
  authDomain: "twitter-clone-722c0.firebaseapp.com",
  databaseURL: "https://twitter-clone-722c0.firebaseio.com",
  projectId: "twitter-clone-722c0",
  storageBucket: "twitter-clone-722c0.appspot.com",
  messagingSenderId: "498545454433",
  appId: "1:498545454433:web:2ecb7ee4468bbbd0b7a920",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
