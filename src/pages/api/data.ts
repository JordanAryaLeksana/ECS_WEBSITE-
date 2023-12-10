// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'


export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const nrp1 = process.env.SERVER_NRP1;
  const nrp2 = process.env.SERVER_NRP2;
  const nrp3 = process.env.SERVER_NRP3;
  const nrp4 = process.env.SERVER_NRP4;
  const nrp5 = process.env.SERVER_NRP5;
  const nrp6 = process.env.SERVER_NRP6;
  const nrp7 = process.env.SERVER_NRP7;
  const nrp8 = process.env.SERVER_NRP8;
  const nrp9 = process.env.SERVER_NRP9;
 
 res.status(200).json({nrp:[nrp1, nrp2, nrp3, nrp4, nrp5, nrp6, nrp7, nrp8, nrp9]});
}