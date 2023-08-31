
export const opcionesTicket = [
    {'opcion' : 'Informacion'},
    {'opcion' : 'Descargar Informe'}
]

export const Informacion = async () => {
    return alert('Se abre pagina de informacion')
}

export const DescargarInforme = async () => {
    return alert('Se descarga un informe del ticket')
}

class FunctionTicket{


    // Metodos
    Informacion(){
        return alert('Se abre pagina de informacion')
    }

    DescargarInforme(){
        return alert('Se descarga un informe del ticket')
    }
}