// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'


export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const answer1 = process.env.SERVER_ANSWER1;
  const answer2 = process.env.SERVER_ANSWER2;
  const answer3 = process.env.SERVER_ANSWER3;
  const answer4 = process.env.SERVER_ANSWER4;
  const answer5 = process.env.SERVER_ANSWER5;
  const answer6 = process.env.SERVER_ANSWER6;
  const answer7 = process.env.SERVER_ANSWER7;
  const answer8 = process.env.SERVER_ANSWER8;
  const answer9 = process.env.SERVER_ANSWER9;
  const secretKey = process.env.SERVER_SECRET_KEY;
  if(req.method === 'POST') {

    if(req.body.useranswer1.toLowerCase() !== answer1) {
      res.status(400).json({ error: 'Wrong answer 1' });
      return;
    }
    if(req.body.useranswer2.toLowerCase() !== answer2) {
      res.status(400).json({ error: 'Wrong answer 2' });
      return;
    }
  
  res.status(200).json({status:"berhasil"});
  }
  else{
    res.status(400).json({ error: 'Wrong method' });
  }
}