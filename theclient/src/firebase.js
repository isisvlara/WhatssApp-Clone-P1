import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC74vr-x0cUJ17lmTV9qTKkRNzZyCCr84U",
  authDomain: "whatsappclone-137f2.firebaseapp.com",
  projectId: "whatsappclone-137f2",
  storageBucket: "whatsappclone-137f2.appspot.com",
  messagingSenderId: "191102932869",
  appId: "1:191102932869:web:e73e855d11fa1ed9d556ec",
  measurementId: "G-0W8HLMXHY7"
};

const app = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

const db = app.firestore();

const googleProvider = new firebase.auth.GoogleAuthProvider();

export { auth, googleProvider };

export default db;