<script type="module">
import { db, userRef } from '@/main'
import { useFirestore, useCollection } from 'vuefire'
import { getFirestore, collection, getDocs, QuerySnapshot } from 'firebase/firestore'

export default {
  data() {
    return {
      items: []
    }
  },
  methods: {
    async getUser() {
      this.items = useCollection(userRef)
    }
  },
  created() {
    this.getUser()
    console.log(this.items)
  }
}
</script>

<template>
  <span>Hello</span>
  <li v-for="usr in this.items" :key="usr.email">
    <span>{{ usr.email }}</span>
  </li>
</template>
