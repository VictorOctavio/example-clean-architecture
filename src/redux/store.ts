import { configureStore } from "@reduxjs/toolkit";
import userReducer from './user/userSlice'
import { User } from "@/models";

//  Slice
export interface UserState {
   token: string;
   user: User | undefined;
}

export interface AppStore {
   user: UserState
}

export default configureStore<AppStore>({
   reducer: {
      user: userReducer
   }
})