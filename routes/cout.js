import express from 'express';
import { getCout,createCout,insertAvance} from '../controllers/cout.js';
import auth from '../middleware/auth.js';


const router = express.Router();

//localhost:4000/posts
router.get('/',getCout);
router.post('/',createCout);
router.patch('/:id',insertAvance);
export default router;