import React, { useState } from 'react';
import ProgressBar from './ProgresoTicket';

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
                    <input type="text" className='mb-4 w-full rounded-md sm:text-sm mt-1 px-4 py-3 bg-[#FFF] border border-slate-300 focus:outline-none' placeholder='alguien@transberperu.com' />
                    <p>Nombre y apellido: <span className='text-red-600 font-bold'>*</span></p>
                    <input type="text" className='mb-4 w-full rounded-md sm:text-sm mt-1 px-4 py-3 bg-[#FFF] border border-slate-300 focus:outline-none' placeholder='Juan Hutchcraft' />
                    <p>Telefono/Celular: <span className='text-red-600 font-bold'>*</span></p>
                    <input type="text" className='mb-4 w-full rounded-md sm:text-sm mt-1 px-4 py-3 bg-[#FFF] border border-slate-300 focus:outline-none' placeholder='963741258' />
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
                    <button onClick={handlePrevStep}>Anterior</button>
                    <p>Descripcion breve: <span className='text-red-600 font-bold'>*</span></p>
                    <input type="text" className='mb-4 w-full rounded-md sm:text-sm mt-1 px-4 py-3 bg-[#FFF] border border-slate-300 focus:outline-none' placeholder='Ejemplo: No abre SIDIGE, Permisos SIDIGE' />
                    <p className='mb-3.5'>Seleccione el dispositivo que presenta inconveniete: <span className='text-red-600 font-bold'>*</span></p>
                    <div className='flex justify-between mb-5'>
                        <div className='w-16 h-16 border border-slate-300 bg-[#fff] rounded-lg flex justify-center items-center text-slate-300'><p className="text-3xl"><ion-icon name="desktop-outline"></ion-icon></p></div>
                        <div className='w-16 h-16 border border-slate-300 bg-[#fff] rounded-lg flex justify-center items-center text-slate-300'><p className="text-3xl"><ion-icon name="laptop-outline"></ion-icon></p></div>
                        <div className='w-16 h-16 border border-slate-300 bg-[#fff] rounded-lg flex justify-center items-center text-slate-300'><p className="text-3xl"><ion-icon name="phone-portrait-outline"></ion-icon></p></div>
                        <div className='w-16 h-16 border border-slate-300 bg-[#fff] rounded-lg flex justify-center items-center text-slate-300'><p className="text-3xl"><ion-icon name="print-outline"></ion-icon></p></div>
                    </div>
                    <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                        <div class="bg-blue-600 h-2.5 rounded-full w-[100%]"></div>
                    </div>
                    <button onClick={handleNextStep} className='w-full bg-[#270722] py-4 rounded-lg text-white font-bold'>Siguiente</button>
                </div>
            )}
            {step === 3 && (
                <div className='flex flex-col w-[425px]'>
                    {/* Aquí va el contenido del tercer paso */}
                    <button onClick={handlePrevStep}>Anterior</button>
                    <button type="submit" className='w-full bg-[#270722] py-4 rounded-lg text-white font-bold'>Enviar</button>
                </div>
            )}
        </div>
    );
};

export default CreateTicket;
