import { database } from './Firebase'
import { useCollection } from 'vuefire'
import { addDoc, collection, deleteDoc, doc } from 'firebase/firestore'

const word = collection(database, 'word')

export class WordRepository {
  public getWord() {
    const response = useCollection(word)
    return response
  }
  public addWord(valueEN: string, valueID: string) {
    addDoc(word, { lang_en: valueEN, lang_id: valueID })
  }
  public delWord(reference: any) {
    deleteDoc(doc(word, reference))
  }
}
