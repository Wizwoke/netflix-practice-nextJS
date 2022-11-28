// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBHyTkbC-589AeBPl8qhBgUI-jwUhWK0Jg',
  authDomain: 'react-next-js-ac2d3.firebaseapp.com',
  projectId: 'react-next-js-ac2d3',
  storageBucket: 'react-next-js-ac2d3.appspot.com',
  messagingSenderId: '698777190128',
  appId: '1:698777190128:web:e2f88c7f0220ecef550c35',
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

export default app;
export { auth, db };
