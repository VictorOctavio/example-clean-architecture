import bcrypt from 'bcryptjs'

export const encryptPassword = async (password: string): Promise<string> => {
   const salt = await bcrypt.genSalt(6)
   return await bcrypt.hash(password, salt)
}

export const comparePassword = async (pass: string, password: string): Promise<boolean> => {
   return await bcrypt.compare(pass, password)
}