import React from 'react';

const About = () => {
  return (
    <div className='h-screen bg-red-100 flex flex-col justify-center'>
      <div className='flex justify-center m-5 p-2'>
        <div>
          <img className='h-54 w-96 mr-20' src='https://cdn.pixabay.com/photo/2015/01/08/18/26/man-593333_1280.jpg' alt="working man" />
        </div>
        <div>
          <h3>Santosh chapagai</h3>
          <p>MBA and software developer</p>
          <p>Full stack developer</p>
          <p>HTML, CSS, React, Javascript</p>
          <p>PHP, symfony</p>
        </div>
      </div>
      <div className='max-w-4xl m-5 mx-20'>
        <p className='my-5'>I am santosh chapagai, a Master in Business Administration graduate and a software developer. I am a full stack developer. Currently, I am focusing on a MERN stack. I love coding and developing something meaningful is really fun and motivating. Programming is enjoyable once you start developing something.</p>
        <p className='my-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus natus amet obcaecati, sequi ipsum molestiae ullam nobis earum, cum blanditiis quos. Totam impedit fuga deserunt cum hic dolor? Non, nemo?</p>
        <p className='my-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis cumque repellendus nam beatae dicta assumenda natus consequuntur quaerat, labore exercitationem minus! Eius aut assumenda minus cupiditate pariatur aliquid nisi inventore!</p>
      </div>
    </div>
  );
};

export default About;