import type { Access } from 'payload/config'
import { checkRole } from '../../Users/checkRole'

// this is just to check if the user is either an admin or an author
export const adminsOrAuthors: Access = ({ req: { user } }) => {
  // Scenario #1 - Check if user has the 'admin' role
  if (user && checkRole(['admin'], user)){
    return true
  }

  // Scenario #2 - Check if user has the 'author' role
  if (user && checkRole(['author'], user)){
    return true
  }

  // Scenario #3 - Disallow all others
  return false
}
