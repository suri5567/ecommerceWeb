
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

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
// const analytics = getAnalytics(app);
const auth = getAuth(app);

export default auth;