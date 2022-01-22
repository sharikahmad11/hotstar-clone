import  firebase  from 'firebase';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyA7n-55YccUhsweWks-Ec14LtkS4RVIeq4",
    authDomain: "disneyplus-clone-d6f80.firebaseapp.com",
    projectId: "disneyplus-clone-d6f80",
    storageBucket: "disneyplus-clone-d6f80.appspot.com",
    messagingSenderId: "607172510793",
    appId: "1:607172510793:web:aba5ceb2270161eb912b98",
    measurementId: "G-H5P178N5TD"
  };

  const firebaseApp = initializeApp(firebaseConfig);
  //  const db = firebase.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  // const storage = firebase.storage();

  // export { auth,provider,storage};
  export { auth, provider};
  // export default db;
