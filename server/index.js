import dotenv from 'dotenv';
dotenv.config();
import connectToDatabase from './database.js';
import express from 'express';
import path from 'path';
import cors from 'cors'
import mongoose from 'mongoose';

const db = mongoose.connection;




mongoose.connect(process.env.MONGO_URI);
db.on("connected", () => {
  console.log(`Connected to ${db.name} at ${db.host}:${db.port}...`);
});

//Our Routes
import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js';
import orderRoutes from './routes/orderRoutes.js';

connectToDatabase();
const app = express();

app.use(cors());

app.use(express.json());
app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes);

app.get('/api/config/paypal', (req, res) => res.send(process.env.PAYPAL_CLIENT_ID));

const port = process.env.PORT || 5001;

const __dirname = path.resolve();
app.use('/uploads', express.static(path.join(__dirname, '/uploads')));

if (process.env.NODE_ENV == 'production') {
  app.use(express.static(path.join(__dirname, '/client/build')));

  app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')));
}

app.listen(port, () => {
  console.log(`Server runs on port ${port}.`);
});
