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
      selected: {},
      payload: null
    }
  },
  methods: {
    async getUser() {
      this.users = await userRepository.getUser()
      this.selected = this.users.map((user) => (user.role ? user.role.id : null))
    },
    async getRole() {
      this.roles = await roleRepository.getRole()
    },
    changeRole(id, value) {
      userRepository.changeRole(id, value)
    }
  },
  created() {
    this.getRole().then(() => {
      this.getUser()
    })
  }
}
</script>
<template>
  <h2>Get Users</h2>
  <h4>Change role will update doc</h4>
  <br />
  <table border="1px solid #424242">
    <thead>
      <th>name</th>
      <th>email</th>
      <th>role</th>
      <th>action</th>
    </thead>
    <tbody>
      <tr v-for="(user, index) in this.users" :key="user.id">
        <td>{{ user.name }}</td>
        <td>{{ user.email }}</td>
        <td>
          <select
            v-model="this.selected[index]"
            @change="changeRole(user.id, this.selected[index])"
          >
            <option v-for="role in this.roles" :key="role.id" :value="role.id">
              {{ role.name }}
            </option>
          </select>
        </td>
        <td>
          <router-link :to="{ name: 'UserDetail', params: { userId: user.id.toString() } }"
            >Edit</router-link
          >
        </td>
      </tr>
    </tbody>
  </table>
  <br />
  <hr />
  <br />
</template>
