<script type="module">
import { SearchRepository } from '@/repositories/SearchRepository'
import Accordion from './Accordion.vue'

const searchRepository = new SearchRepository()

export default {
  components: {
    Accordion
  },
  data() {
    return {
      keyword: null,
      results: [],
      isOpen: false,
    }
  },
  methods: {
    async searchData() {
      this.results = await searchRepository.search(this.keyword)
    },
    
    toggleAccordion() {
      this.isOpen = !this.isOpen;
    },
  },
  mounted() {},
  created() {}
}
</script>
<template>
  <div class="container">
    <p>Try search with <i>Naufal, admin, test, Yusak</i></p>

    <div class="input-group">
      <input class="form-control search" type="text" placeholder="Enter keyword..." v-model="this.keyword" />
      <div class="action">
        <button @click="searchData()"><img src="../assets/icons/icon-search.svg"></button>
        <!-- function not working yet-->
        <!-- <select name="" id="">
          <option value="All">All</option>
          <option value="All">Platform</option>
          <option value="All">Body</option>
        </select> -->
      </div>
    </div>
    <!-- function not working yet -->
    <!-- <div class="last-search">
      <span class="badge">Lowest Price</span>
      <span class="badge">Start from</span>
      <span class="badge">Additional text will be here</span>
      <span class="badge">Hi Guest</span>
      <span class="badge">Reset</span>
    </div> -->

    <div class="title-wrapper">
      <p>Result</p>
      <router-link to="/addCopy" class="btn btn-primary">Add Copy</router-link>
    </div>

    <div class="result">
      <div v-for="(item, index) in this.results" :key="index">
        <div v-for="(arr, arrIndex) in item" :key="arrIndex" class="result-item">
          <div class="copy">
            <div class="block">
              <p ref="blockHeight">
                {{arr.lang_en}}
              </p>
              <p class="overlay">More</p>
              <button class="btn"><img src="../assets/icons/icon-copy.svg"></button>
            </div>
            <div class="block">
              <p>
                {{arr.lang_id}}
              </p>
              <p class="overlay">More</p>
              <button class="btn"><img src="../assets/icons/icon-copy.svg"></button>
            </div>
          </div>
          <accordion>
            <template v-slot:title>
              <div class="info">
                <p class="project">{{arr.name}}</p>
                <p class="user">10 April 2023 By {{arr.name}}</p>
              </div>
            </template>
            <template v-slot:content>
              <div class="info">
                <div class="info-item">
                  <p>Utilization</p>
                  <p>Modal dialog description on detail hotel product My Booking Page (MW)</p>
                </div>
                <div class="info-item">
                  <p>Note</p>
                  <p>Inactive caused by design change</p>
                </div>
              </div>
            </template>
          </accordion>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.container {
  width:100%;
  max-width: 680px;
  padding-inline: 1rem;
  margin: 0 auto;
}

.input-group {
  display: flex;
  align-items: center;
  position: relative;
  margin-bottom: 1.5rem;

  .search {
    width: 100%;
  }

  .action {
    position: absolute;
    right: 0;
    top: 0;
    display: flex;
    align-items: center;
    height: 100%;
    padding-inline-end: 1rem;

    button, select {
      height: 100%;
      background: transparent;
      border: 0;
    }

    select {
      padding-inline: .5rem;
    }
  }
}

.last-search {
  display: flex;
  width: 100%;
  justify-content: center;
  gap: .75rem;
  margin-bottom: 3.25rem;
}

.title-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-block-end: 1.5rem;

  p {
    margin-bottom: 0;
  }
}

.copy {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  font-size: 1.25rem;

  .block {
    position: relative;
    background: var(--neutral-100);
    height: 180px;
    border-radius: var(--border-radius-300);
    padding: .5rem 1rem;
    overflow: hidden;

    .btn {
      position: absolute;
      bottom: .25rem;
      right: .25rem;
      padding: .5rem;
      z-index: 2;
    }

    p {
      position: relative;
     z-index: 0; 
    }
    p.overlay {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      padding: 2rem 1rem .5rem;
      min-height: 50px;
      font-size: .875rem;
      background: rgb(244,244,246);
      background: linear-gradient(360deg, rgba(244,244,246,1) 45%, rgba(244,244,246,0) 100%);
      z-index: 1;
      margin-block-end: 0;
    }
  }
}

.info {
  text-align: left;

  p {
    margin-block-end: 0;
  }
}

.result-item + .result-item {
  padding-block-start: 1.5rem;
  margin-block-start: 1.25rem;
  border-top: 1px solid var(--neutral-100);
}

.info-item {
  &:first-child {
    margin-top: 1rem;
  }

  p:first-child {
    font-weight: 500;
  }
}

.info-item + .info-item {
  padding-block-start: .75rem;
}

</style>
