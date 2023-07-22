// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyA7GBGyz4WNNtYefyT-SaxPHAkf9pjuYSw",
	authDomain: "ecommercewebsite-f1492.firebaseapp.com",
	projectId: "ecommercewebsite-f1492",
	storageBucket: "ecommercewebsite-f1492.appspot.com",
	messagingSenderId: "753712273019",
	appId: "1:753712273019:web:53b1f39c23141225d174de",
	measurementId: "G-38Q4KQG8VK"
  };
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);