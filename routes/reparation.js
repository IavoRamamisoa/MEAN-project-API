import express from 'express';
import { getReparation,createReparation,updateReparation,getReparationById,getReparationAValider,valideBonSortie} from '../controllers/reparation.js';
import auth from '../middleware/auth.js';


const router = express.Router();

//localhost:4000/posts
router.get('/',getReparation);
router.get('/notValidate',getReparationAValider);
router.get('/:id',getReparationById);
router.post('/',createReparation);
router.patch('/:id', updateReparation);
router.patch('/:id/valider',valideBonSortie);

export default router;