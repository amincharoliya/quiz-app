import firebase from 'firebase/app';
import  "firebase/firestore";
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCzboVXUemc197juo707dmUv-itSu1dvaU",
  authDomain: "quiz-app-e78e8.firebaseapp.com",
  projectId: "quiz-app-e78e8",
  storageBucket: "quiz-app-e78e8.appspot.com",
  messagingSenderId: "984020709568",
  appId: "1:984020709568:web:4629411869f8e2b6b87d25",
  measurementId: "G-GH2YNEH03M"
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
/** To sign up using google
* Link for developer documentation (https://firebase.google.com/docs/auth/web/google-signin)
*/
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  promt: "select_account",
});
export const signInWithGoogle = () =>    auth.signInWithPopup(provider);