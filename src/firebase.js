import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCZMCcVUqqNWTsOhMO8QFalR1yaqoeRJ1A",
    authDomain: "marcos-chat-app.firebaseapp.com",
    projectId: "marcos-chat-app",
    storageBucket: "marcos-chat-app.appspot.com",
    messagingSenderId: "7195226769",
    appId: "1:7195226769:web:6ab0353fdc83bad9720530",
    measurementId: "G-WE8PX2Q4YD"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
