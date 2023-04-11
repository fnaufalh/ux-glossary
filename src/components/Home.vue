<script type="module">
import { UserRepository } from '@/repositories/UserRepository'
import { RoleRepository } from '@/repositories/RoleRepository'
import { RouterLink } from 'vue-router'

const userRepository = new UserRepository()
const roleRepository = new RoleRepository()

export default {
  data() {
    return {
      users: [],
      projects: [],
      input: {
        project: '',
        role: ''
      }
    }
  },
  methods: {
    async getUser() {
      this.users = await userRepository.getUser()
    },

    async getRole() {
      this.roles = await roleRepository.getRole()
    },
    addRole() {
      roleRepository.addRole(this.input.role)
    }
  },
  created() {
    this.getUser()
    this.getRole()
  }
}
</script>
<template>
  <h2>Get Data</h2>
  <table border="1px solid #424242">
    <thead>
      <th>name</th>
      <th>email</th>
      <th>role</th>
    </thead>
    <tbody>
      <tr v-for="user in this.users" :key="user.email">
        <td>{{ user.name }}</td>
        <td>{{ user.email }}</td>
        <td>{{ user.role ? user.role.name : '' }}</td>
      </tr>
    </tbody>
  </table>
</template>
