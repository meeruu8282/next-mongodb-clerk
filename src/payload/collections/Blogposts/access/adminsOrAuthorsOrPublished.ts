import type { Access } from 'payload/config'
import { checkRole } from '../../Users/checkRole'

export const adminsOrAuthorsOrPublished: Access = ({ req: { user } }) => {
  // Scenario #1 - Check if user has the 'admin' role
  if (user && checkRole(['admin'], user)) {
    return true
  }

  // Scenario #2 - Check if user has the 'author' role
  if (user && checkRole(['author'], user)) {
    // Will only return access for documents that were created by the current user
    return {
        authors: {
          equals: user.id,
        },
      };
  }

  // Scenario #3 - Allow only documents that are published
  return {
    _status: {
      equals: 'published',
    },
  }
}
