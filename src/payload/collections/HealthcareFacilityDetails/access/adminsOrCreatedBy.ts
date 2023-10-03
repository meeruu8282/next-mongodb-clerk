import type { Access } from 'payload/config'
import { checkRole } from '../../Users/checkRole'

export const adminsOrCreatedBy: Access = ({ req: { user } }) => {
  // Scenario #1 - Check if user has the 'admin' role
  if (user && checkRole(['admin'], user)) {
    return true
  }

  // Scenario #2 - Check if user has the 'author role
  if (user && checkRole(['doctor'], user)) {
    // Will only return access for documents that were created by the current user
    return {
        doctors: {
          equals: user.id,
        },
      };
  }

  // Scenario #3 - Dissallow all others
  return false
}
