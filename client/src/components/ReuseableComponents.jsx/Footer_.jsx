import React from 'react';

function Footer_() {
  return (
    <footer className="bg-emerald-950 text-white py-8 flex flex-col items-center">
      <div className="container mx-auto text-center">
        <div className="mb-4">
          <h2 className="text-3xl font-bold p-3 animate-pulse">Bloggger</h2>
          <p className="text-gray-400">Your go-to platform for insightful articles and stories.</p>
        </div>
        <div className="flex justify-center space-x-14 mb-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition duration-300">
            <i className="fab fa-facebook-f text-2xl"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition duration-300">
            <i className="fab fa-twitter text-2xl"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition duration-300">
            <i className="fab fa-instagram text-2xl"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700 transition duration-300">
            <i className="fab fa-linkedin-in text-2xl"></i>
          </a>
        </div>
        <p className="mb-2">&copy; {new Date().getFullYear()} Bloggger. All rights reserved.</p>
        <p>Developed by Gyaneswar🥂</p>
      </div>
    </footer>
  );
}

export default Footer_;