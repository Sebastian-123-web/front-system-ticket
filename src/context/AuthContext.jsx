import { createContext, useState } from "react";

const AuthContext = createContext()

const AuthProvide = ({children}) => {
    const [sesionActiva, setSesionActiva ] = useState(false)

    const Login = () => {
        setSesionActiva(true)
    }

    const Logout = () => {
        setSesionActiva(false)
        console.log(sesionActiva)
    }

    return (
        <AuthContext.Provider value={{sesionActiva, Login, Logout}} >
            {children}
        </AuthContext.Provider>
    )
}

export {AuthContext, AuthProvide}