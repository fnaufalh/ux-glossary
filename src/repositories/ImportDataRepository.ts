/*
  This file will import JSON to Firebase.
*/
import { database } from './Firebase'
import { addDoc, collection, getDocs } from 'firebase/firestore'

const atomic = collection(database, 'atomic')
const component = collection(database, 'component')

export class ImportDataRepository {
  public addAtomic(reference: string) {
    addDoc(atomic, { name: reference })
  }
  public async getAtomic() {
    const atomicSnapshot = await getDocs(atomic)
    return atomicSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data()
    }))
  }
  public addComponent(reference: any) {
    addDoc(component, reference)
  }
}
