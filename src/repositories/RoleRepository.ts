import { database } from './Firebase'
import { useCollection } from 'vuefire'
import { addDoc, collection } from 'firebase/firestore'

export class RoleRepository {
  public getRole() {
    const role = collection(database, 'role')
    const response = useCollection(role)
    return response
  }
  public addRole(value: string) {
    const role = collection(database, 'role')
    addDoc(role, { name: value })
  }
}
