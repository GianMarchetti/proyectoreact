import firebase from 'firebase/app';
import "@firebase/firestore";

const app = firebase.initializeApp({
    apiKey: "AIzaSyAQU1wcDaXLgjjoz1m-oYhhNv5wdK-oaTQ",
    authDomain: "coderhouse-adf37.firebaseapp.com",
    projectId: "coderhouse-adf37",
    storageBucket: "coderhouse-adf37.appspot.com",
    messagingSenderId: "1004794295008",
    appId: "1:1004794295008:web:402e5dda9e9802e350d685"
});

export const getFirebase = () => {
    return app;
}
export const getFirestore = () => {
    return firebase.firestore(app);
}