// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKnP1vKFNu5uCMz5f3vdGSgleeabjpFP4",
  authDomain: "ecs-oprec.firebaseapp.com",
  projectId: "ecs-oprec",
  storageBucket: "ecs-oprec.appspot.com",
  messagingSenderId: "700567790344",
  appId: "1:700567790344:web:2e218342cf9e44b3e942bd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const storage = getStorage(app);

export { storage };