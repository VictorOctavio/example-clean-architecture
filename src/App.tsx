import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"

// Pages
import AuthGuard from "./guards/auth.guard"
import { PrivateRoutes, PublicRoutes } from "./models"
import Private from "./pages/private/Private"
import { ReactToast } from "./utilities"

import { Provider } from 'react-redux/es/exports'

import store from './redux/store'
import { LoginContainer } from "./pages/login/LoginContainer"

function App() {

  return (
    <Provider store={store}>
      <BrowserRouter>

        <ReactToast />

        <Routes>

          <Route path="/" element={<Navigate to={PrivateRoutes.PRIVATE} />} />

          <Route path={PublicRoutes.LOGIN} element={<LoginContainer />} />

          <Route element={<AuthGuard />}>
            <Route path={`${PrivateRoutes.PRIVATE}/*`} element={<Private />} />
          </Route>

          <Route path="*" element={<h1>PAGE NOT FOUND</h1>} />

        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App
