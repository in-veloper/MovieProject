import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyA36cEA1ymKOguEyFDUYbUYK3s0KVm6wOk',
    authDomain: 'movieaword-cd37e.firebaseapp.com',
    projectId: 'movieaword-cd37e',
    storageBucket: 'movieaword-cd37e.appspot.com',
    messagingSenderId: '779531061196',
    appId: '1:779531061196:ios:88c07e61f4d11f2eae3f69',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc };