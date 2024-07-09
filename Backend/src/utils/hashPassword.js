import bcrypt from 'bcryptjs'

const hashPassword = async (password) => {
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        return hashedPassword;
    } catch (error) {
        throw new error('Error hashing password', error.message)
    }
}

export default hashPassword;