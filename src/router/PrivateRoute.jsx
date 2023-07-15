import { Navigate } from "react-router-dom"

const PrivateRoute = ({user, children}) => {

    if (!user) {
        console.log(user)
        return <Navigate to="/" />
    }
    console.log(user)
    return children

}

export default PrivateRoute