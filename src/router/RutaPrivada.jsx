import { Route, Redirect } from "react-router-dom"

export default RutaPrivada = ({children, ...atributo}) => {
    const {dataUser} = "rbanagasta@transberperu.com"

    if(dataUser){
        return <Route {...atributo}>{children}</Route> 
    }else{
        return <Redirect to="/" />
    }
}