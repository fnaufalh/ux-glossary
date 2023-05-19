<script type="module">
/* This file will import JSON to Firebase if URL is executed. Comment this function if import
process is done manually. */
import { ImportDataRepository } from '@/repositories/ImportDataRepository'
/* Change this code below to import it */
// import atomic from '@/datas/atomic.json'
// import component from '@/datas/component.json'

const importRepository = new ImportDataRepository()

export default {
  data() {
    return {
      components: [],
      data: {
        atomic: null,
        component: [],
        compare: []
      }
    }
  },
  methods: {
    addAtomic(item) {
      importRepository.addAtomic(item)
    },
    addComponent(item) {
      importRepository.addComponent(item)
    },
    async getAtomic() {
      this.data.atomic = await importRepository.getAtomic()
    }
  },
  created() {
    /* Get Atomic before fetch the atomic and components */
    // this.getAtomic()
    /* Get the components */
    // this.data.component = component
    /* loop the atomic data to import */
    // this.data.atomic = atomic
    // for (let i = 0; i < this.data.atomic.length; i++) {
    //   this.addAtomic(this.data.atomic[i].name)
    // }
    /* loop the component data to import */
    // this.getAtomic().then(() => {
    //   if (this.data.atomic) {
    //     console.log('in')
    //     for (let i = 0; i < this.data.component.length; i++) {
    //       for (let j = 0; j < this.data.atomic.length; j++) {
    //         if (this.data.component[i].atomic === this.data.atomic[j].name) {
    //           /* compare to test the json and the atomic is well fetched */
    //           // this.data.compare[i] =
    //           //   this.data.component[i].atomic + ' X ' + this.data.atomic[j].name
    //           /* Get the atomic ID and add the component */
    //           this.data.component[i].atomic = this.data.atomic[j].id
    //           this.addComponent(this.data.component[i])
    //           console.log(this.data.component[i])
    //         }
    //       }
    //     }
    //   } else {
    //     console.log('out')
    //   }
    // })
  }
}
</script>
<template>
  <!-- <div v-for="item in this.data.atomic" :key="item">{{ item }}</div> -->
  <!-- <div v-for="item in this.data.component" :key="item">{{ item }}</div> -->
  <!-- <div v-for="item in this.data.compare" :key="item">{{ item }}</div> -->
  <div></div>
</template>
