import { Link } from "react-router-dom"

import { useLoginContext } from "../../context/LoginContext"
import { useState } from "react"
 
export const Navigation = () => {

    const [activeMenu, setActiveMenu] = useState("/dashboard")

    const navigationMenu = [
        {
            url : "/dashboard",
            name : "Mis Tickets",
            icon : "ticket-outline"
        },
        {
            url : "/dashboard/createticket",
            name : "Crear Ticket",
            icon : "ticket-outline"
        },
    ]

    const { logout } = useLoginContext()

    return (
        <nav className="w-[230px] bg-[#18191A] flex flex-col items-center justify-between py-[50px]">
            <p></p>
            <ul className="text-white">
                {
                    navigationMenu.map( (nav,i) => (
                        <li key={i} className="py-5">
                            <Link to={nav.url} onClick={() => setActiveMenu(nav.url)} className={`py-4 px-5 rounded-full ${activeMenu==nav.url ? 'bg-white text-black' : 'text-white'}`}><ion-icon name={nav.icon}></ion-icon> {nav.name}</Link>
                        </li>
                    ))
                }
            </ul>
            <button onClick={logout} className="text-white"><ion-icon name="log-out-outline"></ion-icon> Logout</button>
        </nav>
    )
}