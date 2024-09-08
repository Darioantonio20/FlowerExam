import { Router } from 'express';
import { getCatalog, addFlower, updateFlower, deleteFlower} from '../controllers/catalogController';

const router = Router();

router.get('/catalog', getCatalog);
router.post('/flower', addFlower);
router.put('/:id', updateFlower);
router.delete('/:id', deleteFlower); 

export default router;
