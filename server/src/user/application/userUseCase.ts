import { UserEntity } from "../domain/user.entity";
import { UserRepository } from "../domain/user.repository";
import { UserValue } from "../domain/user.value";

export class UserUseCase {

   constructor(private readonly userRepository: UserRepository) { }

   async registerUser(user: UserEntity) {
      const userValue = new UserValue(user)
      const userCreated = await this.userRepository.registerUser(userValue)
      return userCreated;
   }

   async loginUser(nickname: string, password: string) {
      const loginUser = await this.userRepository.loginUser(nickname, password)
      return loginUser
   }

   async updateUser(user: UserEntity, uuid: string) {
      const updateUser = await this.userRepository.updateUser(user, uuid)
      return updateUser
   }

   async deleteUser(uuid: string) {
      const deleteUser = await this.userRepository.deleteUser(uuid)
      return deleteUser
   }

   async listUsers() {
      const users = await this.userRepository.listUsers()
      return users
   }

   async getUserById(uuid: string) {
      const user = await this.userRepository.getUserById(uuid)
      return user
   }
}