import { useSelector } from 'react-redux'
import { AppStore } from '@/redux/store'
import { Navigate, Outlet } from 'react-router-dom'
import { PublicRoutes } from '@/models/Routes'

export default function AuthGuard() {

  const token = useSelector((store: AppStore) => store.user.token)
  return token ? <Outlet /> : <Navigate replace to={PublicRoutes.LOGIN} />
}