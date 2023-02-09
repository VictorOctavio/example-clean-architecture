import { Roles } from "@/models"

export const isModerator = (roles: string[]) => {
   return roles.includes(Roles.MODERATOR)
}

export const isAdmin = (roles: string[]) => {
   return roles.includes(Roles.ADMIN)

}