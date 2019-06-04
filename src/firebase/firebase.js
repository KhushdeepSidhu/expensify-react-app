import firebase from 'firebase/app'
import 'firebase/firebase-database'

const firebaseConfig = {
    apiKey: "AIzaSyDBDha2oQVRgfaZcwww56UAEqdL2J0xADI",
    authDomain: "expensify-9b96f.firebaseapp.com",
    databaseURL: "https://expensify-9b96f.firebaseio.com",
    projectId: "expensify-9b96f",
    storageBucket: "expensify-9b96f.appspot.com",
    messagingSenderId: "419785666491",
    appId: "1:419785666491:web:984690a50f5dd7bc"
}

firebase.initializeApp ( firebaseConfig )

const database = firebase.database ()

export { firebase, database as default }