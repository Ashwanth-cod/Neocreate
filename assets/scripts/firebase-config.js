import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-app.js";
import { getAuth, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBk9ccGoHmrP2JxPAMqDpDVLiFYwOQNW8k",
  authDomain: "neocreate-5a171.firebaseapp.com",
  projectId: "neocreate-5a171",
  storageBucket: "neocreate-5a171.firebasestorage.app",
  messagingSenderId: "840191514013",
  appId: "1:840191514013:web:3bb7cdf1190027f4b60b74",
  measurementId: "G-QM7NZ5KN2L"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
