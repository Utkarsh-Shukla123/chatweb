

import firebase from 'firebase/app'
import 'firebase/firestore'

const db = firebase
  .initializeApp(
    {
      apiKey: "AIzaSyDuz2Eu_pFC9KGZmTa2mypmXxgmQpR7R7Q",
      authDomain: "servicario-4cb20.firebaseapp.com",
      projectId: "servicario-4cb20",
      storageBucket: "servicario-4cb20.appspot.com",
      messagingSenderId: "983147148793",
      appId: "1:983147148793:web:e957fccc4597188744b928",
      measurementId: "G-X7L0DKVFEK"
    }
  )
  .firestore()

export default db

const { Timestamp } = firebase.firestore
export { Timestamp }