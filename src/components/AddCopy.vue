<script type="module">
import AccordionSearchResult from './AccordionSearchResult.vue'

export default {
  components: {
    AccordionSearchResult
  },
  data() {
    return {
      isOpen: false,
    }
  },
  methods: {
    toggleAccordion() {
      this.isOpen = !this.isOpen;
    },
  },
  created() {}
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
      <select name="" id="" class="form-control">
        <option value="">option1</option>
        <option value="">option2</option>
      </select>
    </div>
    <div class="form-group">
      <label class="label">Platform</label>
      <select name="" id="" class="form-control">
        <option value="">option1</option>
        <option value="">option2</option>
      </select>
    </div>
  </div>
  <div class="form-wrapper">
    <div class="form-group">
      <label class="label">Product</label>
      <select name="" id="" class="form-control">
        <option value="">option1</option>
        <option value="">option2</option>
      </select>
    </div>
    <div class="form-group">
      <label class="label">Project</label>
      <select name="" id="" class="form-control">
        <option value="">option1</option>
        <option value="">option2</option>
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