import { PrismaClient } from "@prisma/client";
import { StatusCodes } from "http-status-codes";

const prisma = new PrismaClient();

export const getTransacitons = async (req, res) => {
    try {
        const transactions = await prisma.transaction.findMany();
        res.status(StatusCodes.OK).json({transactions})
    } catch (error) {
        console.log('Error fetching transactions', error);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({Error: 'Error occured while fetching transactions data'})
    }
}

export const addTransaction = async (req, res) => {
    try {
        const { nomTransaction, montantTransaction, categorieId, userId } = req.body;

        if (!nomTransaction || !montantTransaction || !categorieId || !userId)
            res.status(StatusCodes.BAD_REQUEST).json({ Error: 'You forget something, please check and try again!' })

        const categorieExists = await prisma.transaction.findFirst({
            where: { nomTransaction }
        })

        if (categorieExists)
            return res.status(StatusCodes.BAD_REQUEST).json({ Error: 'Categorie already exists!' })

        const newCategorie = await prisma.transaction.create({
            data: {
                nomTransaction, 
                montantTransaction: parseFloat(montantTransaction), 
                categorie: { connect: { id: parseInt(categorieId) } },
                user: {connect: {id: userId}}
            }
        })

        res.status(StatusCodes.CREATED).json({ newCategorie });
    } catch (error) {
        console.log('Error occured while creating categorie', error );
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({Error: 'Error occured while creating new categorie'});
    }
}

export const deleteTransaction = async (req, res) => {
    try {
        const {id} = req.params;

        if (!id)
            res.status(StatusCodes.BAD_REQUEST).json({Error: "No id was provided!"})

        await prisma.transaction.delete({
            where: {id: Number(id)}
        })

        res.status(StatusCodes.OK).json({Message: 'Transaction deleted successfuly!'})
    } catch (error) {
        console.log('Error occured while deleting transaction', error);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({Error: 'Error occured while deleting transaction!'})
    }
}

export const modifyTransaction = async (req, res) => {
    try {
        const { id } = req.params;
        const { nomTransaction, montantTransaction, categorieId, userId } = req.body;
        
        const updateData = {};
        if (nomTransaction) updateData.nomTransaction = nomTransaction;
        if (montantTransaction) updateData.montantTransaction = parseFloat(montantTransaction);
        if (categorieId) updateData.categorie = { connect: { id: parseInt(categorieId) } };
        if (userId) updateData.user = { connect: { id: userId } };

        const updatedTransaction = await prisma.transaction.update({
            where: { id: Number(id) },
            data: updateData
        });

        res.status(StatusCodes.OK).json(updatedTransaction);
    } catch (error) {
        console.log('error occurred while updating transaction', error);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({Error: 'Error occurred while updating transaction'});
    }
}