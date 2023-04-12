import { database } from './Firebase'
import { useCollection } from 'vuefire'
import { collection, updateDoc, doc } from 'firebase/firestore'

const user = collection(database, 'user')

export class UserRepository {
  public getUser() {
    const response = useCollection(user)
    return response
  }
  public changeRole(id: string, value: any) {
    const roleRef = doc(database, 'role', value)
    updateDoc(doc(database, 'user', id), { role: roleRef })
  }
}
