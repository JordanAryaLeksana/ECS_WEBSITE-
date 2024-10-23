// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVg0Xj_bgcAQ31BAn5mwRGooGPoKUqyKA",
  authDomain: "oprec-ecs-2024.firebaseapp.com",
  projectId: "oprec-ecs-2024",
  storageBucket: "oprec-ecs-2024.appspot.com",
  messagingSenderId: "631921888090",
  appId: "1:631921888090:web:fa7e71e8feacc740968163",
  measurementId: "G-F500FM6MT8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const storage = getStorage(app);
const db = getFirestore(app);
export { storage, db };
