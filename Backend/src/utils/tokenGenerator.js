import jwt from 'jsonwebtoken'

const generateToken = (user, secretKey) => {
    const token = jwt.sign(user, secretKey);
    return token;
}

export default generateToken;