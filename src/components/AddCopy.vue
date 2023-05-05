<script type="module">
import AccordionSearchResult from './AccordionSearchResult.vue'
import {ProjectRepository} from '@/repositories/ProjectRepository'
import {ProductRepository} from '@/repositories/ProductRepository'
import {PlatformRepository} from '@/repositories/PlatformRepository'
import {PageRepository} from '@/repositories/PageRepository'

const projectRepository = new ProjectRepository()
const productRepository = new ProductRepository()
const platformRepository = new PlatformRepository()
const pageRepository = new PageRepository()

export default {
  components: {
    AccordionSearchResult
  },
  data() {
    return {
      projects: [],
      selectedProject: '',
      products: [],
      selectedProduct: '',
      platforms: [],
      selectedPlatform: '',
      pages: [],
      selectedPage: '',
      isOpen: false,
    }
  },
  methods: {
    toggleAccordion() {
      this.isOpen = !this.isOpen;
    },
    // to get project from firebase
    async getProject() {
      this.projects = await projectRepository.getProject()
    },
    // to get product from firebase
    async getProduct() {
      this.products = await productRepository.getProduct()
    },
    // to get platform from database
    async getPlatform() {
      this.platforms = await platformRepository.getPlatform()
    },
    // to get page from database
    async getPage() {
      this.pages = await pageRepository.getPage()
    }
  },
  created() {
    this.getProject()
    this.getProduct()
    this.getPlatform()
    this.getPage()
  }
}
</script>

<template>
<div class="wrapper">
  <div class="page-title">
    <router-link class="btn btn-back" to="/search"><img src="../assets/icons/icon-arrow-left.svg"></router-link>
    <p>Add Copy</p>
  </div>

  <div class="form-group">
    <label for="">EN</label>
    <textarea name="" cols="4" rows="4" class="form-control"></textarea>
  </div>
  <div class="form-group">
    <label for="">ID</label>
    <textarea name="" cols="4" rows="4" class="form-control"></textarea>
  </div>
  <div class="form-wrapper">
    <div class="form-group">
      <label class="label">Page</label>
      <select v-model="selectedPage" class="form-control">
        <option disabled value="">Select Page</option>
        <option v-for="page in this.pages" :value="page.id">{{page.name}}</option>
      </select>
    </div>
    <div class="form-group">
      <label class="label">Platform</label>
      <select v-model="selectedPlatform" class="form-control">
        <option disabled value="">Select Platform</option>
        <option v-for="platform in this.platforms" :value="platform.id">{{platform.name}}</option>
      </select>
    </div>
  </div>
  <div class="form-wrapper">
    <div class="form-group">
      <label class="label">Product</label>
      <select v-model="selectedProduct" class="form-control">
        <option disabled value="">Select Product</option>
        <option v-for="product in this.products" :value="product.id">{{product.name}}</option>
      </select>
    </div>
    <div class="form-group">
      <label class="label">Project</label>
      <select v-model="selectedProject" class="form-control">
        <option disabled value="">Select Project</option>
        <option v-for="project in this.projects" :value="project.id" >{{project.name}}</option>
      </select>
    </div>
  </div>

  <accordion-search-result>
    <template v-slot:title>
      <div class="expander">
        <p class="no-margin">Optional</p>
      </div>
    </template>
    <template v-slot:content>
      <div class="form-group">
        <label class="label">Description</label>
        <textarea name="" cols="4" rows="4" class="form-control"></textarea>
      </div>
      <div class="form-group">
        <label class="label">Note</label>
        <textarea name="" cols="4" rows="4" class="form-control"></textarea>
      </div>
    </template>
  </accordion-search-result>

  <button class="btn btn-primary">Add Copy</button>
</div>
</template>

<style lang="scss" scoped>
.wrapper {
  width: 100%;
  max-width: 384px;
  margin: 0 auto;
}

.page-title {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-block-end: .75rem;
  font-weight: 500;

  p {
    margin-block-end: 0;
  }
}

.expander {
  margin-block-end: 1rem;

  .no-margin {
    margin: 0;
  }
}

.form-control {
  width: 100%;
}

.form-wrapper {
  display: flex;
  flex-direction: row;
  gap: 1rem;

  .form-group {
    flex: 1 1 50%;
  }
}

.form-group {
  margin-block-end: 1.5rem;
}

.label {
  display: block;
  margin-block-end: .5rem;
}

.btn-primary {
  width: 100%;
}

.btn.btn-back {
  padding-inline: .5rem;
}
</style>