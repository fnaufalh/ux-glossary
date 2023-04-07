import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyCT63rUyrUMdX6czWWA2LyWi9EclOIh-k0',
  authDomain: 'ux-glossary.firebaseapp.com',
  projectId: 'ux-glossary',
  storageBucket: 'ux-glossary.appspot.com',
  messagingSenderId: '356601921534',
  appId: '1:356601921534:web:ac48e797ee476b3ef28aaf',
  measurementId: 'G-YV036FMFVG'
}

export const firebaseApp = initializeApp(firebaseConfig)
export const database = getFirestore(firebaseApp)
