import firebase from "firebase/app";
import "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCT63rUyrUMdX6czWWA2LyWi9EclOIh-k0",
  authDomain: "ux-glossary.firebaseapp.com",
  projectId: "ux-glossary",
  storageBucket: "ux-glossary.appspot.com",
  messagingSenderId: "356601921534",
  appId: "1:356601921534:web:ac48e797ee476b3ef28aaf",
  measurementId: "G-YV036FMFVG",
};

// Initialize Firebase app
firebase.initializeApp(firebaseConfig);

// Initialize Firestore instance
const db = firebase.firestore();

// Export Firestore API functions
export const getUsers = async () => {
  const snapshot = await db.collection("users").get();
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

export const getUserById = async (userId) => {
  const doc = await db.collection("users").doc(userId).get();
  return doc.exists ? { id: doc.id, ...doc.data() } : null;
};

// Other Firestore API functions go here
