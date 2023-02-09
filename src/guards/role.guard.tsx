import { PrivateRoutes, Roles } from "@/models";
import { AppStore } from "@/redux/store";
import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";


interface Props {
   rol: Roles
}

function RoleGuard({ rol }: Props) {
   const userState = useSelector((store: AppStore) => store.user)
   return userState.user?.roles.includes(rol) ? <Outlet /> : <Navigate replace to={`/${PrivateRoutes.PRIVATE}`} />
}

export default RoleGuard