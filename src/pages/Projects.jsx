import React from 'react';

const Projects = () => {
  return (
    <div className='bg-lime-100 h-screen p-5'>
      <div className='bg-white w-48 h-96'>
        <img className='h-24 w-48' src="https://cdn.pixabay.com/photo/2015/12/07/10/24/go-kart-1080492_1280.jpg" alt='front-end' />
        <h2 className='p-2'>Speed Game</h2>
        <p className='p-2'>HTML, CSS, Javascript</p>
        <p className='p-2'>Game that test your speed skills. There are four circles in the game. Circles activate randomly. If the player click the right activate circle the score increases by 10.</p>


      </div>
    </div>
  );
};

export default Projects;