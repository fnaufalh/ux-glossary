<script type="module">
import { UserRepository } from '@/repositories/UserRepository'
import { RoleRepository } from '@/repositories/RoleRepository'

const userRepository = new UserRepository()
const roleRepository = new RoleRepository()

export default {
  data() {
    return {
      user: [],
      roles: [],
      selected: {}
    }
  },
  methods: {
    async getUserById(id) {
      this.user = await userRepository.getUserById(id)
      this.selected = this.user.role.id
    },
    async getRole() {
      this.roles = await roleRepository.getRole()
    },
    submitData() {
      const userId = this.$route.params.userId
      const { name, email } = this.user
      const role = this.selected
      userRepository.updateUser({ id: userId, name, email, role })
    }
  },
  mounted() {
    this.getRole().then(() => {
      this.getUserById(this.$route.params.userId)
    })
  }
}
</script>
<template>
  <h2>Get User Detail</h2>
  <h4>Submit to update the data</h4>
  <br />
  <div>
    <input type="text" placeholder="Fullname" v-model="this.user.name" />
  </div>
  <div>
    <input type="text" placeholder="email" v-model="this.user.email" />
  </div>
  <div>
    <select v-model="this.selected">
      <option v-for="role in this.roles" :key="role.id" :value="role.id">
        {{ role.name }}
      </option>
    </select>
  </div>
  <div>
    <button @click="submitData">Save</button>
  </div>
</template>
