import React from 'react';

const ProgressBar = ({ currentStep, totalSteps }) => {
  const progress = ((currentStep - 1) / (totalSteps - 1)) * 100;

  return (
    <div className='mb-10 relative'>
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
        <div className='bg-[#270722] text-white border border-gray-300 rounded-full w-9 h-9 flex items-center justify-center duration-1000'><p>1</p></div>
        <div className={`${currentStep >= 2 ? 'bg-[#270722] text-white' : 'bg-[#fff]'} border border-gray-300 rounded-full w-9 h-9 flex items-center justify-center duration-1000`}><p>2</p></div>
        <div className={`${currentStep >= 3 ? 'bg-[#270722] text-white' : 'bg-[#fff]'} border border-gray-300 rounded-full w-9 h-9 flex items-center justify-center duration-1000`}><p>3</p></div>
      </div>

    </div>
  );
};

export default ProgressBar;