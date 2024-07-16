import express from 'express'
import { modifyUser, getCurrentUser } from '../controllers/userController.js'

const userRouter = express.Router();

userRouter.put('/updateUser', modifyUser);
userRouter.get('/user', getCurrentUser);

export default userRouter;