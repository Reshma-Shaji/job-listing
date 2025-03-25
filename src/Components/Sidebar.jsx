import React from 'react';

const Sidebar = () => {
  return (
    <>
      <div className="w-[20%] h-[600px] bg-blue-300 relative">
        <div className="w-full max-w-xl py-3">
          <input
            className="w-[90%] bg-white text-lg rounded-sm pl-3 py-2 outline-none absolute right-5 bottom-5"
            type="search"
            name="search"
            placeholder="search jobs..."
            id=""
          />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
