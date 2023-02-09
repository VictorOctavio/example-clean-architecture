import { Route, Routes } from "react-router-dom";
import Dashboard from "./dashboard/Dashboard";
import Navbar from "@/components/Navbar/Navbar";
import { RoleGuard } from "@/guards";
import { PrivateRoutes, Roles } from "@/models";

export default function Private() {
   return (

      <div className="private">

         <Navbar />

         <Routes>
            <Route path="/" element={<Dashboard />} />

            <Route element={<RoleGuard rol={Roles.ADMIN} />}>
               <Route path={PrivateRoutes.SETTINGS} element={<h1>Settings</h1>} />
            </Route>

            <Route element={<RoleGuard rol={Roles.MODERATOR} />}>
               <Route path={PrivateRoutes.MESSAGES} element={<h1>Messages</h1>} />
            </Route>

            <Route path={PrivateRoutes.NOTES} element={<h1>NOTES</h1>} />

            <Route path="*" element={<h1>PAGE NOT FOUND APP</h1>} />
         </Routes>

      </div>

   )
}