const URI = 'http://localhost:8080/api/'
import { UserLogin } from '@/models'
import axios from 'axios'

export const registerUserService = (user: UserLogin) => {
   return {
      call: axios.post(`${URI}user/register`, user)
   }
}

export const loginUserService = (nickname: string, password: string) => {
   return {
      call: axios.post(`${URI}user/login`, {
         nickname,
         password
      })
   }
}