/*
  This file will import JSON to Firebase.
*/
import { database } from './Firebase'
import { addDoc, collection, doc, getDocs } from 'firebase/firestore'

const data = collection(database, 'atomic')

export class ImportDataRepository {
  public addAtomic(reference: string) {
    addDoc(data, { name: reference })
  }
}
