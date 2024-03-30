import { getAnalytics } from "firebase/analytics";
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC2n_7f7y7tFDsPe-dcGy6XBZ9h13Umh4A",
  authDomain: "healthcare-50aa3.firebaseapp.com",
  projectId: "healthcare-50aa3",
  storageBucket: "healthcare-50aa3.appspot.com",
  messagingSenderId: "424851025832",
  appId: "1:424851025832:web:b52e84538c5cf46ca6f79d",
  measurementId: "G-RMBZ01EGMC",
  databaseURL: "https://healthcare-50aa3-default-rtdb.firebaseio.com",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);
const storage = getStorage(app);
export { app, firestore, storage };
