import { useState } from "react"
import Login from "./Login"
import { UserLogin } from "@/models"

// Services
import { loginUserService, registerUserService } from "@/services"

// Hooks
import { useFetchAndLoader } from "@/hooks"
import { userAdapter } from "@/adapters"
import { loginUser, registerUser } from "@/redux/user/userSlice"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { getValidationErros, managerNotifications } from "@/utilities"

export const LoginContainer = () => {

   const dispatch = useDispatch()
   const navigate = useNavigate()

   const [user, setUser] = useState<UserLogin>({
      nickname: "",
      password: "",
      name: ""
   })
   const [login, setLogin] = useState<boolean>(true)

   const { callEndpoint, loading } = useFetchAndLoader()

   const handleChangeUser = (e: React.ChangeEvent<HTMLInputElement>) => {
      setUser({
         ...user,
         [e.target.name]: e.target.value
      })
   }

   const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()

      if (!user.nickname?.trim() || !user.password?.trim()) return managerNotifications.error(getValidationErros('INVALID_LOGIN_DATA'))

      // Service
      const callServie = login ? loginUserService(user.nickname, user.password) : registerUserService(user)
      const result = await callEndpoint(callServie)

      // Adapter response
      const userAdapted = userAdapter(result.data)

      // Redux
      login ? dispatch(loginUser({ user: userAdapted, token: result.token })) : dispatch(registerUser({ user: userAdapted, token: result.token }))

      navigate('/app', {
         replace: true
      })
   }

   return (
      <Login
         user={user}
         handleChangeUser={handleChangeUser}
         onSubmit={onSubmit}
         loading={loading}
         login={login}
         setLogin={setLogin}
      />
   )

}