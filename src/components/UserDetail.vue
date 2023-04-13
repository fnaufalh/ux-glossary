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
      selected: {},
      payload: null
    }
  },
  methods: {
    async getUserById(id) {
      this.user = await userRepository.getUserById(id)
    },
    async getRole() {
      this.roles = await roleRepository.getRole()
    },
    changeRole(id, value) {
      userRepository.changeRole(id, value)
    }
  },
  mounted() {
    console.log('masuk')
    // this.getRole().then(() => {
    //   this.getUser()
    // })
  }
}
</script>
<template>
  <h2>Get User Detail</h2>
  <h4>Submit to update the data</h4>
  <br />
  <div>
    <input type="text" placeholder="Fullname" />
  </div>
  <div>
    <input type="text" placeholder="email" />
  </div>
  <div>
    <!-- <select v-model="this.selected[index]" @change="changeRole(user.id, this.selected[index])">
      <option v-for="role in this.roles" :key="role.id" :value="role.id">
        {{ role.name }}
      </option>
    </select> -->
  </div>
</template>
