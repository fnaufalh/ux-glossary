<script setup type="module">
import Home from './Home.vue'
import { RouterLink } from 'vue-router'
</script>

<template id="app">
  <header>
    <img alt="Vue logo" class="logo" src="/src/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/user">User</router-link></li>
        <li><router-link to="/project">Project</router-link></li>
        <li><router-link to="/role">Role</router-link></li>
      </ul>
    </div>
  </header>
  <main><router-view></router-view></main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
