<script setup type="module">
import { db, userRef } from '@/main'
import { defineComponent } from 'vue'
// import { useFirestore, useCollection } from 'vuefire'
import { getFirestore, collection, getDocs, QuerySnapshot } from 'firebase/firestore'

// const db = useFirestore()
// const db = getFirestore(firebaseApp)
defineComponent({
  data() {
    return {
      items: []
    }
  },
  mounted() {
    console.log('heel')
    userRef.get().then((QuerySnapshot) => {
      QuerySnapshot.forEach((doc) => {
        this.items.push({ email: doc.email, name: doc.name })
        console.log(this.items)
      })
    })
  }
})
</script>

<template>
  <span>Hello</span>
  <li v-for="usr in this.items" :key="usr.email">
    <span>{{ usr.email }}</span>
  </li>
</template>
