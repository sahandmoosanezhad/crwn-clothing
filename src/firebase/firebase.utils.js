import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: "AIzaSyA9_muCSHsC2Qrut9Mzwi-mlxbP3JD-rXw",
  authDomain: "crwn-db-9be32.firebaseapp.com",
  projectId: "crwn-db-9be32",
  storageBucket: "crwn-db-9be32.appspot.com",
  messagingSenderId: "14535751714",
  appId: "1:14535751714:web:31e67e65fb48c76a7ab27b",
  measurementId: "G-N3LZ7Z5FND"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if(!snapShot.exists) {
    const { displayName, email} = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
}; 

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;