import jwt from 'jsonwebtoken'
import { JWT_SECRET_KEY } from '../../../config'

export const signJWT = (id: string): string => {
   return jwt.sign({ id }, JWT_SECRET_KEY)
}