// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'


export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const answer1 = process.env.SERVER_ANSWER1;
  const answer2 = process.env.SERVER_ANSWER2;
  const answer3 = process.env.SERVER_ANSWER3;
  const secretKey = process.env.SERVER_SECRET_KEY;

  // Lakukan sesuatu dengan variabel lingkungan ini
  res.status(200).json({ answer1, answer2, answer3, secretKey });
}