import { Link } from "react-router-dom"

export const Ticket = () => {
    return (
        <div className="flex flex-row w-full">
            <div>
                <div className="mb-5">
                    <Link to={-1}><ion-icon name="arrow-back-outline"></ion-icon> Atras</Link>
                </div>
                <div>
                    <div className="bg-white p-5 rounded-lg border border-[#E0EDFF]" style={{width: "calc(100% - 308px)"}}>
                        gaaaaaaaaaaaaaaaaaaaaaa
                    </div>
                </div>
                <div>

                </div>
            </div>
            <div>col 2</div>
        </div>
    )
}
