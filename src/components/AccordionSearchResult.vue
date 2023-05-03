<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    toggleAccordion() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>

<template>
  <div>
    <button 
      @click="toggleAccordion()" 
      class="expander" 
      :aria-expanded="isOpen"
      :aria-controls="`collapse${_uid}`"
    >
  
      <slot name="title" />
      <img src="../assets/icons/icon-chevron-down.svg" class="icon"
        :class="{
          'rotate-180': isOpen,
          'rotate-0': !isOpen,
        }">
    </button>
    
    <div v-show="isOpen" :id="`collapse${_uid}`">
      <slot name="content" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.expander {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 0;
  background: transparent;
  padding: .5rem 0 0;

  .icon {
    width: 24px;
    height: 24px;
  }
}
</style>
