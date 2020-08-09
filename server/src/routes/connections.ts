import express from 'express';
import ConnectionsController from '../controllers/connections-controller';

const router = express.Router();
const connectionsController = new ConnectionsController();

router.get('/', connectionsController.get);
router.post('/', connectionsController.create);

export default router;
