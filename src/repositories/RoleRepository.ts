import { database } from './Firebase'
import { addDoc, collection, updateDoc, doc, deleteDoc, getDocs } from 'firebase/firestore'

const role = collection(database, 'role')

export class RoleRepository {
  public async getRole() {
    const snapshot = await getDocs(role)
    return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
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
