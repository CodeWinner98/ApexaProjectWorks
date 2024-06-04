// firebase.js
//https://console.firebase.google.com/project/sampledb-c18be/firestore
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';


const firebaseConfig = {
  apiKey: "AIzaSyAA7nwQ6XAf_oB2PBFEv-18RGJNQ_ec8Lk",
  authDomain: "sampledb-c18be.firebaseapp.com",
  databaseURL: "https://sampledb-c18be-default-rtdb.firebaseio.com/",
  projectId: "sampledb-c18be",
  storageBucket: "sampledb-c18be.appspot.com",
  messagingSenderId: "407935212469",
  appId: "1:407935212469:web:a3b9ebe08c372e438317fc"
};

const firebaseApp = initializeApp(firebaseConfig);
const database = getDatabase(firebaseApp);

export default firebaseApp; // Export the Firebase app instance
export { database }; // Export the database instance separately

