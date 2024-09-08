import { Router } from 'express';
import { getCatalog, addFlower } from '../controllers/catalogController';

const router = Router();

router.get('/catalog', getCatalog);
router.post('/flower', addFlower);

export default router;
