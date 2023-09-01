
//IMPORTACIONES DE REACT O TERCEROS
import { useState } from "react"
import DataTable from 'react-data-table-component';

//IMPORTACIONES DE COMPONENTES PROPIOS
import { MenuPoint } from "../../../components/MenuPoint/MenuPoint"

//IMPORTACIONES DE FUNCIONALIDADES O APIS
import functionTicket from "../../../helpers/FunctionTicket"


const columns = [
    {
        name: '#',
        selector: row => row.icon,
    },
    {
        name: 'Asunto del Problema',
        selector: row => row.asunto,
    },
    {
        name: 'Estado',
        selector: row => row.year,
    },
    {
        name: 'Importancia',
        selector: row => row.year,
    },
    {
        name: 'Dispositivo',
        selector: row => row.year,
    },
    {
        name: 'Opciones',
        selector: row => row.year,
    },
];

const data = [
    {
        id: 1,
        icon: 'Beetlejuice',
        asunto: 'Error SIDIGE',
    },
    {
        id: 2,
        title: 'Ghostbusters',
        year: '1984',
    },
]


export const MisTicket = () => {

    const [currentStep, setCurrentStep] = useState(0)

    const handleValor = (step) => {
        setCurrentStep(step)
    }
    console.log(currentStep)
    const { opciones } = functionTicket({handleValor})

    
    return (
        <div className="w-full h-full">
            <div className="mb-5">
                <h1 className="text-lg">Mis Ticket Creados</h1>
                <input type="text" className="text-xs" placeholder="Buscar"/>
            </div>
            <div>
                <div className="flex flex-row justify-between items-center mb-2 hover:bg-slate-100 p-2 rounded-lg">
                    <div className="mr-3 w-[56px]">
                        <div className="rounded-full w-11 h-11 border-[#EEEEEE] border border-solid flex items-center justify-center">
                            <p className="text-2xl">
                                <ion-icon name="ticket-outline"></ion-icon>
                            </p>
                        </div>
                    </div>
                    <div className="mr-3 w-[45%] min-w-[245px]">
                        <p className="font-bold">Error SIDIGE</p>
                        <p>Al encender el equipo muestra ...</p>
                    </div>
                    <div className="mr-3 min-w-[125px]">
                        <div className="inline-flex items-center justify-center bg-[#05668D]/[.6] rounded-2xl p-2">
                            <div className="w-2.5 h-2.5 rounded-full bg-[#05668D] mr-2"></div>
                            En Proceso
                        </div>
                    </div>
                    <div className="mr-3 min-w-[87px]">
                        <div className="flex flex-row items-center justify-center">
                            <div className="w-2.5 h-2.5 rounded-full bg-red-800 mr-2"></div>
                            Urgente
                        </div>
                    </div>
                    <div className="mr-3 min-w-[48px]">
                        <p className="text-4xl">
                            <ion-icon name="desktop-outline"></ion-icon>
                        </p>
                    </div>
                    <div className="w-[40px]">
                        <MenuPoint opciones={opciones} >
                            
                        </MenuPoint>
                    </div>
                </div>

                <DataTable
                    columns={columns}
                    data={data}
                />

            </div>
        </div>
    )
}