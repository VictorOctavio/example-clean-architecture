import { UserEntity } from "./user.entity";
import { v4 as uuid } from 'uuid'

export class UserValue implements UserEntity {

   public name: string;
   public nickname: string;
   public avatar: string;
   public uuid: string;
   public roles: number;
   public password: string;

   constructor(user: UserEntity) {
      this.name = user.name;
      this.avatar = user.avatar;
      this.roles = user.roles;
      this.nickname = user.nickname;
      this.uuid = uuid()
      this.password = user.password
   }

}