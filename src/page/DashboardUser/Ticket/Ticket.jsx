import { Link } from "react-router-dom"

export const Ticket = () => {
    return (
        <div className="w-full h-full grid grid-cols-12 grid-rows-6 gap-6">
            <div className="col-span-9 row-span-1">
                <div className="">
                    <Link to={-1}><ion-icon name="arrow-back-outline"></ion-icon> Atras</Link>
                </div>
            </div>

            <div className="col-span-3 row-span-2 bg-white rounded-lg border border-[#E0EDFF] p-5">Noticias</div>

            <div className="col-span-9 row-span-1 bg-white rounded-lg border border-[#E0EDFF] p-5">
                <div>
                    <div>
                        gaaaaaaaaaaaaaaaaaaaaaa
                    </div>
                </div>
            </div>

            <div className="col-span-5 row-span-2 bg-white rounded-lg border border-[#E0EDFF] p-5">Ticket N° 12</div>
            <div className="col-span-4 row-span-4 bg-white rounded-lg border border-[#E0EDFF] p-5">Descripcion</div>
            <div className="col-span-3 row-span-4 bg-white rounded-lg border border-[#E0EDFF] p-5">Chat</div>
            <div className="col-span-5 row-span-2 bg-white rounded-lg border border-[#E0EDFF] p-5">imagenes</div>
        </div>
    )
}
