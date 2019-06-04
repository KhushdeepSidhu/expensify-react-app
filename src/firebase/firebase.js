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

// child_removed event
database.ref ( 'expenses' ).on ( 'child_removed', ( snapshot ) => {
    console.log ( snapshot.key, snapshot.val() )
} )

// child_changed event
database.ref ( 'expenses' ).on ( 'child_changed', ( snapshot ) => {
    console.log ( snapshot.key, snapshot.val () )
} )

// database.ref ( 'expenses' ).on ( 'value', ( snapshot ) => {
//     const expenses = []

//     snapshot.forEach ( ( childSnapshot ) => {
//         expenses.push ( {
//             id: childSnapshot.key,
//             ...childSnapshot.val ()
//         } )
//     } )

//     console.log ( expenses )
// } )

// database.ref ( 'expenses' ).once ( 'value' ).then ( ( snapshot ) => {
//     const expenses = []

//     snapshot.forEach ( ( childSnapshot ) => {
//         expenses.push ( {
//             id: childSnapshot.key,
//             ...childSnapshot.val ()
//         } )
//     } )

//     console.log ( expenses )
// } )

// const expenses = [ {
//     description: 'Gum',
//     note: '',
//     amount: 345,
//     createdAt: 0
// }, {
//     description: 'Rent',
//     note: '',
//     amount: 109500,
//     createdAt: 300
// }, {
//     description: 'Credit Card',
//     note: '',
//     amount: 4500,
//     createdAt: 600
// } ]

// database.ref ( 'expenses' ).push ( expenses [ 0 ] )
// database.ref ( 'expenses' ).push ( expenses [ 1 ] )
// database.ref ( 'expenses' ).push ( expenses [ 2 ] )

// database.ref ( 'notes' ).push ( {
//     title: 'React Course',
//     body: 'Finish before end of this week.'
// } )

// database.ref().on ( 'value', ( snapshot ) => {
//     const val = snapshot.val ()
//     console.log ( `${val.name} is a ${val.job.title} at ${val.job.company}` )
// } )

// database.ref().set ( {
//     name: 'Khushdeep Sidhu',
//     age: 33,
//     stressLevel: 7,
//     job: {
//         title: 'Software Developer',
//         company: '2020 Technologies'
//     },
//     isSingle: false,
//     location: {
//         city: 'Vaudreuil-Dorion',
//         country: 'Canada'
//     }
// } ).then ( () => {
//     console.log ( 'Data is saved' )
// } ).catch ( ( error ) => {
//     console.log ( `Failed: ${ error }` )
// } )

// database.ref( 'age' ).set( 33 )

// database.ref ( 'location/city' ).set ( 'Toronto' )

// database.ref ( 'attributes' ).set ( {
//     height: 72,
//     weight: 186
// } ).then ( () => {
//     console.log ( 'Data is saved' )
// } ).catch ( ( error ) => {
//     console.log ( `Failed - ${ error }` )
// } )

// database.ref ( 'isSingle' ).remove ().then ( () => {
//     console.log ( 'Remove Succedded' )
// } ).catch ( ( error ) => {
//     console.log ( `Remove Failed - ${error}` )
// } )

// database.ref().update ( {
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Toronto'
// } ).then ( () => {
//     console.log ( 'Update succeeded.' )
// } ).catch ( ( error ) => {
//     console.log ( `Update failed - ${error}` )
// } )