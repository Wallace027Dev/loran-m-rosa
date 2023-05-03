import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBYZ2TdoUNIW0C72CclTNkxU1h9ibN4eis",
  authDomain: "loran-m-rosa.firebaseapp.com",
  projectId: "loran-m-rosa",
  storageBucket: "loran-m-rosa.appspot.com",
  messagingSenderId: "196626602600",
  appId: "1:196626602600:web:bea9acbcf2f3e7e22d39dd"
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
