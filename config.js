import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyC0cI8s6Gh8VmAMLK2r2kg63sENpBeDEJM",
    authDomain: "favoritefilms-f9efc.firebaseapp.com",
    projectId: "favoritefilms-f9efc",
    storageBucket: "favoritefilms-f9efc.appspot.com",
    messagingSenderId: "98642574587",
    appId: "1:98642574587:web:721b3c8ff088029d1f845e"
  };
  
if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export { firebase };