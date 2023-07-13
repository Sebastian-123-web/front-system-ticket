import { BrowserRouter, Router, Route, Routes } from 'react-router-dom';

import { AuthProvide } from './context/AuthContext';

import CreateTicket from "./page/CreateTicket/CreateTicket";
import DashboardUser from "./page/DashboardUser/DashboardUser";
import RutaPrivada from './router/RutaPrivada';


export default function App() {

  return (
    <AuthProvide>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <CreateTicket /> } />
          <Route path='/createticket' element={ <CreateTicket /> } />
          
          <Route path="/dashboard" element={ <DashboardUser /> } />

        </Routes>
      </BrowserRouter>
    </AuthProvide>
  )
}