import jwt from 'jsonwebtoken'

const verifyToken = (token) => {
    return jwt.verify(token, process.env.APP_ACCESS_TOKEN_SECRET);
};

export default verifyToken;