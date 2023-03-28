import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCngfodcrYLm2ZCwX_Hx7cft9Bfq6laQM8",
  authDomain: "expense-react-7dbec.firebaseapp.com",
  projectId: "expense-react-7dbec",
  storageBucket: "expense-react-7dbec.appspot.com",
  messagingSenderId: "407251361178",
  appId: "1:407251361178:web:a43ff75f48bd9526c16e23",
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

//timestamp
const timestamp = firebase.firestore.Timestamp;
export { projectFirestore, projectAuth, timestamp };
