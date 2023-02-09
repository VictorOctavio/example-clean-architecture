import morgan from 'morgan'
import 'dotenv/config'
import cors from 'cors'
import express, { Application } from "express";
import userRoutes from './user/infrastructure/routes/user.routes'

export default class App {

   private app: Application
   private port: string = "";

   constructor() {
      this.app = express()
      this.settings()
      this.middlewares()
      this.routes()
   }

   settings() {
      this.port = process.env.PORT || '3000'
   }

   middlewares() {
      this.app.use(express.urlencoded({ extended: false }))
      this.app.use(express.json())
      this.app.use(cors())
      this.app.use(morgan('dev'))
   }

   routes() {
      this.app.use('/api/user', userRoutes)
   }

   listen() {
      this.app.listen(this.port, () => {
         console.log('listening on port ' + this.port)
      })
   }
}