import { createSlice } from '@reduxjs/toolkit'
import { UserState } from '../store';
import { addItem, getItem, removeItem } from '@/utilities';


const initialState: UserState = {
   token: '',
   user: {
      name: '',
      nickname: '',
      avatar: '',
      roles: []
   }
}

export const userSlice = createSlice({
   name: 'user',
   initialState: getItem('user') ? JSON.parse(getItem('user') as string) : initialState,
   reducers: {
      registerUser: (state, action) => {
         addItem('user', action.payload)
         return ({ ...action.payload })
      },
      loginUser: (state, action) => {
         addItem('user', action.payload)
         return ({ ...action.payload })
      },
      resetUser: () => {
         removeItem('user')
         return initialState
      }
   }
})

export const { loginUser, resetUser, registerUser } = userSlice.actions
export default userSlice.reducer