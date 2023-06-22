import React from 'react';

const ProgressBar = ({ currentStep, totalSteps }) => {
  const progress = ((currentStep - 1) / (totalSteps - 1)) * 100;

  return (
    <div className='mb-14 relative'>
      <div className='px-2 border border-gray-300 bg-white'>
        <div
          className='bg-[#270722] duration-700 rounded-md'
          style={{
            height: '10px',
            width: `${progress}%`,
          }}
          />
      </div>

      <div className='flex justify-between w-full absolute' style={{ top: '-13px' }}>
        <div style={{
          borderRadius: '50%',
          width: '37px',
          height: '37px'
        }} className='bg-[#270722] text-white flex justify-center content-center transition-all'>1</div>
        <div style={{
          borderRadius: '50%',
          width: '37px',
          height: '37px'
        }} className={`${currentStep >= 2 ? 'bg-[#270722] text-white' : 'bg-[#fff]'} border border-gray-300 flex justify-center content-center duration-1000`}>2</div>
        <div style={{
          borderRadius: '50%',
          width: '37px',
          height: '37px'
        }} className={`${currentStep >= 3 ? 'bg-[#270722] text-white' : 'bg-[#fff]'} border border-gray-300 flex justify-center content-center duration-1000`}>3</div>
      </div>

    </div>
  );
};

export default ProgressBar;