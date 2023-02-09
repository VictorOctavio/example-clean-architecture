import { UserEntity } from "./user.entity";

export interface UserResponse {
   err: boolean;
   data?: UserEntity[] | UserEntity,
   msg?: string,
   token?: string,
   code: number | 200
}

export interface UserRepository {
   registerUser(user: UserEntity): Promise<UserResponse>
   loginUser(email: string, password: string): Promise<UserResponse>
   updateUser(user: UserEntity, uuid: string): Promise<UserResponse>
   deleteUser(uuid: string): Promise<UserResponse>
   listUsers(): Promise<UserResponse>
   getUserById(uuid: string): Promise<UserResponse>
}