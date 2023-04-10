import { database } from './Firebase'
import { useCollection } from 'vuefire'
import { addDoc, collection, deleteDoc, doc } from 'firebase/firestore'

const project = collection(database, 'project')

export class ProjectRepository {
  public getProject() {
    const response = useCollection(project)
    return response
  }
  public addProject(value: string) {
    addDoc(project, { name: value })
  }
  public delProject(reference: any) {
    deleteDoc(doc(project, reference))
  }
}
