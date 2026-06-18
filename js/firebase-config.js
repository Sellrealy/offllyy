// Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";

import {
    getFirestore
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

import {
    getAuth
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDJ06YRng4C7VROVFojUfXkcxrSZHEvl_0",
  authDomain: "songfess-1e29b.firebaseapp.com",
  projectId: "songfess-1e29b",
  storageBucket: "songfess-1e29b.firebasestorage.app",
  messagingSenderId: "177455074643",
  appId: "1:177455074643:web:f94174d019776d429e65a6",
  measurementId: "G-CX2RGBP2CG"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);