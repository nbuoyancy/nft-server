import { Router } from 'express';
import authMiddleware from '../middleware/authMiddleware';
import { handleNftPost } from '../controllers/nftController';

const router = Router();

router.post('/', authMiddleware, handleNftPost);

export default router;
