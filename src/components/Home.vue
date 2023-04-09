<script type="module">
import { UserRepository } from '@/repositories/UserRepository'
import { ProjectRepository } from '@/repositories/ProjectRepository'
import { RoleRepository } from '@/repositories/RoleRepository'

const userRepository = new UserRepository()
const projectRepository = new ProjectRepository()
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
    async getProject() {
      this.projects = await projectRepository.getProject()
    },
    async getRole() {
      this.roles = await roleRepository.getRole()
    },
    addRole() {
      roleRepository.addRole(this.input.role)
    },
    addProject() {
      projectRepository.addProject(this.input.project)
    }
  },
  created() {
    this.getUser()
    this.getProject()
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
  <hr />
  <li v-for="project in this.projects" :key="project.name">
    <span>{{ project.name }}</span> <IconOTimes />
  </li>
  <h2>Input Project</h2>
  <input v-model="input.project" type="text" name="project" />
  <button type="submit" @click="addProject">Submit</button>
</template>
