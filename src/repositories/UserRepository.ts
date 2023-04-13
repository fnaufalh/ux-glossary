import { database } from './Firebase'
import { collection, updateDoc, doc, getDocs } from 'firebase/firestore'

const user = collection(database, 'user')

export class UserRepository {
  public async getUser() {
    const snapshot = await getDocs(user)
    return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
  }
  public changeRole(id: string, value: any) {
    const roleRef = doc(database, 'role', value)
    updateDoc(doc(database, 'user', id), { role: roleRef })
  }
}
