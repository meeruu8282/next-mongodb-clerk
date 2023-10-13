import type { Access } from 'payload/config'
import { checkRole } from '../../Users/checkRole'

// there is an important reason as to why both this function, and the adminsOrAuthorsOrPublished function exists
// this function is used to check wether a user is allowed to delete blogposts, so it must only return true if the user is either an admin or the author who created it
// the other function returns true if the blogpost is published, so if that was used instead, it would mean that any user could delete published blogposts, hence the need for this function

export const adminsOrCreatedBy: Access = ({ req: { user } }) => {
  // Scenario #1 - Check if user has the 'admin' role
  if (user && checkRole(['admin'], user)) {
    return true
  }

  // Scenario #2 - Check if user has the 'author role
  if (user && checkRole(['author'], user)) {
    // Will only return access for documents that were created by the current user
    return {
        authors: {
          equals: user.id,
        },
      };
  }

  // Scenario #3 - Dissallow all others
  return false
}
