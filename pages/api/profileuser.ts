
import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/model/db';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Fetch the first user (for demonstration purposes)
    // Replace this with logic to fetch the logged-in user's details
    const user = await prisma.user.findFirst();

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Exclude sensitive data (e.g., password) from the response
    const { password, ...safeUser } = user;

    return res.status(200).json(safeUser);
  } catch (error) {
    console.error('Error fetching user data:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}