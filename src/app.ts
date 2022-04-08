import express from 'express';
import ProductsRoutes from './routes/productsRoutes';
import usersRoutes from './routes/usersRoutes';
import ordersRoutes from './routes/ordersRoutes';

const app = express();

app.use(express.json());

app.use(ProductsRoutes);
app.use(usersRoutes);
app.use(ordersRoutes);

export default app;
