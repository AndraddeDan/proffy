import express from 'express';

const router = express.Router();

router.get('/', (request, response) => {
  return response.json("Hello");
});

export default router;
