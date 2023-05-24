import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div className='flex justify-between bg-gray-200 p-3'>
      <div>
        <NavLink to="/"><h3>Tailwind</h3></NavLink>
      </div>
      <div>
        <nav>
          <ul className='flex gap-3'>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/projects">Projects</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contacts</NavLink>
            </li>
            <li>
              <NavLink to="/more">More</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;