// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  GoogleAuthProvider,
  signInWithRedirect,
  getRedirectResult,
} from "firebase/auth";
import { useEffect, useState } from "react";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFRu5KHioREoixuqXODhnNwxOej1f39eY",
  authDomain: "energy-crops.firebaseapp.com",
  projectId: "energy-crops",
  storageBucket: "energy-crops.appspot.com",
  messagingSenderId: "948574451865",
  appId: "1:948574451865:web:a9b4e33c835d8ca542e008",
};
const googleProvider = new GoogleAuthProvider();

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const auth = getAuth();

export async function signUp(email, password) {
  await createUserWithEmailAndPassword(auth, email, password);
}

export function singInWithGoogle() {
  signInWithRedirect(auth, googleProvider);
  getRedirectResult(auth)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access Google APIs.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;

      // The signed-in user info.
      const user = result.user;
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
}
export async function signIn(email, password) {
  await signInWithEmailAndPassword(auth, email, password);
}
export function logOut() {
  return signOut(auth);
}
export function forgotPassword(email) {
  return sendPasswordResetEmail(auth, email, {
    url: "http://energy-crops-arjundhara.netlify.app/sign-in",
  });
}
export function useAuth() {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => setCurrentUser(user));
    return unsub;
  });

  return currentUser;
}
