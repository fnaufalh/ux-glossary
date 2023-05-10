import { database } from './Firebase'
import { useCollection } from 'vuefire'
import { addDoc, collection, deleteDoc, doc } from 'firebase/firestore'

const page = collection(database, 'page')

export class PageRepository {
  public getPage() {
    const response = useCollection(page)
    return response
  }
  public addPage(value: string) {
    addDoc(page, { name: value })
  }
  public delPage(reference: any) {
    deleteDoc(doc(page, reference))
  }
}
