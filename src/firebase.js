import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  aapiKey: "AIzaSyB9uLc5MITNRtBtA4ok0PWfpbNWtXnxKaA",
  authDomain: "to-do-list-198d7.firebaseapp.com",
  projectId: "to-do-list-198d7",
  storageBucket: "to-do-list-198d7.appspot.com",
  messagingSenderId: "974211375741",
  appId: "1:974211375741:web:19542c6c62f0609eedc714",
  measurementId: "G-N3KR895CRT",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
// const analytics = getAnalytics(app);

export { auth };
