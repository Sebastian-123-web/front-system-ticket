import { BrowserRouter, Router, Route, Routes } from 'react-router-dom';

import LoginContext from './context/LoginContext';

import CreateTicket from "./page/CreateTicket/CreateTicket";
import DashboardUser from "./page/DashboardUser/DashboardUser";


export default function App() {

  return (
    <LoginContext.Provider value={{email: "rbanagasta@transberperu.com", nombre: "Rodrigo Bañagasta"}}>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <CreateTicket /> } />
          <Route path='/createticket' element={ <CreateTicket /> } />
          { <Route path='/dashboard' element={ <DashboardUser /> } />}
        </Routes>
      </BrowserRouter>

    </LoginContext.Provider>
  )
}