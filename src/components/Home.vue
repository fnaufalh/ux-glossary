<script setup type="module">
import { db, userRef } from '@/main'
// import { useFirestore, useCollection } from 'vuefire'
import { getFirestore, collection, getDocs, QuerySnapshot } from 'firebase/firestore'

// const db = useFirestore()
// const db = getFirestore(firebaseApp)

// export default {
//   data() {
//     return {
//       items: []
//     }
//   }
// }

// userRef.get().then((QuerySnapshot) => {
//   QuerySnapshot.forEach((doc) => {
//     this.items.push({ email: doc.email, name: doc.name })
//   })
// })
</script>

<template>
  <!-- <span>{{ user }}</span> -->
  <li v-for="usr in result" :key="usr.email">
    <span>{{ usr.email }}</span>
  </li>
</template>
