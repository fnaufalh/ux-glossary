import { database } from './Firebase'
import { useCollection } from 'vuefire'
import { addDoc, collection, updateDoc, doc, deleteDoc } from 'firebase/firestore'

const role = collection(database, 'role')

export class RoleRepository {
  public getRole() {
    const response = useCollection(role)
    return response
  }
  public addRole(reference: string) {
    addDoc(role, { name: reference })
  }
  public delRole(reference: string) {
    deleteDoc(doc(role, reference))
  }
  public updateRole(reference: any) {
    updateDoc(doc(database, 'role', reference.id), { name: reference.name })
  }
}
