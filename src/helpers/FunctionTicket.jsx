import { Navigate } from 'react-router-dom';

import Swal from 'sweetalert2'

const functionTicket = () => {
    const informacionTicket = () => {
        return <Navigate to={`/dashboard/8`} />
        // console.log('hola')
        // alert('holaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
    }

    const descargarInforme = () => {
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Informe Descargado',
            showConfirmButton: false,
            timer: 1500
        })
    }
    
    const opciones = [
        {
            'opcion' : 'Informacion',
            'funcion' : informacionTicket
        },
        {
            'opcion' : 'Descargar Informe',
            'funcion' : descargarInforme
        },
    ]

  return {
    opciones
  }
}

export default functionTicket