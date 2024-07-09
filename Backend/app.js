import express from 'express'
const app = express();
import dotenv from 'dotenv';
dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

import authRoute from './src/routes/authRoutes.js';

app.use(authRoute);

app.all('*', (req, res, next) => {
    res.status(400).json({ success: false, msg: 'wrong url path' })
    console.log(`${req.originalUrl} doesnt exist`)
    next()
})

const port = process.env.APP_PORT || 8000
app.listen(port, () => {
    console.log(`Server is running on PORT ${port}....`)
})