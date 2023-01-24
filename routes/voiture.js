import express from 'express';
import { getVoiture,createVoiture} from '../controllers/voiture.js';
import auth from '../middleware/auth.js';


const router = express.Router();

//localhost:4000/posts
router.get('/',auth,getVoiture);
router.post('/',auth,createVoiture);

export default router;