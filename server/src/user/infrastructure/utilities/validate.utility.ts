import { Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";


const validateResult = (req: Request, res: Response, next: NextFunction) => {
   try {
      validationResult(req).throw()
      return next();
   } catch (e) {
      res.status(403).json({ err: true, msg: 'error validate data', e })
   }
}

export default validateResult