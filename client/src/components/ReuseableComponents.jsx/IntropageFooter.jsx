import React from 'react';

function IntropageFooter() {
  return (
    <footer className="bg-green-950 text-white py-5 items-center">
      <div className="container mx-auto flex flex-row  sm:gap-3 sm:p-0 sm:top-20 justify-between items-center  ">

          <h2 className="text-3xl font-bold">Bloggger</h2>
          <a className="text-gray-400" href='#'>Privacy</a>
          <a className="text-gray-400" href='#'>Blog</a>
          <a className="text-gray-400" href='#'>Press</a>
          <a className="text-gray-400" href='#'>About</a>
          <a className="text-gray-400" href='#'>Terms</a>
          
        <p className="mb-2">&copy; {new Date().getFullYear()} Bloggger. All rights reserved.</p>
        <p>Developed by Gyaneswar🥂</p>
      </div>
    </footer>
  );
}

export default IntropageFooter;