import { PrismaClient } from "@prisma/client";
import { StatusCodes } from "http-status-codes";
import hashPassword from "../utils/hashPassword.js";
import generateToken from "../utils/tokenGenerator.js";
import comparePassword from "../utils/comparePassword.js";

const prisma = new PrismaClient();

export const register = async (req, res) => {
    try {
        const { nom, prenom, email, password } = req.body;

        if (!nom || !prenom || !email || !password) {
            return res.status(StatusCodes.BAD_REQUEST)
                .json({ error: 'You forgot something, please check again!' })
        }

        const userExists = await prisma.user.findUnique({
            where: {
                email
            }
        })

        if (userExists) {
            return res.status(StatusCodes.BAD_REQUEST)
                .json({ error: 'Email already exists!' })
        }

        const hashedPassword = await hashPassword(password);

        const newUser = await prisma.user.create({
            data: {
                nom,
                prenom,
                email,
                password: hashedPassword,
                newsletter: false,
            }
        })

        const token = generateToken({ user: newUser }, process.env.APP_ACCESS_TOKEN_SECRET);

        return res.status(StatusCodes.CREATED).json({ token });

    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: error.message })
    }
}

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            res.status(StatusCodes.BAD_REQUEST).json({ error: 'You forgto something, please check and try again!' })
        }

        const user = await prisma.user.findUnique({
            where: {
                email
            }
        })

        if (!user) {
            res.status(StatusCodes.NOT_FOUND).json({ error: 'User doesnt exist please create an acount!' })
        }

        const checkPassword = await comparePassword(password, user.password);
        if (!checkPassword) {
            res.status(StatusCodes.UNAUTHORIZED).json({error: 'Wrong email or password, please try again'})
        }

        const token = generateToken({user}, process.env.APP_ACCESS_TOKEN_SECRET);
        return res.status(StatusCodes.OK).json({token})

    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({error: error.message})
    }
}