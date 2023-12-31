import { useEffect, useState } from 'react';
import { useLoginContext } from '../../context/LoginContext';
import { useNavigate } from 'react-router-dom';

import { ChaoticOrbit } from '@uiball/loaders'



import Swal from 'sweetalert2'

export const LoginUser = () => {

    const navigate = useNavigate()
    const { login, estadoUsuario } = useLoginContext()
    const [loginUser, setLoginUser] = useState({
        email : '',
        password : ''
    })
    const [loading, setLoading] = useState(true) // SPINNER :3

    const handleInputs = (e) => {
        const { name, value } = e.target
        setLoginUser( (v) => ({
            ...v,
            [name] : value
        }))
    }

    const handleLogin = (dataLogin) => {
        login(dataLogin)
        navigate('/dashboard')
    }

    useEffect(()=>{
        /*
        const dataLogin = estadoUsuario()
        if(dataLogin){
            login(dataLogin)
            navigate('/dashboard')
        }*/
        setTimeout(()=>{
            setLoading(false)
        },1000)
    },[])

    return (
        <>
        <div className='w-full flex justify-center'>
            { loading ? 
                (
                    <ChaoticOrbit 
                        size={40}
                        speed={1.5} 
                        color="#18191a" 
                    />
                )
                :
                (
                    <div className='flex flex-col w-[425px]'>
                        <h1 className='font-bold mb-5 sm:text-xl text-center'>Inicio de Sesion</h1>
                        <p>Direccion de Correo: <span className='text-red-600 font-bold'>*</span></p>
                        <input 
                            type="email"
                            name='email'
                            value={loginUser.email}
                            onChange={handleInputs}
                            className='mb-4 w-full rounded-md sm:text-sm mt-1 px-4 py-3 bg-[#FFF] border border-slate-300 focus:outline-none' 
                            placeholder='alguien@transberperu.com' />
                        <p>Contraseña: <span className='text-red-600 font-bold'>*</span></p>
                        <input 
                            type="password" 
                            name='password'
                            value={loginUser.password}
                            onChange={handleInputs}
                            className='mb-1 w-full rounded-md sm:text-sm mt-1 px-4 py-3 bg-[#FFF] border border-slate-300 focus:outline-none' 
                            placeholder='***********' />
                        <button 
                            onClick={ () => {
                                // ESTO MUESTRA UNA ALERTA DE ENVIO DE MENSAJE A UNA BANDEJA DE CORREO
                                Swal.fire({
                                    position: 'center',
                                    icon: `${ loginUser.email ? "success" : "error"}`,
                                    title: `${loginUser.email ? "Se envio un mensaje a su correo electronico" : "Ingrese un email para cambiar contraseña"}`,
                                    showConfirmButton: false,
                                    timer: 2000
                                  })
                            }}
                            className='mb-4 text-right hover:text-indigo-700'
                            >Olvide mi contraseña
                        </button>
                        <button 
                            onClick={()=>handleLogin(loginUser)} 
                            className='w-full bg-[#270722] py-4 rounded-lg text-white font-bold'
                            >Iniciar sesion
                        </button>
                    </div>
                )
            }
        </div>
        </>
    )
}