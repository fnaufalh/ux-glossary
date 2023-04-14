import { collection, query, where, getDocs } from 'firebase/firestore'
import { database } from './Firebase'

export class SearchRepository {
  public async search(keyword: any) {
    const userQuery = query(
      collection(database, 'user'),
      where('name', '>=', keyword),
      where('name', '<=', keyword + '\uf8ff')
    )
    const roleQuery = query(
      collection(database, 'role'),
      where('name', '>=', keyword),
      where('name', '<=', keyword + '\uf8ff')
    )
    const projectQuery = query(
      collection(database, 'project'),
      where('name', '>=', keyword),
      where('name', '<=', keyword + '\uf8ff')
    )

    const [userSnapshot, roleSnapshot, projectSnapshot] = await Promise.all([
      getDocs(userQuery),
      getDocs(roleQuery),
      getDocs(projectQuery)
    ])

    const users = userSnapshot.docs.map((doc) => {
      return { id: doc.id, ...doc.data() }
    })
    const roles = roleSnapshot.docs.map((doc) => {
      return { id: doc.id, ...doc.data() }
    })
    const projects = projectSnapshot.docs.map((doc) => {
      return { id: doc.id, ...doc.data() }
    })
    console.log({ users, roles, projects })

    return { users, roles, projects }
  }
}
