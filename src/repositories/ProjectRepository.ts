import { database } from './Firebase'
import { useCollection } from 'vuefire'
import { addDoc, collection } from 'firebase/firestore'

export class ProjectRepository {
  public getProject() {
    const project = collection(database, 'project')
    const response = useCollection(project)
    return response
  }
  public addProject(value: string) {
    const project = collection(database, 'project')
    addDoc(project, { name: value })
  }
}
