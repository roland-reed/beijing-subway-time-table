// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import type { Line } from '../../shared';
import data from './data';

export default async function handler(req: NextApiRequest, res: NextApiResponse<Line>) {
  const { code } = req.query;

  if (!code) {
    return res.status(400).end('Bad request: code is required');
  }

  if (Array.isArray(code)) {
    return res.status(400).end('Bad request: code must be a string');
  }

  if (data[code as keyof typeof data]) {
    res.status(200).json(data[code as keyof typeof data]);
  } else {
    res.status(404).end(`Line ${code} not found`);
  }
}
