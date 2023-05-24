import React from 'react';

const Header = () => {
  return (
    <div className='flex justify-between bg-gray-200 p-3'>
      <div>
        <h3>Tailwind</h3>
      </div>
      <div>
        <nav>
          <ul className='flex gap-3'>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Projects</a>
            </li>
            <li>
              <a href="/">Contacts</a>
            </li>
            <li>
              <a href="/">More</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;