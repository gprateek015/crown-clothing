import firebase from 'firebase/compat/app';
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  onSnapshot
} from 'firebase/firestore';
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: 'crwn-clothing-db-9c419.firebaseapp.com',
  projectId: 'crwn-clothing-db-9c419',
  storageBucket: 'crwn-clothing-db-9c419.appspot.com',
  messagingSenderId: '122457548852',
  appId: '1:122457548852:web:b2529b2be204ecf8d8c261',
  measurementId: 'G-ZR1SDLH1QD'
};

firebase.initializeApp(firebaseConfig);

export const auth = getAuth();
export const firestore = getFirestore();

const provider = new GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => signInWithPopup(auth, provider);

export const createUserProfile = async (userAuth, additionalDetails) => {
  if (!userAuth) return;

  const userRef = doc(firestore, `users/${userAuth.uid}`);
  const snapShot = await getDoc(userRef);

  if (!snapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userRef, {
        displayName,
        email,
        createdAt,
        ...additionalDetails
      });
    } catch (err) {
      console.log('Error creating user ', err.message);
    }
  }
  return userRef;
};

export {
  onSnapshot,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
};
export default firebase;
