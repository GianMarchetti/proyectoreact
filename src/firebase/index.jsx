import firebase from 'firebase/app';
import "@firebase/firestore";
const app = firebase.initializeApp({
    apiKey: "AIzaSyBjRcR6kuPbCBCh6Pl9rj0153bYNyKOD-M",
    authDomain: "coderhousehola.firebaseapp.com",
    projectId: "coderhousehola",
    storageBucket: "coderhousehola.appspot.com",
    messagingSenderId: "1071185290203",
    appId: "1:1071185290203:web:30fd8adbfc8c9b99afbdfe"
});
export const getFirebase = () => {
    return app;
}
export const getFirestore = () => {
    return firebase.firestore(app);
}