import bcrypt from 'bcryptjs'

const comparePassword = async (password, hashedPassword) => {
    const checkedPassword = await bcrypt.compare(password, hashedPassword)
    return checkedPassword;
}

export default comparePassword;