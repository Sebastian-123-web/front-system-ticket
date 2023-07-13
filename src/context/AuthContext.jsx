import { createContext, useState } from "react";

const AuthContext = createContext()

const AuthProvide = ({children}) => {
    const [sesionActiva, setSesionActiva ] = useState(false)

    const Login = () => {
        setSesionActiva(true)
        return sesionActiva
    }

    const Logout = () => {
        setSesionActiva(false)
        return sesionActiva
    }

    return (
        <AuthContext.Provider value={{sesionActiva, Login, Logout}} >
            {children}
        </AuthContext.Provider>
    )
}

export {AuthContext, AuthProvide}