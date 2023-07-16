import { useState } from 'react';
import { useLoginContext } from '../../context/LoginContext';
import { useNavigate } from 'react-router-dom';

export const LoginUser = () => {

    const navigate = useNavigate()
    const { login } = useLoginContext()
    const [loginUser, setLoginUsert] = useState()
    const handleLogin = (email) => { 
        console.log(email)
        // login(email)
        // navigate('/dashboard')
    }
    return (
        <div>
            <div className='flex flex-col w-[425px]'>
                <h1 className='font-bold mb-5 text-xl'>Inicio de Sesion</h1>
                <p>Direccion de Correo: <span className='text-red-600 font-bold'>*</span></p>
                <input type="email" onChange={(e)=>{setLoginUsert(e.target.value)}} className='mb-4 w-full rounded-md sm:text-sm mt-1 px-4 py-3 bg-[#FFF] border border-slate-300 focus:outline-none' placeholder='alguien@transberperu.com' />
                <p>Contraseña: <span className='text-red-600 font-bold'>*</span></p>
                <input type="password" className='mb-4 w-full rounded-md sm:text-sm mt-1 px-4 py-3 bg-[#FFF] border border-slate-300 focus:outline-none' placeholder='Juan Hutchcraft' />
                <button onClick={()=>handleLogin(email)} className='w-full bg-[#270722] py-4 rounded-lg text-white font-bold'>Iniciar sesion</button>
            </div>
        </div>
    )
}