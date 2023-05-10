import { database } from './Firebase'
import { useCollection } from 'vuefire'
import { addDoc, collection, deleteDoc, doc } from 'firebase/firestore'

const platform = collection(database, 'platform')

export class PlatformRepository {
  public getPlatform() {
    const response = useCollection(platform)
    return response
  }
  public addPlatform(value: string) {
    addDoc(platform, { name: value })
  }
  public delPlatform(reference: any) {
    deleteDoc(doc(platform, reference))
  }
}
