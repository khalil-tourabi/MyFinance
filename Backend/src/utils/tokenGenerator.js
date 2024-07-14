import jwt from 'jsonwebtoken';

const generateToken = (user, secretKey, expiresIn = '1h') => {
    const token = jwt.sign(user, secretKey, { expiresIn });
    return token;
}

export default generateToken;