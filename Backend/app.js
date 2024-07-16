import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv';
import authRoute from './src/routes/authRoutes.js';
import refreshTokenRoute from './src/routes/refreshTokenRoute.js';
import userRouter from './src/routes/userRoutes.js';
import categorieRoute from './src/routes/categorieRoute.js';

dotenv.config();
const app = express();

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(authRoute);
app.use(refreshTokenRoute);
app.use(userRouter);
app.use(categorieRoute);

app.all('*', (req, res, next) => {
    res.status(400).json({ success: false, msg: 'wrong url path' })
    console.log(`${req.originalUrl} doesnt exist`)
    next()
})

const port = process.env.APP_PORT || 8000
app.listen(port, () => {
    console.log(`Server is running on PORT ${port}....`)
})