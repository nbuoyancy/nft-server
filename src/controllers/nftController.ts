import { Request, Response } from 'express';

export const handleNftPost = (req: Request, res: Response) => {
  const nftData = req.body;

  // You would normally do something with the nftData here, like save it to a database.

  res.status(201).json({ message: 'NFT data received', data: nftData });
};
