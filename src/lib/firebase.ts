import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBZIowYPwtGQgCIAVqnIm1-hvH3Vf4wYs0",
  authDomain: "hidigitalgroup.firebaseapp.com",
  projectId: "hidigitalgroup",
  storageBucket: "hidigitalgroup.firebasestorage.app",
  messagingSenderId: "985354465508",
  appId: "1:985354465508:web:abb1068a42e48512327cf1"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;
