import express from 'express'
import { addTransaction, getTransacitons, deleteTransaction, modifyTransaction } from '../controllers/transactionController.js';

const transactionRoute = express.Router();

transactionRoute.get('/transactions', getTransacitons)
transactionRoute.post('/addtransaction', addTransaction)
transactionRoute.delete('/deletetransaction/:id', deleteTransaction);
transactionRoute.put('/updatetransaction/:id', modifyTransaction)

export default transactionRoute;