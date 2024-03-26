import type { AfterReadHook } from 'payload/dist/collections/config/types';

export const populateDoctors: AfterReadHook = async ({ doc, req: { payload } }) => {
  if (doc?.doctors) {
    const doctorDocs = await Promise.all(
      doc.doctors.map(
        async doctor =>
          await payload.findByID({
            collection: 'users',
            id: typeof doctor === 'object' ? doctor?.id : doctor,
            depth: 0,
          }),
      ),
    );

    doc.populatedDoctors = doctorDocs.map(doctorDoc => ({
      id: doctorDoc.id,
      name: doctorDoc.name,
    }));
  }

  return doc;
};
