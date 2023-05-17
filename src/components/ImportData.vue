/* This file will import JSON to Firebase if URL is executed. Comment this function if import
process is done manually. */
<script type="module">
import { ImportDataRepository } from '@/repositories/ImportDataRepository'
import atomic from '@/datas/atomic.json'

const importRepository = new ImportDataRepository()

export default {
  data() {
    return {
      components: [],
      atomic: atomic
    }
  },
  methods: {
    addData(item) {
      importRepository.addAtomic(item)
    }
  },
  created() {
    for (let i = 0; i < this.atomic.length; i++) {
      this.addData(this.atomic[i].name)
    }
  }
}
</script>
<template>
  <div v-for="item in data" :key="item">{{ item.name }}</div>
</template>
