import firebase from 'firebase/compat/app';
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  onSnapshot,
} from 'firebase/firestore';
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCyN7DrLbykJKcBeWPAU9NpKGyoEkpv-nA',
  authDomain: 'crown-clothing-13d78.firebaseapp.com',
  projectId: 'crown-clothing-13d78',
  storageBucket: 'crown-clothing-13d78.appspot.com',
  messagingSenderId: '928853826165',
  appId: '1:928853826165:web:b142ba550b96205b81f63c',
  measurementId: 'G-08JX3C0B6T',
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
        ...additionalDetails,
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
  signInWithEmailAndPassword,
};
export default firebase;
