import type { AfterReadHook } from 'payload/dist/collections/config/types';

// TypeScript interface for author object
interface Author {
  id: string;
  // Add more properties if needed
}

// Function to validate authors array
function validateAuthors(authors: (string | Author)[]): boolean {
  return authors.every(author => {
    if (typeof author === 'string') {
      // Validate author ID (e.g., check length, format)
      return isValidAuthorId(author);
    } else if (typeof author === 'object' && author !== null) {
      // Validate author object structure (e.g., contains required properties)
      return isValidAuthorObject(author);
    } else {
      return false; // Invalid type
    }
  });
}

// Example validation functions
function isValidAuthorId(id: string): boolean {
  // Implement validation logic for author ID
  return id.length === 24; // Example: Check if it's a valid MongoDB ObjectId
}

function isValidAuthorObject(author: any): boolean {
  // Implement validation logic for author object
  return author.hasOwnProperty('id'); // Example: Check if it contains required properties
}

export const populateAuthors: AfterReadHook = async ({ doc, req: { payload }  }) => {
  try {
    if (doc?.authors && validateAuthors(doc.authors)) {
      const authorDocs = await Promise.all(
        doc.authors.map(async author => {
          try {
            const authorId = typeof author === 'object' ? author?.id : author;
            const authorDoc = await payload.findByID({
              collection: 'users',
              id: authorId,
              depth: 0,
            });
            return authorDoc;
          } catch (error) {
            console.error('Error fetching author:', error);
            // Optionally handle the error, e.g., log it, set a default value, etc.
            return null; // Or any other default value
          }
        })
      );

      doc.populatedAuthors = authorDocs
        .filter(authorDoc => authorDoc !== null) // Filter out null values
        .map(authorDoc => ({
          id: authorDoc.id,
          name: authorDoc.name,
        }));
    }
  } catch (error) {
    console.error('Error populating authors:', error);
    // Optionally handle the error, e.g., log it, set a default value, etc.
  }

  return doc;
};
