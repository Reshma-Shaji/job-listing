import Tippy from '@tippyjs/react';
import React, { useState } from 'react';
import { CgProfile } from 'react-icons/cg';
import Login from './login';

const Navbar = ({ onSearch }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleSearch = event => {
    setSearchTerm(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <div
      className={`h-16 md:h-20 shadow-md flex items-center justify-between px-6 md:px-10 transition-all duration-300 ${
        isDarkMode ? 'bg-black text-white' : 'bg-white'
      }`}
    >
      <div className="flex items-center space-x-2">
        <img className="h-8 md:h-10" src="jobicon.png" alt="Logo" />
        <h1 className="text-lg md:text-xl font-semibold text-blue-500">
          find<span className="text-violet-600">Job</span>
        </h1>
      </div>

      <div className="flex-grow mx-4 md:mx-6">
        <input
          className="w-full bg-gray-200 text-sm md:text-lg rounded-lg pl-3 py-2 outline-none"
          type="search"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Search jobs..."
        />
      </div>
      <div className="py-3">
        <Tippy
          theme="light"
          content={<Login />}
          interactive={true}
          className="cursor-pointer"
        >
          <CgProfile size={30} />
        </Tippy>
      </div>
      <div className="ml-4">
        <img
          src={isDarkMode ? 'bulb off.png' : 'bulb on.png'}
          alt="Toggle"
          className="h-12 md:h-16 cursor-pointer -mt-4"
          onClick={handleToggle}
        />
      </div>
    </div>
  );
};

export default Navbar;
