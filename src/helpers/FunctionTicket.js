
const functionTicket = ({handleValor}) => {
    const mensajePrueba = () => {
        alert('Funcionoooooo!!!!!!!!!!')
    }
    
    const opciones = [
        {
            'opcion' : 'Informacion',
            'funcion' : handleValor,
            'step' : 1
        },
        {
            'opcion' : 'Configuracion',
            'funcion' : handleValor,
            'step' : 2
        },
        {
            'opcion' : 'Descargar Informe',
            'funcion' : handleValor,
            'step' : 3
        },
        {
            'opcion' : 'Estadisticas',
            'funcion' : handleValor,
            'step' : 4
        },
    ]

  return {
    opciones
  }
}

export default functionTicket