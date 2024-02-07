// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { addDoc } from "firebase/firestore";
// import { query, orderBy } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB4-CZNwfF8gSY2qF8Zq6hLjKiRQjQpxMI",
  authDomain: "twitter-clone-d60b4.firebaseapp.com",
  projectId: "twitter-clone-d60b4",
  storageBucket: "twitter-clone-d60b4.appspot.com",
  messagingSenderId: "1042979913601",
  appId: "1:1042979913601:web:bd532f3cc64fd4213ff280",
  measurementId: "G-018FRBWK9V",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;

// const res = await db.collection("users").add({
//   userName: "@CricCrazyJohns",
//   profilePictureUri:
//     "https://pbs.twimg.com/profile_images/1570500099373170688/VVVytBl2_400x400.jpg",
//   profileName: "Johns.",
//   bannerUri:
//     "https://pbs.twimg.com/profile_banners/743735095308099585/1702229397/600x200",
//   bio: "IPL, Mohanlal, Vijay, Cringe guy, Average in English, When people hate me, I find happiness through the hate. For Collaborations - DM",
//   location: "Kerala, India",
//   joiningDate: "June 2016",
//   attachments: "instagram.com/johns_benny_ccj",
// });

// console.log("Added document with ID: ", res.id);

// const postRef = collection(db, "posts");

// const q = await getDocs(postRef);
// q.forEach((doc) => console.log(doc.id, "=>", doc.data()));
// console.log(q);
