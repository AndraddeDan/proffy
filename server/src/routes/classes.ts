import express from 'express';
import ClassesController from './../controllers/classes-controller';

const router = express.Router();
const classesController = new ClassesController();

router.get('/', classesController.list);
router.post('/', classesController.create);

export default router;
