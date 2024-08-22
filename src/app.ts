import express from 'express';
import nftRoutes from './routes/nftRoutes';

const app = express();

app.use(express.json()); // Middleware to parse JSON
app.use('/nft', nftRoutes);

export default app;
