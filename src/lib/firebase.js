
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAfrCz6K7yDvSja0MbF4DSlMPSY7Jgra08",
  authDomain: "react-chat-app-41285.firebaseapp.com",
  projectId: "react-chat-app-41285",
  storageBucket: "react-chat-app-41285.appspot.com",
  messagingSenderId: "674272073649",
  appId: "1:674272073649:web:1035bd01556ffab0220f90",
  measurementId: "G-9JWNVXNW4L"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)
