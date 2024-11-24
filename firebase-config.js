import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBgaIwsuGNTTkPm5_SL9UjXY076uwlEar8",
    authDomain: "fir-project-cd4ac.firebaseapp.com",
    projectId: "fir-project-cd4ac",
    storageBucket: "fir-project-cd4ac.firebasestorage.app",
    messagingSenderId: "524880023649",
    appId: "1:524880023649:web:cfd7b84dafdb226a70da20"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
