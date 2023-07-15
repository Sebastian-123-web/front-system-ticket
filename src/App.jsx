import { BrowserRouter, Routes, Route } from 'react-router-dom';

import CreateTicket from "./page/CreateTicket/CreateTicket";
import DashboardUser from "./page/DashboardUser/DashboardUser";
import PrivateRoute from "./router/PrivateRoute"

import { useState } from 'react';


export default function App() {

  const [user, setUser] = useState(null)

  const login = () => {
    setUser({
      email : "rbanagasta@transberperu.com"
    })
    console.log('inicio sesion')
  }

  const logout = () => {
    setUser(null)
    console.log('se cerro la sesion')
  }

  return (
    <BrowserRouter>

      {
        user ? <button onClick={logout}>Logout</button> : <button onClick={login}>Login</button>
      }

      <Routes>
        <Route path='/' element={ <CreateTicket /> } />
        <Route path='/createticket' element={ <CreateTicket /> } />

        <Route path='/dashboard' element={
          <PrivateRoute user={user} >
            <DashboardUser />
          </PrivateRoute>
        } />

        {/* <Route path='/dashboard' element={
          <PrivateRoute email={user}>
            <DashboardUser />
          </PrivateRoute>
        } /> */}

      </Routes>
    </BrowserRouter>
  )
}