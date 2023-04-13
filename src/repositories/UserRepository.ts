import { database } from './Firebase'
import { collection, updateDoc, doc, getDocs, getDoc } from 'firebase/firestore'

const user = collection(database, 'user')
type UserReference = { id: string; name: string; email: string; role: string }

export class UserRepository {
  public async getUser() {
    const snapshot = await getDocs(user)
    return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
  }
  public async getUserById(id: string) {
    const snapshot = await getDoc(doc(user, id))

    if (snapshot.exists()) {
      return snapshot.data()
    } else {
      return null
    }
  }
  public updateUser({ id, name, email, role }: UserReference) {
    const roleRef = doc(database, 'role', role)
    updateDoc(doc(database, 'user', id), {
      name: name,
      email: email,
      role: roleRef
    })
      .then(() => {
        alert('Data has been saved!')
      })
      .catch((error) => {
        alert(error)
      })
  }
  public changeRole(id: string, value: any) {
    const roleRef = doc(database, 'role', value)
    updateDoc(doc(database, 'user', id), { role: roleRef })
  }
}
