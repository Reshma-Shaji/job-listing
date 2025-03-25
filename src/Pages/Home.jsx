import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import JobCards from '../Components/JobCards';
// import Sidebar from '../Components/Sidebar';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  return (
    <div>
      <Navbar onSearch={setSearchQuery} />
      {/* <Sidebar /> */}
      <JobCards searchQuery={searchQuery} />
    </div>
  );
};

export default Home;
