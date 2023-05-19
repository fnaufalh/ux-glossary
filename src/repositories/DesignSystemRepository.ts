import { collection, getDocs } from 'firebase/firestore'
import { database } from './Firebase'

const atomic = collection(database, 'atomic')
const component = collection(database, 'component')

export class DesignSystemRepository {
  public async getAtomic() {
    const atomicSnapshot = await getDocs(atomic)
    return atomicSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data()
    }))
  }

  public async getComponent() {
    const componentSnapshot = await getDocs(component)
    return componentSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data()
    }))
  }
}
