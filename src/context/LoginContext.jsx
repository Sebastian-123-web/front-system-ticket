import { useState, useContext, createContext } from "react";

import { Autenticacion } from "../helpers/Autenticacion";

const LoginContext = createContext()

export const useLoginContext = () => useContext(LoginContext)

export const LoginContextProvider = ({children}) => {
    
    const [user, setUser] = useState(null)

    // INICIO DE SESION Y CERRAR SESION
    const login = async (email) => {
        const dataUser = await Autenticacion(email)
        setUser(dataUser)
    }

    const logout = () => {
        setUser(null)
    }

    return (
        <LoginContext.Provider value={{user, login, logout}}>
            {children}
        </LoginContext.Provider>
    )
}