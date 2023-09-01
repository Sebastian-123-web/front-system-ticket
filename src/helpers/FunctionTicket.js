
const functionTicket = ({}) => {
    const mensajePrueba = () => {
        alert('Funcionoooooo!!!!!!!!!!')
    }
    
    const opciones = [
        {
            'opcion' : 'Informacion',
            'funcion' : mensajePrueba,
            'step' : 1
        },
        {
            'opcion' : 'Configuracion',
            'funcion' : mensajePrueba,
            'step' : 2
        },
        {
            'opcion' : 'Descargar Informe',
            'funcion' : mensajePrueba,
            'step' : 3
        },
        {
            'opcion' : 'Estadisticas',
            'funcion' : mensajePrueba,
            'step' : 4
        },
    ]

  return {
    opciones
  }
}

export default functionTicket