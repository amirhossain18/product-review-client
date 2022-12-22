import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBRk-EkIyf9SZ2TMpxiQUQ9xv13MaOUlKg",
    authDomain: "amir-review.firebaseapp.com",
    projectId: "amir-review",
    storageBucket: "amir-review.appspot.com",
    messagingSenderId: "117069999245",
    appId: "1:117069999245:web:9f28abd58633944758c6c4"
  };
  const app = initializeApp(firebaseConfig);
export default app;