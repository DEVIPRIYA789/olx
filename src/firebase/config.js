import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firebase'
const firebaseConfig = {
    apiKey: "AIzaSyCtb8c4REibNosq1E8NySJp_ky69IKeCbg",
    authDomain: "olxx-4dbf2.firebaseapp.com",
    projectId: "olxx-4dbf2",
    storageBucket: "olxx-4dbf2.appspot.com",
    messagingSenderId: "294161700186",
    appId: "1:294161700186:web:4cb1205c0337735e8f0f63",
    measurementId: "G-12X33RZG4N"
  };

  export default firebase.initializeApp(firebaseConfig)