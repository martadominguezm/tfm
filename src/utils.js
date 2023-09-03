import { addDoc, collection, firestore } from './firebase'

import router from './router'

const saveEvent = ({ eventType }) => {
  const userId = JSON.parse(localStorage.getItem('userData'))?.user?.uid
  const sessionId = JSON.parse(localStorage.getItem('sessionId'))
  const sessionCollection = collection(firestore, `users/${userId}/${sessionId}`)
  const path = router.currentRoute.fullPath

  // Save data to Firestore database
  addDoc(sessionCollection, {
    sessionId,
    timestamp: Date.now(),
    navigation: path,
    userId,
    eventType,
  })
    .then(() => {
      console.log(`Data saved to Firestore database for session: ${JSON.stringify(sessionId)}`)
    })
    .catch(error => {
      console.error(error)
    })
}

export { saveEvent }
