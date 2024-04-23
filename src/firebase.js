import { initializeApp } from "firebase/app";
import firebaseConfig from './firebase.config.json';

const app = () => initializeApp(firebaseConfig);

export { app };