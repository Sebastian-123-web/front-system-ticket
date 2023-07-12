import { createContext } from "react";

const LoginContext = createContext({
    email : null,
    nombre : null
})

export default LoginContext