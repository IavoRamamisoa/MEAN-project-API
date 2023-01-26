import express from 'express';
import { getVoiture,createVoiture, updateVoiture} from '../controllers/voiture.js';
import auth from '../middleware/auth.js';


const router = express.Router();

//localhost:4000/voiture

router.get('/',auth,getVoiture);
router.post('/',auth,createVoiture);
router.patch('/:id',updateVoiture);

export default router;