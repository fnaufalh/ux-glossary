<script type="module">
import { UserRepository } from '@/repositories/UserRepository'
import { ProjectRepository } from '@/repositories/ProjectRepository'

const userRepository = new UserRepository()
const projectRepository = new ProjectRepository()

export default {
  data() {
    return {
      items: [],
      projects: [],
      inputValue: ''
    }
  },
  methods: {
    async getUser() {
      this.items = await userRepository.getUser()
    },
    async getProject() {
      this.projects = await projectRepository.getProject()
    },
    inputProject() {
      projectRepository.addProject(this.inputValue)
    }
  },
  created() {
    this.getUser()
    this.getProject()
  }
}
</script>
<template>
  <h2>Get Data</h2>
  <li v-for="usr in this.items" :key="usr.email">
    <span>{{ usr.email }}</span>
  </li>
  <hr />
  <li v-for="project in this.projects" :key="project.name">
    <span>{{ project.name }}</span> <IconOTimes />
  </li>
  <h2>Input Project</h2>
  <input v-model="inputValue" type="text" name="project" />
  <button type="submit" @click="inputProject">Submit</button>
</template>
