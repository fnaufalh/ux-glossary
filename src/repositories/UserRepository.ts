import { database } from './Firebase'
import { useCollection } from 'vuefire'
import { collection } from 'firebase/firestore'

export class UserRepository {
  public getUser() {
    const user = collection(database, 'user')
    const response = useCollection(user)
    return response
  }
}
