import { Response } from "express";

export const HTTP_ERROR = (res: Response, msg: string) => {
   res.status(500)
   res.json({ err: true, msg: msg })
}