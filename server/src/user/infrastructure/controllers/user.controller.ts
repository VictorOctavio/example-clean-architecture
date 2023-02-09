import { Request, Response } from "express";
import { UserUseCase } from "../../application/userUseCase";

export class UserController {

   constructor(private userUseCase: UserUseCase) { }

   // CONTROLLLER REGISTER USER
   registerUser = async (req: Request, res: Response) => {

      const { code, err, data, token = '', msg } = await this.userUseCase.registerUser(req.body)
      if (err) return res.status(code).json({ err: msg })

      return res.status(200).json({ data, token })
   }

   // CONTROLLLER LOGIN USER
   loginUser = async (req: Request, res: Response) => {

      const { nickname = "", password = "" } = req.body;

      const { err, token = "", data, code, msg } = await this.userUseCase.loginUser(nickname, password)

      if (err) return res.status(code).json({ err: msg })

      return res.status(200).json({ data, token })
   }

   // CONTROLLLER UPDATE DATA USER
   updateUser = async (req: Request, res: Response) => {

      const { err, data, code, msg } = await this.userUseCase.updateUser(req.body, req.params.id)

      if (err) return res.status(code).json({ err: msg })

      return res.status(200).json({ data })
   }

   // CONTROLLLER LIST USERS
   listUsers = async (req: Request, res: Response) => {
      const { err, code, data } = await this.userUseCase.listUsers();
      if (err) return res.status(code).json({ err: true })
      return res.status(200).json(data)
   }

   // CONTROLLLER LIST USER BY ID
   getUser = async (req: Request, res: Response) => {
      const { err, data, code } = await this.userUseCase.getUserById(req.params.id);
      if (err) return res.status(code).json({ err: true })
      return res.status(200).json(data)
   }


   // CONTROLLLER DELETE USER BY ID
   deleteUser = async (req: Request, res: Response) => {
      return res.status(200).json({})
   }
}