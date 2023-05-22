import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyD22MOQfvKqfglA-UfddvP87Mo1ORoVJR0',
  authDomain: 'bakoads-lmr.firebaseapp.com',
  projectId: 'bakoads-lmr',
  storageBucket: 'bakoads-lmr.appspot.com',
  messagingSenderId: '708732893003',
  appId: '1:708732893003:web:230b3656c98cd21a839ace',
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
