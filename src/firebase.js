import { initializeApp } from 'firebase/app'
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth'

import { get, getDatabase, ref, set } from 'firebase/database'
import {
  addDoc,
  collection,
  collectionGroup,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  orderBy,
  query,
  where,
} from 'firebase/firestore'
import { getFunctions } from 'firebase/functions'

const firebaseConfig = {
  apiKey: 'AIzaSyCBac8p_wMjkq6IRukGb6x0mdwo73rU0OQ',
  authDomain: 'fb-hmm-auth.firebaseapp.com',
  projectId: 'fb-hmm-auth',
  storageBucket: 'fb-hmm-auth.appspot.com',
  messagingSenderId: '388109074621',
  appId: '1:388109074621:web:fe0e857f911aac365637d4',
  measurementId: 'G-MKKWN3S36J',
}

// const firebaseConfig = {
//   apiKey: process.env.API_KEY,
//   authDomain: process.env.AUTH_DOMAIN,
//   projectId: process.env.PROJECT_ID,
//   storageBucket: process.env.STORAGE_BUCKET,
//   messagingSenderId: process.env.MESSAGING_SENDER_ID,
//   appId: process.env.APP_ID,
//   measurementId: process.env.MEASUREMENT_ID,
// }

const app = initializeApp(firebaseConfig)
const db = getDatabase(app)
const functions = getFunctions(app)
const auth = getAuth()
const firestore = getFirestore()

// eslint-disable-next-line import/prefer-default-export
export {
  addDoc,
  app,
  auth,
  collection,
  collectionGroup,
  db,
  doc,
  firestore,
  functions,
  get,
  getDoc,
  getDocs,
  onAuthStateChanged,
  orderBy,
  query,
  ref,
  set,
  signInWithEmailAndPassword,
  where,
}
