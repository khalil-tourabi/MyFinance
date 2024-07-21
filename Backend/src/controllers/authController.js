import { PrismaClient } from "@prisma/client";
import { StatusCodes } from "http-status-codes";
import hashPassword from "../utils/hashPassword.js";
import generateToken from "../utils/tokenGenerator.js";
import comparePassword from "../utils/comparePassword.js";

const prisma = new PrismaClient();

let refreshTokens = [];

export const register = async (req, res) => {
    try {
        const { nom, prenom, email, password, newsletter } = req.body;

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
                newsletter
            }
        })

        const accessToken = generateToken({ user: newUser }, process.env.APP_ACCESS_TOKEN_SECRET, '15m');
        const refreshToken = generateToken({ user: newUser }, process.env.APP_REFRESH_TOKEN_SECRET, '7d');
        refreshTokens.push(refreshToken);

        return res.status(StatusCodes.CREATED).json({ accessToken, refreshToken });

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

        const accessToken = generateToken({user}, process.env.APP_ACCESS_TOKEN_SECRET, '15m');
        const refreshToken = generateToken({user}, process.env.APP_REFRESH_TOKEN_SECRET, '7d');
        refreshTokens.push(refreshToken);
        return res.status(StatusCodes.OK).json({accessToken, refreshToken})

    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({error: error.message})
    }
}

export const refreshToken = (req, res) => {
    const refreshToken = req.body.token;
    if (!refreshToken) return res.status(StatusCodes.UNAUTHORIZED).json({error: "You are not authenticated!"});
    if (!refreshTokens.includes(refreshToken)) {
        return res.status(StatusCodes.FORBIDDEN).json({error: "Refresh token is not valid!"});
    }
    jwt.verify(refreshToken, process.env.APP_REFRESH_TOKEN_SECRET, (err, user) => {
        err && console.log(err);
        refreshTokens = refreshTokens.filter((token) => token !== refreshToken);
        
        const newAccessToken = generateToken({user}, process.env.APP_ACCESS_TOKEN_SECRET, '15m');
        const newRefreshToken = generateToken({user}, process.env.APP_REFRESH_TOKEN_SECRET, '7d');
        
        refreshTokens.push(newRefreshToken);
        
        res.status(StatusCodes.OK).json({
            accessToken: newAccessToken,
            refreshToken: newRefreshToken,
        });
    });
};

export const logout = (req, res) => {
    const refreshToken = req.body.token;
    refreshTokens = refreshTokens.filter((token) => token !== refreshToken);
    res.status(StatusCodes.OK).json("You logged out successfully.");
};