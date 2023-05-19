<script type="module">
import { DesignSystemRepository } from '@/repositories/DesignSystemRepository'

const designSystemRepository = new DesignSystemRepository()

export default {
  components: {},
  data() {
    return {
      data: {
        atomic: [],
        component: [],
        componentNumber: null
      }
    }
  },
  methods: {
    async getAtomic() {
      this.data.atomic = await designSystemRepository.getAtomic()
    },
    async getComponent() {
      this.data.component = await designSystemRepository.getComponent()
    },
    async fetchComponent() {
      if (this.data.atomic && this.data.component) {
        for (let i = 0; i < this.data.component.length; i++) {
          for (let j = 0; j < this.data.atomic.length; j++) {
            if (this.data.component[i].atomic === this.data.atomic[j].id) {
              this.data.component[i].level = this.data.atomic[j].name
            }
          }
        }
      }
    },
    async countComponent() {
      this.data.componentNumber = this.data.component.length
    }
  },
  async created() {
    await this.getAtomic()
    await this.getComponent()
    await this.fetchComponent()
    await this.countComponent()
  }
}
</script>
<template>
  <div class="container">
    <div class="dataBox">
      <div v-if="this.data.componentNumber">
        <div class="number">{{ this.data.componentNumber }}</div>
        <div class="measurement">items</div>
      </div>
      <div v-else>Counting...</div>
    </div>
    <table>
      <thead>
        <th>Atomic Levels</th>
        <th>Component</th>
        <th>Platform</th>
      </thead>
      <tbody>
        <tr v-for="item in this.data.component" :key="item">
          <td>{{ item.level }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.platform }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-inline-start: 120px;
  padding-inline-end: 120px;
}
table {
  th,
  td {
    border: solid 1px #424242;
    padding: 8px 16px;
  }
}
.dataBox {
  padding: 20px;
  border: solid 1px #424242;
  border-radius: 24px;
  margin-block-end: 24px;
  .number {
    font-weight: 900;
    font-size: 40px;
    line-height: 100%;
  }
}
</style>
