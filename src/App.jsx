import { BrowserRouter, Router, Route, Routes } from 'react-router-dom';

import CreateTicket from "./page/CreateTicket/CreateTicket";
import DashboardUser from "./page/DashboardUser/DashboardUser";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <CreateTicket /> } />
        <Route path='/createticket' element={ <CreateTicket /> } />
        <Route path='/dashboard' element={ <DashboardUser /> } />
      </Routes>
    </BrowserRouter>
  )
}