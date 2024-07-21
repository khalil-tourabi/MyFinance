import express from 'express'
import { addTransaction, getTransacitons } from '../controllers/transactionController.js';

const transactionRoute = express.Router();

transactionRoute.get('/transactions', getTransacitons)
transactionRoute.post('/addtransaction', addTransaction)

export default transactionRoute;