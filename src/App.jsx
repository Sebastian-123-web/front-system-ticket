import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import DashboardUser from "./page/DashboardUser/DashboardUser";
import CreateTicket from "./page/DashboardUser/CreateTicket/CreateTicket";
import { MisTicket } from "./page/DashboardUser/MisTicket/MisTicket"
import { PrivateRoute } from './router/PrivateRoute';
import { useLoginContext, LoginContextProvider } from './context/LoginContext';
import { LoginUser } from './page/LoginUser/LoginUser';

export default function App() {

  return (
    <LoginContextProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={ user ? ( <Navigate to="/dashboard" /> ) : ( <LoginUser /> ) } />
          <Route path='/dashboard' element={ user ? ( <DashboardUser /> ) : ( <Navigate to="/" /> ) } >
            <Route index element={ <MisTicket /> } />
            <Route path='/dashboard/createticket' element={ <CreateTicket /> } />
          </Route>
          <Route path='*' element={ <h1>Pagina no encontrada :c</h1> } />
        </Routes>
      </BrowserRouter>
    </LoginContextProvider>
  )
}

function PrivateRouter({children, url}) {
  const { user, estadoUsuario } = useLoginContext();
  switch (key) {
    case "/":
      if(user){
        return <Navigate to="/dashboard" />
      }
      return children
      break;

    case "/dashboard":
      if(user){
        return children
      }
      return <Navigate to="/dashboard" />
      break;
  }
}

function PrivateRouteWrapper() {
  const { user, estadoUsuario } = useLoginContext();

  return (
    <PrivateRoute user={{user, estadoUsuario}}>
      <DashboardUser />
    </PrivateRoute>
  );
}