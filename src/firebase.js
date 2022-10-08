import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// import {getFirestore} from "@firebase/app";
import { getDatabase } from "firebase/database"
import App from "./App";
export const database = getDatabase(App);



const firebaseConfig = {
  apiKey: "AIzaSyBgnqng2f3zOLncqAe6PARupTi9YGsZ1IQ",
  authDomain: "registeration-form-db02c.firebaseapp.com",
  databaseURL: "https://registeration-form-db02c-default-rtdb.firebaseio.com",
  projectId: "registeration-form-db02c",
  storageBucket: "registeration-form-db02c.appspot.com",
  messagingSenderId: "449656041142",
  appId: "1:449656041142:web:adc6239f3d50c033688017",
  measurementId: "G-8XBDXMLZ5P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// const firestore=getFirestore(app);