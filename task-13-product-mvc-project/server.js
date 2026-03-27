import express from 'express';
import logger from './middleware/logger.js';
import errorHandler from './middleware/errorHandler.js';
import productRoutes from './routes/productRoutes.js';

const app = express();
const PORT = 3013;

app.use(express.json());
app.use(logger);

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to Product MVC API! Use /api/products endpoint' });
});

app.use('/api', productRoutes);

app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Task 13 Product MVC API running on http://localhost:${PORT}`);
});
