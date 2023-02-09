import { AppStore } from "@/redux/store"
import { resetUser } from "@/redux/user/userSlice"
import { isAdmin, isModerator } from "@/utilities"
import { useDispatch, useSelector } from "react-redux"
import { NavLink } from "react-router-dom"

export default function Navbar() {

   const dispatch = useDispatch()
   const userState = useSelector((store: AppStore) => store.user)

   const handleLogout = () => {
      dispatch(resetUser())
   }

   return (
      <div className="navbar">
         <div className="navbar__wrapper">
            <h3 className="navbar__wrapper__title">WELCOME
               <span className="navbar__wrapper__title__user"> {userState.user?.nickname}</span>
            </h3>
            <div className="navbar__wrapper__navegation">
               <NavLink className="navbar__wrapper__navegation__item" to="/app">Home</NavLink>
               <NavLink className="navbar__wrapper__navegation__item" to="/app/notes">Notes</NavLink>

               {isModerator(userState.user?.roles || []) && <NavLink className="navbar__wrapper__navegation__item" to="/app/messages">Messages</NavLink>}

               {isAdmin(userState.user?.roles || []) && <NavLink className="navbar__wrapper__navegation__item" to="/app/settings">Setting</NavLink>}

            </div>
            <button className="navbar__wrapper__logout" onClick={handleLogout}>LOGOUT</button>
         </div>
      </div>
   )
}