
export type token = string

export interface User {
   name: string;
   nickname: string;
   avatar: string;
   roles: string[];
}

export interface UserLogin {
   nickname: string,
   password: string,
   avatar?: string,
   name?: string
}