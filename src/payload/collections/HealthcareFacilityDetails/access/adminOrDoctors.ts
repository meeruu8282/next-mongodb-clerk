import type { Access } from 'payload/config'
import { checkRole } from '../../Users/checkRole'

// this is just to check if the user is either an admin or a doctor

export const adminsOrDoctors: Access = ({ req: { user } }) => {
  // Scenario #1 - Check if user has the 'admin' role
  if (user && checkRole(['admin'], user)) {
    return true
  }

  // Scenario #2 - Check if user has the 'doctor role
  if (user && checkRole(['doctor'], user)) {
    return true
  }

  // Scenario #3 - Dissallow all others
  return false
}
