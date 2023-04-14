<script type="module">
import { SearchRepository } from '@/repositories/SearchRepository'

const searchRepository = new SearchRepository()

export default {
  data() {
    return {
      keyword: null,
      results: []
    }
  },
  methods: {
    async searchData() {
      this.results = await searchRepository.search(this.keyword)
      console.log('search')
    }
  },
  created() {}
}
</script>
<template>
  <h2>Search Users</h2>
  <h4>Example of simple search without search engine</h4>
  <h6>Try search with <i>Naufal, admin, test, Yusak</i></h6>
  <br />
  <input type="text" placeholder="Enter keyword..." v-model="this.keyword" />
  <button @click="searchData()">Search</button>
  <br />
  <hr />
  <br />
  <ul>
    <li v-for="(item, index) in this.results" :key="index">
      <p v-for="(arr, arrIndex) in item" :key="arrIndex">{{ arr.name }}</p>
    </li>
  </ul>
</template>
<style scoped>
ul,
li {
  list-style: none;
}
</style>
