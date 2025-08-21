// ✅ Import Firebase SDK modules directly from CDN
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// ✅ Your Firebase config (replace placeholders with your real project values)
const firebaseConfig = {
  apiKey: "AIzaSyXXXXXX-XXXXXXX",
  authDomain: "thelifetimedocumentsaver.firebaseapp.com",
  projectId: "thelifetimedocumentsaver",
  storageBucket: "thelifetimedocumentsaver.appspot.com",
  messagingSenderId: "176286072818",
  appId: "1:176286072818:web:abcd1234efgh5678"
};


// ✅ Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

// --- Example: Firestore ---
// Function to add a user to Firestore
import { collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

async function addUser(name, email) {
  try {
    const docRef = await addDoc(collection(db, "users"), {
      name: name,
      email: email,
      createdAt: new Date()
    });
    console.log("✅ User added with ID: ", docRef.id);
  } catch (e) {
    console.error("❌ Error adding user: ", e);
  }
}

// Example: call addUser (you can trigger this on a button click later)
addUser("Test User", "test@example.com");

// --- Example: Auth ---
// (optional: just showing usage)
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

async function signUp(email, password) {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    console.log("✅ Signed up:", userCredential.user);
  } catch (error) {
    console.error("❌ Error signing up:", error.message);
  }
}

// Example signup call
// signUp("demo@example.com", "password123");
