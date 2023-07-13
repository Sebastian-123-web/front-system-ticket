import { Route, redirect } from "react-router-dom"

const RutaPrivada = () => {
    const {dataUser} = "rbanagasta@transberperu.com"

    if(dataUser){
        return <Route {...atributo}>{children}</Route> 
    }else{
        return redirect('/')
    }
}

export default RutaPrivada