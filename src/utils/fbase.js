import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAMRHdDU0s2Bo5lXwvcMDrBH1eXb_A7-PE",
  authDomain: "xnbeats-app.firebaseapp.com",
  projectId: "xnbeats-app",
  storageBucket: "xnbeats-app.appspot.com",
  messagingSenderId: "1008294026302",
  appId: "1:1008294026302:web:d9f748189378b889ca056f",
};

const fBaseApp = firebase.initializeApp(config);

// DB
export const DB = fBaseApp.firestore();
export const { Timestamp } = firebase.firestore;
export const usersCollection = DB.collection("users");
export const reviewsCollection = DB.collection("reviews");
export const messagesCollection = DB.collection("messages");
