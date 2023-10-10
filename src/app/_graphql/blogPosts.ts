import { ARCHIVE_BLOCK, CALL_TO_ACTION, CONTENT, MEDIA_BLOCK } from './blocks'
import { LINK_FIELDS } from './link'
import { MEDIA } from './media'
import { META } from './meta'

export const BLOGPOSTS = `
  query Blogposts {
    Blogposts(limit: 300) {
      docs {
        slug
        meta {
          description
        }
        featuredImage {
          url
        }
        updatedAt
        populatedAuthors {
          name
        }
      }
    }
  }
`

export const BLOGPOST = `
  query Blogpost($slug: String, $draft: Boolean) {
    Blogposts(where: { slug: { equals: $slug }}, limit: 1, draft: $draft) {
      docs {
        id
        title
        hero {
          type
          richText
          links {
            link ${LINK_FIELDS()}
          }
          ${MEDIA}
        }
        layout {
          ${CONTENT}
          ${CALL_TO_ACTION}
          ${CONTENT}
          ${MEDIA_BLOCK}
          ${ARCHIVE_BLOCK}
        }
        ${META}
      }
    }
  }
`