import { useState } from 'react';
import { useLoginContext } from '../../context/LoginContext';
import { useNavigate, Link } from 'react-router-dom';

export const LoginUser = () => {

    const navigate = useNavigate()
    const { login } = useLoginContext()
    const [loginUser, setLoginUser] = useState({
        email : '',
        password : ''
    })

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
    return (
        <div>
            <div className='flex flex-col w-[425px]'>
                <h1 className='font-bold mb-5 text-xl text-center'>Inicio de Sesion</h1>
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
                    onClick={ () => alert(`Se envio un correo a ${loginUser.email}`)}
                    className='mb-4 text-right hover:text-indigo-700'
                    >Olvide mi contraseña
                </button>
                <button 
                    onClick={()=>handleLogin(loginUser)} 
                    className='w-full bg-[#270722] py-4 rounded-lg text-white font-bold'
                    >Iniciar sesion
                </button>
            </div>
        </div>
    )
}