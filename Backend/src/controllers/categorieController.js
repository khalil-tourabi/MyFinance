import { PrismaClient } from '@prisma/client'
import { StatusCodes } from 'http-status-codes'

const prisma = new PrismaClient();

export const getCategories = async (req, res) => {
    try {
        const categories = await prisma.categorie.findMany();
        res.status(StatusCodes.OK).json(categories)
    } catch (error) {
        console.error('error fetching categories', error);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR)
            .json({ message: "An error occurred while fetching categories." });
    }
}

export const addCategorie = async (req, res) => {
    try {
        const { nomCategorie, budgetCategorie } = req.body;

        if (!nomCategorie)
            res.status(StatusCodes.BAD_REQUEST).json({ Error: 'You forget something please check and try again!' });

        const newCategorie = await prisma.categorie.create({
            data: {
                nomCategorie,
                budgetCategorie: parseFloat(budgetCategorie)
            }
        })

        return res.status(StatusCodes.CREATED).json({ categorie: newCategorie })
    } catch (error) {
        console.log('Error while creating new categorie', error)
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ Error: 'Error occured while creating new Categorie' })
    }
}

export const modifyCategorie = async (req, res) => {
    try {
        const {id} = req.params;
        const {nomCategorie, budgetCategorie} = req.body;

        if (!id)
            res.status(StatusCodes.BAD_REQUEST).json({Error: 'No id was provided!'})

        const updatedCategorie = await prisma.categorie.update({
            where: { id: Number(id) },
            data: {
                nomCategorie,
                budgetCategorie: parseFloat(budgetCategorie)
            }
        })

        res.status(StatusCodes.OK).json({updatedCategorie})
    } catch (error) {
        console.log('Error occured while updating the category', error);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({Error: 'An error occured while updating the category'})
    }
}

export const deleteCategorie = async (req, res) => {
    try {
        const {id} = req.params;

        if (!id)
            return res.status(StatusCodes.BAD_REQUEST).json({Error: 'No id was provided!'})

        await prisma.categorie.delete({
            where:{id: Number(id)}
        })

        res.status(StatusCodes.OK).json({Message: 'Categorie deleted successfuly!'})
    } catch (error) {
        console.log('Error occured while deleting categorie', error);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({Error: 'Error occured while deleting categorie'})
    }
}