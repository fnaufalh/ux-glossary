<script setup type="module">
import { RouterLink } from 'vue-router'
</script>

<template id="app">
  <header>
    <div class="brand">UX Glossary</div>

    <div class="right">
      <nav>
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/user">User</router-link></li>
          <li><router-link to="/project">Project</router-link></li>
          <li><router-link to="/role">Role</router-link></li>
          <li><router-link to="/search">Search</router-link></li>
        </ul>
      </nav>
  
      <div class="user">
        <p>Hi, name here | <button><img src="../assets/icons/icon-logout.svg"></button></p>
      </div>
    </div>
  </header>
  <main><router-view></router-view></main>
</template>

<style lang="scss" scoped>
header {
  display: flex;
  width: 100%;
  max-width: 100%;
  padding-inline: 1rem;
  align-items: center;
}

.brand {
  flex: 1 1 auto;
}

.right {
  display: flex;
  justify-content: end;
  align-items: center;
  flex: 1 1 auto;
}

nav ul {
  display: flex;
  list-style: none;
  width: 100%;

  li {
    padding-inline: 1rem;
    font-weight: 500;
  }
}
// header {
//   line-height: 1.5;
// }

// .logo {
//   display: block;
//   margin: 0 auto 2rem;
// }

// @media (min-width: 1024px) {
//   header {
//     display: flex;
//     place-items: center;
//     padding-right: calc(var(--section-gap) / 2);
//   }

//   .logo {
//     margin: 0 2rem 0 0;
//   }

//   header .wrapper {
//     display: flex;
//     place-items: flex-start;
//     flex-wrap: wrap;
//   }
// }
</style>
