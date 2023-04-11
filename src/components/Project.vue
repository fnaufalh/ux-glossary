<script type="module">
import { ProjectRepository } from '@/repositories/ProjectRepository'

const projectRepository = new ProjectRepository()

export default {
  data() {
    return {
      projects: [],
      payload: null
    }
  },
  methods: {
    async getProject() {
      this.projects = await projectRepository.getProject()
    },
    addProject() {
      projectRepository.addProject(this.payload)
    },
    delProject(reference) {
      projectRepository.delProject(reference)
    }
  },
  created() {
    this.getProject()
  }
}
</script>
<template>
  <h2>Get Project</h2>
  <table border="1px solid #424242">
    <thead>
      <th>name</th>
      <th>action</th>
    </thead>
    <tbody>
      <tr v-for="project in this.projects" :key="project.id">
        <td>{{ project.name }}</td>
        <td><a @click="delProject(project.id)">Delete</a></td>
      </tr>
    </tbody>
  </table>
  <h2>Input Project</h2>
  <input v-model="payload" type="text" name="project" />
  <button type="submit" @click="addProject">Submit</button>
</template>
