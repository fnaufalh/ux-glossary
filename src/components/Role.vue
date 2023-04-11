<script type="module">
import { RoleRepository } from '@/repositories/RoleRepository'

const roleRepository = new RoleRepository()

export default {
  data() {
    return {
      roles: [],
      payload: {
        id: null,
        name: null
      }
    }
  },
  methods: {
    async getRole() {
      this.roles = await roleRepository.getRole()
    },
    addRole() {
      roleRepository.addRole(this.payload.name)
    },
    delRole(reference) {
      roleRepository.delRole(reference)
    },
    editRole(id, name) {
      this.payload = {
        id: id,
        name: name
      }
    },
    updateRole() {
      roleRepository.updateRole(this.payload)
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
      <th>action</th>
    </thead>
    <tbody>
      <tr v-for="role in this.roles" :key="role.id">
        <td>{{ role.name }}</td>
        <td>
          <a @click="editRole(role.id, role.name)">Edit</a> |
          <a @click="delRole(role.id)">Delete</a>
        </td>
      </tr>
    </tbody>
  </table>
  <input type="text" v-model="this.payload.name" /><button @click="updateRole">Save</button>
  <input type="text" v-model="this.payload.name" /><button @click="addRole">Submit</button>
</template>
