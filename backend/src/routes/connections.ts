import express from 'express';
import ConnectionsController from '../controllers/connections-controller';

const router = express.Router();
const classesController = new ConnectionsController();

router.get('/', classesController.get);
router.post('/', classesController.create);

export default router;
