import { check } from 'express-validator'
import validateResult from '../utilities/validate.utility'
import { Request, Response, NextFunction } from 'express'

const validateCreateUser = [
   check('name')
      .exists()
      .not()
      .isEmpty(),
   check('nickname')
      .exists()
      .not()
      .isEmpty(),
   check('password')
      .exists()
      .not()
      .isEmpty(),
   check('avatar')
      .default('https://pbs.twimg.com/media/FoEo8kLXwAAoykf?format=jpg&name=large')
      .custom((value, { req }) => {
         return true;
      }),
   (req: Request, res: Response, next: NextFunction) => {
      validateResult(req, res, next)
   }
]

export default validateCreateUser