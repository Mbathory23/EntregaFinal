import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBo4uS2q5ysqBWz7rpKaDy5InCA0lxfpL4",
  authDomain: "play-gamers-a5ea8.firebaseapp.com",
  projectId: "play-gamers-a5ea8",
  storageBucket: "play-gamers-a5ea8.firebasestorage.app",
  messagingSenderId: "180491619905",
  appId: "1:180491619905:web:b4ec529f0e1cbbc68bc0c0"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)