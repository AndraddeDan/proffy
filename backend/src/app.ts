import express from 'express';
import cors from 'cors';

import index from './routes';
import connections from './routes/connections';
import classes from './routes/classes';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/v1', index);
app.use('/api/v1/connections', connections);
app.use('/api/v1/classes', classes);

export default app;
