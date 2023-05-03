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
          <li><router-link to="/search">Search</router-link></li>
          <li><router-link to="#">Dictionary</router-link></li>
          <li class="dropdown">
            <a href="#" role="button">Database</a>
            <ul class="dropdown-menu">
              <li><router-link to="/user">User</router-link></li>
              <li><router-link to="/project">Project</router-link></li>
              <li><router-link to="/role">Role</router-link></li>
            </ul>
          </li>
          
        </ul>
      </nav>
  
      <div class="user">
        <p>Hi, Yusak</p>
        <button class="btn"><img src="../assets/icons/icon-logout.svg"></button>
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
  font-weight: 500;
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

.dropdown {
  position: relative;
  display: inline-block;

  &::after {
    content: '';
    background: url(../assets/icons/icon-chevron-down.svg) center no-repeat;
    position: absolute;
    top: 0;
    right: 0;
    width: 20px;
    height: 20px;
  }

  &-menu {
    display: none;
    position: absolute;
    flex-direction: column;
    background: var(--neutral-0);
    min-width: 120px;
    z-index: 1;
    padding-left: 0;
    box-shadow: 0 4px 15px var(--neutral-900-shadow);
    border-radius: var(--border-radius-100);
    overflow: hidden;
    
    li {
      padding-inline: 0;

      a {
        display: block;
        padding: .25rem .5rem;
      }

      a:hover {
        background: var(--primary-500);
        color: var(--neutral-0);
      }
    }
  }

  &:hover .dropdown-menu{
    display: block;
  }
}

.user {
  display: flex;
  align-items: center;
  font-weight: 500;

  p {
    margin-block-end: 0;
  }

  p::after {
    content: '|';
    padding-left: 1rem;
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
