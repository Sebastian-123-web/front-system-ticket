import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import DashboardUser from "./page/DashboardUser/DashboardUser";
import CreateTicket from "./page/DashboardUser/CreateTicket/CreateTicket";
import { MisTicket } from "./page/DashboardUser/MisTicket/MisTicket"
//import { PrivateRoute } from './router/PrivateRoute';
import { useLoginContext, LoginContextProvider } from './context/LoginContext';
import { LoginUser } from './page/LoginUser/LoginUser';

export default function App() {

  return (
    <LoginContextProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={ <RouterLogin url="/dashboard" > <LoginUser /> </RouterLogin > } />
          <Route path='dashboard' element={ <RouterDashboard url="/" > <DashboardUser /> </RouterDashboard > } >
            <Route index element={ <MisTicket /> } />
            <Route path='/dashboard/createticket' element={ <CreateTicket /> } />
          </Route>
          <Route path='*' element={ <h1>Pagina no encontrada :c</h1> } />
        </Routes>
      </BrowserRouter>
    </LoginContextProvider>
  )
}

function RouterLogin({children, url}) {
  const { user } = useLoginContext();
  if(user){
    return <Navigate to={url} />
  }else{
    return children
  }
}

function RouterDashboard({children, url}) {
  const { user } = useLoginContext();
  if(user){
    return children
  }else{
    return <Navigate to={url} />
  }
}

/*
function PrivateRouteWrapper() {
  const { user, estadoUsuario } = useLoginContext();

  return (
    <PrivateRoute user={{user, estadoUsuario}}>
      <DashboardUser />
    </PrivateRoute>
  );
}
*/