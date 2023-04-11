<script type="module">
import { RoleRepository } from '@/repositories/RoleRepository'

const roleRepository = new RoleRepository()

export default {
  data() {
    return {
      roles: [],
      payload: null
    }
  },
  methods: {
    async getRole() {
      this.roles = await roleRepository.getRole()
    },
    addRole() {
      roleRepository.addRole(this.payload)
    }
  },
  created() {
    this.getRole()
  }
}
</script>
<template>
  <h2>Get Role</h2>
  <table border="1px solid #424242">
    <thead>
      <th>name</th>
      <!-- <th>action</th> -->
    </thead>
    <tbody>
      <tr v-for="role in this.roles" :key="role.id">
        <td>{{ role.name }}</td>
        <!-- <td><a @click="delProject(project.id)">Delete</a></td> -->
      </tr>
    </tbody>
  </table>
  <!-- <h2>Input Project</h2>
  <input v-model="payload" type="text" name="project" />
  <button type="submit" @click="addProject">Submit</button> -->
</template>
