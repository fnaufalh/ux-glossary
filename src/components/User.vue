<script type="module">
import { UserRepository } from '@/repositories/UserRepository'
import { RoleRepository } from '@/repositories/RoleRepository'

const userRepository = new UserRepository()
const roleRepository = new RoleRepository()

export default {
  data() {
    return {
      users: [],
      roles: [],
      payload: null
    }
  },
  methods: {
    async getUser() {
      this.users = await userRepository.getUser()
    },
    async getRole() {
      this.roles = await roleRepository.getRole()
    }
  },
  created() {
    this.getUser()
    this.getRole()
  }
}
</script>
<template>
  <h2>Get Users</h2>
  <table border="1px solid #424242">
    <thead>
      <th>name</th>
      <th>email</th>
      <th>role</th>
    </thead>
    <tbody>
      <tr v-for="user in this.users" :key="user.id">
        <td>{{ user.name }}</td>
        <td>{{ user.email }}</td>
        <td>{{ user.role ? user.role.name : '' }}</td>
      </tr>
    </tbody>
  </table>
  <h2>Get Roles</h2>
  <table border="1px solid #424242">
    <thead>
      <th>name</th>
    </thead>
    <tbody>
      <tr v-for="role in this.roles" :key="role.id">
        <td>{{ role.name }}</td>
      </tr>
    </tbody>
  </table>
</template>
