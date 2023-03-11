
import { initializeApp } from "firebase/app";
import { 
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signOut,
    signInWithEmailAndPassword
} from 'firebase/auth';
import {getFirestore, doc, getDoc, setDoc} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDlpOiFBdH4nVjmdNeG1lBgrWIoUj9zFsM",
    authDomain: "shop-595b7.firebaseapp.com",
    projectId: "shop-595b7",
    storageBucket: "shop-595b7.appspot.com",
    messagingSenderId: "281468543308",
    appId: "1:281468543308:web:0d9a89b0c11de8b1a66fe9"
  };


  export const app = initializeApp(firebaseConfig);

export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore();

export const auth = getAuth();

export const loginWithGoogle = async () => {
    const res = await signInWithPopup(auth, googleProvider);

    return res.user;
};

export const appSignOut = async () => {
    const res = await signOut(auth);
};

export const createUser = async (email, password) => {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    console.log(res);
};

export const signIn = async (email, password) => {
    try {
        const res = await signInWithEmailAndPassword(email, password);
    } catch (err) {
        if (err.message === 'auth/account-is-missing') {
            console.log('сначала создайте аккаунт!');
        }
    }
};