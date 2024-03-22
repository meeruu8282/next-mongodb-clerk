import type { AfterReadHook } from 'payload/dist/collections/config/types';

// Define the type of the author object
interface Author {
  id: string;
  name: string;
}

export const populateAuthors: AfterReadHook = async ({ doc, req: { payload } }) => {
  if (doc?.authors) {
    const authorDocs = await Promise.all(
      doc.authors.map(
        async (author: string | Author) => { // Explicitly define the type of author
          const authorId = typeof author === 'object' ? author.id : author;
          const authorDoc = await payload.findByID({
            collection: 'users',
            id: authorId,
            depth: 0,
          });

          return authorDoc;
        },
      ),
    );

    doc.populatedAuthors = authorDocs.map(authorDoc => ({
      id: authorDoc.id,
      name: authorDoc.name,
    }));
  }

  return doc;
};
