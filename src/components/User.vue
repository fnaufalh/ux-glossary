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
  computed: {
    getUser() {
      return userRepository.getUser()
      // this.selected = this.users.map((user) => {
      //   if (user.role) {
      //     return user.role.id
      //   }
      // })
    }
  },
  methods: {
    // async getUser() {
    //   this.users = await userRepository.getUser()
    //   this.selected = this.users.map((user) => {
    //     if (user.role) {
    //       console.log(user.role.id)
    //       return user.role.id
    //     } else {
    //       return 'kosong'
    //     }
    //   })
    //   console.log(this.selected)
    // },
    // async getRole() {
    //   this.roles = await roleRepository.getRole()
    // },
    // checkSelected(index, userRole, role) {
    //   if (userRole && role && userRole === role) {
    //     this.selected[index] = role
    //     console.log(this.selected)
    //   }
    // },
    // changeRole(id, value) {
    //   // this.selected[id] = value
    //   // console.log(this.selected[id])
    //   userRepository.changeRole(id, value)
    // }
  }
  // created() {
  //   // this.getUser()
  //   // this.getRole()
  //   console.log(this.users)
  // }
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
      <tr>
        {{
          getUser
        }}
      </tr>
      <!-- <tr v-for="(user, index) in getUser" :key="user.id">
        <td>{{ user.name }}</td>
        <td>{{ user.email }}</td>
        <td>Selected: {{ this.selected }}</td>
        <td>
          <select v-model="this.selected[index]" @change="changeRole(user.id, selected[index])">
            <option v-for="role in this.roles" :key="role.id" :value="role.id">
              {{ role.name }}
            </option>
          </select>
        </td>
      </tr> -->
    </tbody>
  </table>
</template>
