import { MenuPoint } from "../../../components/MenuPoint/MenuPoint"

export const MisTicket = () => {
    return (
        <div className="w-full h-full">
            <div className="mb-5">
                <h1 className="text-lg">Mis Ticket Creados</h1>
                <input type="text" className="text-xs" placeholder="Buscar"/>
            </div>
            <div>
                <table className="w-full">
                    <tbody>
                        <tr>
                            <td className="w-14">
                                <div className="rounded-full w-11 h-11 border-[#EEEEEE] border border-solid flex items-center justify-center">
                                    <p className="text-2xl">
                                        <ion-icon name="ticket-outline"></ion-icon>
                                    </p>
                                </div>
                            </td>
                            <td>
                                <p className="font-bold">Error SIDIGE</p>
                                <p>Al encender el equipo muestra ...</p>
                            </td>
                            <td className="text-center w-20">
                                <div className="flex flex-row items-center justify-center">
                                    <div className="w-2.5 h-2.5 rounded-full bg-red-800 mr-2"></div>
                                    Urgente
                                </div>
                            </td>
                            <td className="text-center w-32">
                                <div className="inline-flex items-center justify-center bg-[#05668D]/[.6] rounded-2xl p-2">
                                    <div className="w-2.5 h-2.5 rounded-full bg-[#05668D] mr-2"></div>
                                    En Proceso
                                </div>
                            </td>
                            <td className="text-center">
                                <p className="text-4xl">
                                    <ion-icon name="desktop-outline"></ion-icon>
                                </p>
                            </td>
                            <td className="w-10 text-center">
                                <MenuPoint />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}