import { User } from "@/models"

export const userAdapter = (user: any): User => {

   const userAdapter: User = {
      nickname: user.nickname,
      name: user.name,
      avatar: user.avatar,
      roles: user.roles || ["user", "moderator"]
   }

   return userAdapter
}