import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js";
const firebaseConfig = {
    apiKey: "AIzaSyApIeHWZMoXt4Cn2rQF5YJeZZPjaNBnLn4",
    authDomain: "parkup-assistance.firebaseapp.com",
    projectId: "parkup-assistance",
    storageBucket: "parkup-assistance.appspot.com",
    messagingSenderId: "590139168888",
    appId: "1:590139168888:web:2e59fb8f6b865c2baf358d",
    measurementId: "G-5YT7FQHXGC"
  };
  
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Google Login Button Event Listener
document.getElementById('google-login-btn').addEventListener('click', function() {
    signInWithPopup(auth, provider)
        .then((result) => {
            console.log("User signed in:", result.user);
            window.location.href = '/dashboard'; // Change in regard later on (hotfix)
        })
        .catch((error) => {
            console.error("Error during sign in:", error);
            document.getElementById('error-message').textContent = error.message; 
        });
});


document.getElementById('google-signup-btn').addEventListener('click', function() {
    signInWithPopup(auth, provider)
        .then((result) => {
            console.log("User signed up:", result.user);
        })
        .catch((error) => {
            console.error("Error during sign up:", error);
            document.getElementById('error-message').textContent = error.message; 
        });
});
