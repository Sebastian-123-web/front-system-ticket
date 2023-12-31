
import { Outlet } from "react-router-dom"

import { useEffect, useState } from "react"

import { useLoginContext } from "../../context/LoginContext" 
import { Navigation } from "../../components/Navigation/Navigation"
import { ChaoticOrbit } from '@uiball/loaders'

const DashboardUser = () => {
    const [loading, setLoading] = useState(true) // SPINNER :3
    const { login, estadoUsuario } = useLoginContext()

    const { user } = useLoginContext()

    // useEffect PARA EL SPINNER :3
    useEffect(()=>{
        // CARGAR DATOS DE USUARIO EN LA WEB
        const dataLogin = estadoUsuario()
        if(dataLogin){
            login(dataLogin)
        }
        

        setTimeout(()=>{
            setLoading(false)
        },1000)
    },[])

    return (
        loading ? 
        (
            <ChaoticOrbit
                size={40}
                speed={1.5}
                color="#18191a"
            />
        )
        :
        (
            <div className="flex w-full h-screen">
                <Navigation />
                <section className="flex flex-col" style={{width: "calc(100% - 230px)"}}>
                    <div className="bg-[#fff] h-[112px] w-full flex justify-between items-center pl-[50px] pr-[25px]">
                        <h1 className="text-2xl font-bold">Mis Ticket</h1>
                        <div className="flex flex-row items-center py-2 px-5 rounded-lg bg-[#E7E9EC] ">
                            <img src={user.fotoPerfil} alt="Foto Perfil" className="w-7 h-7 mr-2 rounded-full" />
                            <p className="mr-2">{`${user.nombre} ${user.apellido}`}</p>
                            <ion-icon name="chevron-down-outline"></ion-icon>
                        </div>
                    </div>
                    <div className="flex flex-row p-[25px]" style={{height: "calc(100vh - 112px)", width: "100%"}}>
                        <div className="rounded-lg" style={{width: "100%"}}>
                            <Outlet />
                        </div>
                        {/* <div className="w-72 bg-[#d9d9d9] p-[25px] rounded-lg flex justify-center items-center">
                            Ops, aqui no hay info :c
                        </div> */}
                    </div>
                </section>
            </div>
        )

    )
}

export default DashboardUser