import express from 'express';
import { getBenefice, getCoutTotalPayeParJour, getCoutTotalPayeParMois,getReparationMoyenne} from '../controllers/stat.js';
import auth from '../middleware/auth.js';


const router = express.Router();

//localhost:4000/stat


router.get('/jour',auth,getCoutTotalPayeParJour);
router.get('/mois',auth,getCoutTotalPayeParMois);
router.get('/reparation',auth,getReparationMoyenne);
router.get('/benefice',auth,getBenefice);

export default router;