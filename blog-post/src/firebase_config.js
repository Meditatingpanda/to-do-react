import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyD6TmltsJNDWc2iNYdsWfXoT-ObPX4w3gM",
    authDomain: "vssut-confession-page.firebaseapp.com",
    projectId: "vssut-confession-page",
    storageBucket: "vssut-confession-page.appspot.com",
    messagingSenderId: "847736250518",
    appId: "1:847736250518:web:4ee7a6cdabe11d30ca22b7",
    measurementId: "G-875M1WZD0Z"
  };
  firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { db };