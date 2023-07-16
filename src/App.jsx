import { BrowserRouter, Routes, Route } from 'react-router-dom';

import DashboardUser from "./page/DashboardUser/DashboardUser";
import CreateTicket from "./page/CreateTicket/CreateTicket";
import {MisTicket} from "./page/MisTicket/MisTicket";
import { PrivateRoute } from './router/PrivateRoute';
import { useLoginContext, LoginContextProvider } from './context/LoginContext';
import { LoginUser } from './page/LoginUser/LoginUser';

export default function App() {

  return (
    <LoginContextProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={ <LoginUser /> } />
          <Route path='/dashboard' element={ <PrivateRouteWrapper /> } >
            <Route index element={ <MisTicket /> } />
            <Route path='/dashboard/createticket' element={ <CreateTicket /> } />
          </Route>
          <Route path='*' element={ <h1>Pagina no encontrada :c</h1> } />
        </Routes>
      </BrowserRouter>
    </LoginContextProvider>
  )
}

function PrivateRouteWrapper() {
  const { user } = useLoginContext();

  return (
    <PrivateRoute user={user}>
      <DashboardUser />
    </PrivateRoute>
  );
}