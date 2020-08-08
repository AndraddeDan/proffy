import express from 'express';

import index from './routes';
import users from './routes/users';

const app = express();

app.use(express.json());

app.use('/api/v1', index);
app.use('/api/v1/users', users);

export default app;
