import type { NextApiRequest, NextApiResponse } from 'next';
import { connect } from '@/lib/db';
import mongoose from 'mongoose';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    await connect();
    const db = mongoose.connection;
    const collections = await db.db.listCollections().toArray();
    res.status(200).json({ message: 'Successfully connected to MongoDB.', collections });
  } catch (error: any) {
    console.error('API Route Error:', error.message);
    res.status(500).json({ message: 'Error connecting to MongoDB.', error: error.message });
  }
}
