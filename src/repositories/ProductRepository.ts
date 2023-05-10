import { database } from './Firebase'
import { useCollection } from 'vuefire'
import { addDoc, collection, deleteDoc, doc } from 'firebase/firestore'

const product = collection(database, 'product')

export class ProductRepository {
  public getProduct() {
    const response = useCollection(product)
    return response
  }
  public addProduct(value: string) {
    addDoc(product, { name: value })
  }
  public delProduct(reference: any) {
    deleteDoc(doc(product, reference))
  }
}
