import { PrismaClient } from "@prisma/client";
import { StatusCodes } from "http-status-codes";
import jwt, { decode } from 'jsonwebtoken';

const prisma = new PrismaClient();

export const modifyUser = async (req, res) => {
    try {
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];

        if (!token) {
            return res.status(StatusCodes.UNAUTHORIZED).json({ error: 'No token provided' });
        }

        jwt.verify(token, process.env.APP_ACCESS_TOKEN_SECRET, async (err, decoded) => {
            if (err) {
                return res.status(StatusCodes.FORBIDDEN).json({ error: 'Invalid token' });
            }

            const userId = decoded.user.id;

            const { nom, prenom, email, adresse, num, salaire } = req.body;

            const salaireValue = salaire !== "" ? parseInt(salaire, 10) : null;

            const updatedUser = await prisma.user.update({
                where: { id: userId },
                data: {
                    nom,
                    prenom,
                    email,
                    adresse,
                    num,
                    salaire: salaireValue // Use the converted value
                }
            });

            res.status(StatusCodes.OK).json({
                message: 'User updated successfully',
                user: updatedUser
            });
        });
    } catch (error) {
        console.error('Error modifying user:', error);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: 'An error occurred while modifying the user' });
    }
};

export const getCurrentUser = async (req, res) => {
    try {
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];

        if (!token) {
            return res.status(StatusCodes.FORBIDDEN).json({ Error: 'No token provided' });
        }

        jwt.verify(token, process.env.APP_ACCESS_TOKEN_SECRET, async (err, decode) => {
            if (err) {
                return res.status(StatusCodes.FORBIDDEN).json({ Error: 'Invalid Token' });
            }

            const userID = decode.user.id;

            const currUser = await prisma.user.findFirst({
                where: { id: userID }
            });

            if (!currUser) {
                return res.status(StatusCodes.NOT_FOUND).json({ Error: 'No user available with that ID' });
            }

            return res.status(StatusCodes.OK).json({ currUser });
        });

    } catch (error) {
        console.log('Error finding current user!', error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ Error: 'Internal Server Error' });
    }
};