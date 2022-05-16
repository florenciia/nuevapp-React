import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBo2INxe0kibnjVnCObhBM5QDTncknVFfk",
  authDomain: "sensations-perfumes.firebaseapp.com",
  projectId: "sensations-perfumes",
  storageBucket: "sensations-perfumes.appspot.com",
  messagingSenderId: "602419753240",
  appId: "1:602419753240:web:80dfbf43497cb796f46e6d",
  measurementId: "G-2SNTDZVB5N"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;