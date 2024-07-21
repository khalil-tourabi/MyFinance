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