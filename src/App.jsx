import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import CreateTicket from "./page/CreateTicket/CreateTicket";
import DashboardUser from "./page/DashboardUser/DashboardUser";
import { PrivateRoute } from './router/PrivateRoute';
import { useLoginContext, LoginContextProvider } from './context/LoginContext';

export default function App() {

  return (
    <LoginContextProvider>
      <BrowserRouter>
        {/* <div>
          <Link to='/dashboard'>Dashboard</Link>
        </div> */}

        {/* {
          user ? <button onClick={logout}>Logout</button> : <button onClick={login}>Login</button>
        } */}

        <Routes>
          <Route index element={ <CreateTicket /> } />
          <Route path='/createticket' element={ <CreateTicket /> } />

          <Route path='/dashboard' element={ <PrivateRouteWrapper /> } />
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