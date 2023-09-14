
//IMPORTACIONES DE REACT O TERCEROS


//IMPORTACIONES DE COMPONENTES PROPIOS
import { LogTicket } from "./LogTicket";

//IMPORTACIONES DE FUNCIONALIDADES O APIS




export const iconTicket = () => {
  return (
    <div className="rounded-full w-11 h-11 border-[#EEEEEE] border border-solid flex items-center justify-center">
        <p className="text-2xl">
            <ion-icon name="ticket-outline"></ion-icon>
        </p>
    </div>
  )
}

export const MisTicket = () => {
    
    // const [currentStep, setCurrentStep] = useState(0)
    
    // const handleValor = (step) => {
    //     setCurrentStep(step)
    // }
    // console.log(currentStep)
    
    
    return (
        <div className="flex flex-row w-full h-full">
            <div className="mr-5 mb-5" style={{width: "calc(100% - 308px)", height: "calc(100% - 93px)"}}>
                <div className="flex justify-between items-center bg-white p-5 mb-5 rounded-lg border border-[#E0EDFF]">
                    <h1 className="text-lg">Mis Ticket Creados</h1>
                    <div className="flex items-center relative text-[#9AAFC7]">
                        <div className="absolute left-2">
                            <ion-icon name="search-outline"></ion-icon>
                        </div>
                        <input type="text" className="text-xs py-2 pl-7 rounded-xl font-bold bg-[#E7E9EC] placeholder-[#9AAFC7] text-black border border-[#CBD5E1] outline-[#a8b6c6]" placeholder="Buscar: Error, Sidige, etc"/>
                    </div>
                </div>
                <div className=" bg-white h-full p-5 rounded-lg border border-[#E0EDFF]">
                    <LogTicket />
                </div>
            </div>
            <div className="bg-white w-72">
                Hola
            </div>
        </div>
    )
}


