import { BrowserRouter, Router, Route, Routes, useParams } from 'react-router-dom';

import CreateTicket from "./page/CreateTicket/CreateTicket";
import DashboardUser from "./page/DashboardUser/DashboardUser";


export default function App() {

  const {id} = useParams()

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <CreateTicket /> } />
        <Route path='/createticket' element={ <CreateTicket /> } />
        { <Route path='/dashboard/:id' element={ <DashboardUser /> } />}
      </Routes>
    </BrowserRouter>
  )
}