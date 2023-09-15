import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyDV95LLXnl2H18emKI-BCymT-dRc3RsXWs',
    authDomain: 'movieproject-1acf8.firebaseapp.com',
    projectId: 'movieproject-1acf8',
    storageBucket: 'movieproject-1acf8.appspot.com',
    messagingSenderId: '302854401220',
    appId: '1:302854401220:ios:c4f3b5f7c2384624cfad91',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };