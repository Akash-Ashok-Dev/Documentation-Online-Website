// ✅ Import Firebase SDK modules directly from CDN
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCctrgpX7Ms68D8G8IcP9wN-5TGd4TENEY",
  authDomain: "thelifetime-documentsaver.firebaseapp.com",
  projectId: "thelifetime-documentsaver",
  storageBucket: "thelifetime-documentsaver.firebasestorage.app",
  messagingSenderId: "176286072818",
  appId: "1:176286072818:web:be5001e1bbb3a3db3a356b",
  measurementId: "G-CJ7JY357W0"
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
