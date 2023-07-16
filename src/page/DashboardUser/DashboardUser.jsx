import { useLoginContext } from "../../context/LoginContext" 

const DashboardUser = () => {

    const { user,logout } = useLoginContext()

    return (

            <div className="flex w-full h-screen">
                <nav className="w-[230px] bg-[#18191A] flex flex-col items-center justify-between py-[50px]">
                    <p></p>
                    <ul>
                        <li>Mis Ticket</li>
                    </ul>
                    <button onClick={logout} className="text-white"><ion-icon name="log-out-outline"></ion-icon> Logout</button>
                </nav>
                <section className="flex flex-col" style={{width: "calc(100% - 230px)"}}>
                    <div className="bg-[#fff] h-[112px] w-full flex justify-between items-center pl-[50px] pr-[25px]">
                        <h1>Mis Ticket</h1>
                        <div className="flex flex-row items-center py-2 px-5 rounded-lg bg-[#E7E9EC] ">
                            <img src={user.fotoPerfil} alt="Foto Perfil" className="w-7 h-7 mr-2 rounded-full" />
                            <p className="mr-2">{`${user.nombre} ${user.apellido}`}</p>
                            <ion-icon name="chevron-down-outline"></ion-icon>
                        </div>
                    </div>
                    <div className="flex flex-row p-[25px]" style={{height: "calc(100vh - 112px)", width: "100%"}}>
                        <div className="bg-white mr-[25px] p-[25px] rounded-lg" style={{width: "calc(100% - 280px)"}}>
                            Ticket
                        </div>
                        <div className="w-72 bg-[#d9d9d9] p-[25px] rounded-lg flex justify-center items-center">
                            Ops, aqui no hay info :c
                        </div>
                    </div>
                </section>
            </div>

    )
}

export default DashboardUser