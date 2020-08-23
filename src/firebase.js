import firebase from 'firebase'
const firebaseApp = firebase.initializeApp({
  
    apiKey: "AIzaSyBpn4o4eC265N7iwtrD5sWDrulHM1GETgM",
    authDomain: "todo-app-fa0db.firebaseapp.com",
    databaseURL: "https://todo-app-fa0db.firebaseio.com",
    projectId: "todo-app-fa0db",
    storageBucket: "todo-app-fa0db.appspot.com",
    messagingSenderId: "593730618359",
    appId: "1:593730618359:web:7d4d11923fc6edeb82a4f2",
    measurementId: "G-22LK3Q9KZ6"
      
});

const db = firebaseApp.firestore();
export default db;