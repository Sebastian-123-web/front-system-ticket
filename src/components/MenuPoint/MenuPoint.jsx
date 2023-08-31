import { useState } from "react"

export const MenuPoint = (props) => {

    const [view, setView] = useState(false)
    const [opciones, setOpciones] = useState([
        {
            'opcion' : 'Informacion',
            'funcion' : 'aqui una funcion'
        },
        {
            'opcion' : 'Configuracion',
            'funcion' : 'aqui una funcion'
        },
        {
            'opcion' : 'Descargar Informe',
            'funcion' : 'aqui una funcion'
        },
        {
            'opcion' : 'Estadisticas',
            'funcion' : 'aqui una funcion'
        },
    ])

    const handleViewMenu = () => {
        if(!view){
            return setView(true)
        }
        setView(false)
    }

    return(
        <div className="relative">
            <div 
                className="cursor-pointer w-10 h-10 rounded-lg hover:bg-slate-200 flex flex-col justify-center items-center"
                onClick={() => handleViewMenu() }
                >
                    <div className="w-1 h-1 rounded-lg bg-black mb-1"></div>
                    <div className="w-1 h-1 rounded-lg bg-black mb-1"></div>
                    <div className="w-1 h-1 rounded-lg bg-black"></div>
            </div>


            <div className={`z-50 w-44 p-2 right-5 bg-[#FAFAFA] rounded-l-lg rounded-br-lg border border-slate-100 shadow-lg shadow-slate-400 absolute ${ view ? ' ' : 'hidden' }`}>
                <ul>
                    {
                        opciones.length > 0 && opciones.map( (op, i) => (
                            <li 
                                key={i}
                                className=" hover:bg-slate-400 hover:text-white hover:font-bold rounded-lg p-2 cursor-pointer"
                                onClick={()=> alert('Hola') }
                            >{op.opcion}</li> 
                        ) )
                    }
                </ul>
            </div>
        </div>
    )
}