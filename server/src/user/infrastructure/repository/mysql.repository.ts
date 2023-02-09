import { UserEntity } from "../../domain/user.entity";
import { UserRepository, UserResponse } from "../../domain/user.repository";
import { pool } from "../db/pool";
import { comparePassword, encryptPassword } from "../utilities/bcrypt.utility";
import { signJWT } from "../utilities/jwt";

export class MysqlRepository implements UserRepository {

   async registerUser(user: UserEntity): Promise<UserResponse> {

      const { nickname, name, uuid, avatar, roles } = user;

      try {

         let password = await encryptPassword(user.password)

         const [result]: any = await pool.query("INSERT INTO users (name, nickname, uuid, avatar, roles, password) VALUES (?, ?, ?, ?, ?, ?)", [name, nickname, uuid, avatar, roles, password])

         if (result.affectedRows <= 0) return { err: true, code: 400, msg: 'error al guardar' }

         let token = signJWT(uuid)

         const [rows]: any = await pool.query("SELECT * FROM users WHERE nickname = ?", [nickname])

         return { err: false, code: 200, token, data: rows[0], msg: 'user created successfully' }

      } catch (e) {
         return { err: true, code: 500, msg: 'user didnt be created' }
      }
   }

   async loginUser(nickname: string, password: string): Promise<UserResponse> {

      try {

         const [result]: any = await pool.query("SELECT * FROM users WHERE nickname = ?", [nickname])

         // found user by email
         if (result.length <= 0) return { err: true, code: 400, msg: 'user not found' }

         console.log(result[0].password, password)

         // compare password
         const validatePasswrod = await comparePassword(password, result[0].password)
         if (!validatePasswrod) return { err: true, code: 400, msg: 'user err password' }

         let token = signJWT(result[0].uuid)

         return { err: false, code: 200, token, data: result[0], msg: 'user login successfully' }

      } catch (e) {
         return { err: true, code: 500, msg: 'internal error' }
      }

   }


   async listUsers(): Promise<UserResponse> {
      try {

         const [result]: any = await pool.query('SELECT * FROM users');

         return { err: false, code: 200, data: result, msg: 'users found' }

      } catch (e) {
         return { err: true, code: 500, msg: 'user didnt be created' }
      }
   }

   async getUserById(uuid: string): Promise<UserResponse> {
      try {

         const [result]: any = await pool.query('SELECT * FROM users WHERE uuid = ?', [uuid]);

         if (result.length <= 0) return { err: true, code: 400, msg: 'user not found' }

         return { err: false, code: 200, data: result, msg: 'users found' }

      } catch (e) {
         return { err: true, code: 500, msg: 'user didnt be created' }
      }
   }


   async updateUser(user: UserEntity, uuid: string): Promise<UserResponse> {
      try {

         const { name, nickname, avatar, password } = user;
         const userArray = [name, password, avatar, nickname, uuid]

         const [result]: any = await pool.query('UPDATE users SET name = IFNULL(?, name), password = IFNULL(?, password), avatar = IFNULL(?, avatar), nickname = IFNULL(?, nickname) WHERE uuid = ?', userArray)

         if (result.affectedRows <= 0) return { err: true, code: 400, msg: 'user not updated' }

         const [rows]: any = await pool.query('SELECT * FROM users WHERE uuid = ?', [uuid])

         return { err: false, code: 200, data: rows, msg: 'users found' }

      } catch (e) {
         console.log(e)
         return { err: true, code: 500, msg: 'user didnt be update' }
      }
   }

   deleteUser(uuid: string): Promise<UserResponse> {
      throw new Error("Method not implemented.");
   }
}