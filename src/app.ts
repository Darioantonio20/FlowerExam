import express from 'express';
import catalogRoutes from './routes/catalogRoutes';
import orderRoutes from './routes/orderRoutes';

const app = express();
app.use(express.json());

app.use('/api', catalogRoutes);
app.use('/api', orderRoutes);

export default app;
