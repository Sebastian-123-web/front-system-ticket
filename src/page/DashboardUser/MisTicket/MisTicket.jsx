
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
        <div className="w-full h-full">
            <div className="mb-5">
                <h1 className="text-lg">Mis Ticket Creados</h1>
                <input type="text" className="text-xs" placeholder="Buscar"/>
            </div>
            <div>
                <LogTicket />
            </div>
        </div>
    )
}


