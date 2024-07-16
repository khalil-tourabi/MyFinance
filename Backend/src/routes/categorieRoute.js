import express from 'express'
import { getCategories, addCategorie, modifyCategorie, deleteCategorie } from '../controllers/categorieController.js'

const categorieRoute = express.Router()

categorieRoute.get('/categories', getCategories);
categorieRoute.post('/addcategorie', addCategorie);
categorieRoute.put('/updatecategorie/:id', modifyCategorie)
categorieRoute.delete('/deletecategorie/:id', deleteCategorie)

export default(categorieRoute);