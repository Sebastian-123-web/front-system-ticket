import React, { useState } from 'react';
import ProgressBar from './ProgresoTicket';
import '../../index.css'

const CreateTicket = () => {
    const [step, setStep] = useState(1);

    const handleNextStep = () => {
        setStep(step + 1);
    };

    const handlePrevStep = () => {
        setStep(step - 1);
    };

    return (
        <div>
            <ProgressBar currentStep={step} totalSteps={3} />
            {step === 1 && (
                <div className='flex flex-col w-[425px]'>
                    {/* Aquí va el contenido del primer paso */}
                    <h1 className='font-bold mb-5 text-xl'>Datos de Usuario</h1>
                    <p>Correo corporativo: <span className='text-red-600 font-bold'>*</span></p>
                    <input type="email" className='mb-4 w-full rounded-md sm:text-sm mt-1 px-4 py-3 bg-[#FFF] border border-slate-300 focus:outline-none' placeholder='alguien@transberperu.com' />
                    <p>Nombre y apellido: <span className='text-red-600 font-bold'>*</span></p>
                    <input type="text" className='mb-4 w-full rounded-md sm:text-sm mt-1 px-4 py-3 bg-[#FFF] border border-slate-300 focus:outline-none' placeholder='Juan Hutchcraft' />
                    <p>Telefono/Celular: <span className='text-red-600 font-bold'>*</span></p>
                    <input type="number" className='mb-4 w-full rounded-md sm:text-sm mt-1 px-4 py-3 bg-[#FFF] border border-slate-300 focus:outline-none' placeholder='963741258' />
                    <p>Area: <span className='text-red-600 font-bold'>*</span></p>
                    <select name="" id="" className='mb-4 w-full rounded-md sm:text-sm mt-1 px-4 py-3 bg-[#FFF] border border-slate-300 focus:outline-none'>
                        <option select>Seleccione el area</option>
                        <option value="sistemas">Sistemas</option>
                        <option value="contabilidad">Contabilidad</option>
                    </select>
                    <button onClick={handleNextStep} className='w-full bg-[#270722] py-4 rounded-lg text-white font-bold'>Siguiente</button>
                </div>
            )}
            {step === 2 && (
                <div className='flex flex-col w-[425px]'>
                    {/* Aquí va el contenido del segundo paso */}
                    <div className='mb-4 align-bottom'>
                        <button onClick={handlePrevStep} className='text-[#9AAFC7] align-middle'><ion-icon name="chevron-back-outline"></ion-icon> Atras</button>
                    </div>
                    <p>Descripcion breve: <span className='text-red-600 font-bold'>*</span></p>
                    <input type="text" className='mb-4 w-full rounded-md sm:text-sm mt-1 px-4 py-3 bg-[#FFF] border border-slate-300 focus:outline-none' placeholder='Ejemplo: No abre SIDIGE, Permisos SIDIGE' />
                    <p className='mb-3.5'>Seleccione el dispositivo que presenta inconveniete: <span className='text-red-600 font-bold'>*</span></p>
                    <div className='radioDevice flex justify-between mb-4'>
                        <label>
                            <input type="radio" name='device' value="desktop" className='none' />
                            <div className={`w-16 h-16 border border-slate-300 bg-[#fff] rounded-lg flex justify-center items-center text-slate-300 hover:bg-[#270722b3] hover:text-[#fff] duration-300 cursor-pointer`} title="Computadora"><p className="text-3xl"><ion-icon name="desktop-outline"></ion-icon></p></div>
                        </label>
                        <label>
                            <input type="radio" name='device' value="laptop" className='none' />
                            <div className={`w-16 h-16 border border-slate-300 bg-[#fff] rounded-lg flex justify-center items-center text-slate-300 hover:bg-[#270722b3] hover:text-[#fff] duration-300 cursor-pointer`} title="Laptop"><p className="text-3xl"><ion-icon name="laptop-outline"></ion-icon></p></div>
                        </label>
                        <label>
                            <input type="radio" name='device' value="movil" className='none' />
                            <div className={`w-16 h-16 border border-slate-300 bg-[#fff] rounded-lg flex justify-center items-center text-slate-300 hover:bg-[#270722b3] hover:text-[#fff] duration-300 cursor-pointer`} title="Celular"><p className="text-3xl"><ion-icon name="phone-portrait-outline"></ion-icon></p></div>
                        </label>
                        <label>
                            <input type="radio" name='device' value="impresora" className='none' />
                            <div className={`w-16 h-16 border border-slate-300 bg-[#fff] rounded-lg flex justify-center items-center text-slate-300 hover:bg-[#270722b3] hover:text-[#fff] duration-300 cursor-pointer`} title="Impresora"><p className="text-3xl"><ion-icon name="print-outline"></ion-icon></p></div>
                        </label>
                    </div>
                    <p className='mb-3.5'>Nivel de Importancia: <span className='text-red-600 font-bold'>*</span></p>
                    <div className='flex flex-col mb-4'>
                        <input type="range" list='importancia' className='accent-[#270722]' />
                        <datalist id='importancia'>
                            <option value="0" label='0%'>0</option>
                            <option value="50" label='50%'>50%</option>
                            <option value="100" label='100%'>100%</option>
                        </datalist>
                        <div className='flex justify-between'>
                            <p>Bajo</p>
                            <p>Medio</p>
                            <p>Alto</p>
                        </div>
                    </div>
                    <button onClick={handleNextStep} className='w-full bg-[#270722] py-4 rounded-lg text-white font-bold'>Siguiente</button>
                </div>
            )}
            {step === 3 && (
                <div className='flex flex-col w-[425px]'>
                    {/* Aquí va el contenido del tercer paso */}
                    <div className='mb-4'>
                        <button onClick={handlePrevStep} className='text-[#9AAFC7]'><ion-icon name="chevron-back-outline"></ion-icon> Atras</button>
                    </div>
                    <div>
                        <p>Detalle del problema:</p>
                        <textarea name="" id="" cols="30" rows="5" className='mb-4 w-full rounded-md sm:text-sm mt-1 px-4 py-3 bg-[#FFF] border border-slate-300 focus:outline-none' placeholder='Especifique el problema'></textarea>
                    </div>
                    <div>
                        <p>Codigo Anydesk: <span>(Opcional)</span></p>
                        <input type="number" className='mb-4 w-full rounded-md sm:text-sm mt-1 px-4 py-3 bg-[#FFF] border border-slate-300 focus:outline-none' placeholder='1 321 987 654' />
                    </div>
                    <div>
                        <p>Añadir una imagen: <span>(Opcional)</span></p>
                        <input type="file" src="" alt="" />
                    </div>
                    <button type="submit" className='w-full bg-[#270722] py-4 rounded-lg text-white font-bold'>Enviar</button>
                </div>
            )}
        </div>
    );
};

export default CreateTicket;
