import React from 'react';

const More = () => {
  return (
    <div className='h-screen bg-cyan-100'>
      <div className='p-2 flex justify-center'>
        <h3>More information about tailwind</h3>
      </div>
      <div className='p-2'>
        <p className='flex justify-center'>Tailwind is an awesome inline styling framework. </p>
        <p className='flex justify-center'>Just using the classname and applying the styling will work. </p>
      </div>
    </div>
  );
};

export default More;