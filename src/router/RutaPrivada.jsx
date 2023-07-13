import { useContext } from "react"
import { Route, useNavigate } from "react-router-dom"
import { AuthContext } from "../context/AuthContext"

const RutaPrivada = ({element: element, ...rest}) => {
    const { sesionActiva } = useContext(AuthContext)
    const navigate = useNavigate()

    return (
        <Route {...rest}
            render = {( props) => sesionActiva ? <element {...props} /> : navigate('/') }
         />
    )
}

export default RutaPrivada