import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB09adAvkQkbi8NVhmn1naZ4gQJN59A52Y",
  authDomain: "todo-ninja-e03ec.firebaseapp.com",
  projectId: "todo-ninja-e03ec",
  storageBucket: "todo-ninja-e03ec.appspot.com",
  messagingSenderId: "339774036485",
  appId: "1:339774036485:web:633d2fc2f888e451261a6c"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
console.log(firebase);
const db = firebase.firestore();

db.settings({ timestampsInSnapshots: true })

console.log(db);

export default db