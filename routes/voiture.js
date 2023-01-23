import express from 'express';
import { getVoiture,createVoiture} from '../controllers/voiture.js';

const router = express.Router();

//localhost:4000/posts
router.get('/', getVoiture);
router.post('/',createVoiture);

export default router;