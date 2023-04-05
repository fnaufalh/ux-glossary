<script setup>
import { useFirestore, useCollection } from 'vuefire'
import { getFirestore, collection, getDocs } from 'firebase/firestore'

// const db = useFirestore()
// const db = getFirestore(firebaseApp)

// const getDB = async () => {
//   const res = await getDocs(collection(db, 'user'))
//   console.log(res)
// }

// const user = getDB()
</script>

<template>
  <span>{{ user }}</span>
  <!-- <li v-for="usr in user" :key="usr.id">
    <span>{{ usr.emal }}</span>
  </li> -->
</template>
