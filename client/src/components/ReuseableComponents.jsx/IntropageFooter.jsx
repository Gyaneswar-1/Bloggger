import React from 'react';

function IntropageFooter() {
  return (
    <footer className="bg-emerald-950 text-white py-8 flex flex-col items-center">
      <div className="container mx-auto desktop:text-center mobile:text-start ml-12 mr-12">
        <div className="mb-4">
          <h2 className="text-3xl  font-bold p-3 animate-pulse">Bloggger</h2>
          <p className="text-gray-400 ">Your go-to platform for insightful articles and stories.</p>
        </div>
        <p className="mb-2">&copy; {new Date().getFullYear()} Bloggger. All rights reserved.</p>
        <p>Developed by Gyaneswar🥂</p>
      </div>
    </footer>
  );
}

export default IntropageFooter;