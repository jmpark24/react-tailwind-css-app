import React, { useState } from 'react';
import { FaAlignJustify, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  return (
    <nav className="w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg">
      <div className="flex items-center justify-between w-full h-full px-10">
        <div className="flex items-center">
          <h1 className="mr-4 text-3xl font-bold sm:text-4xl">Chatty</h1>
          <ul className="hidden md:flex">
            <li>Home</li>
            <li>About</li>
            <li>Support</li>
            <li>Feature</li>
            <li>Feedback</li>
          </ul>
        </div>
        <div className="hidden pr-4 md:flex">
          <button className="text-slate-600 mr-4 bg-transparent border-none">Sign In</button>
          <button className="px-8 py-3">Sign up</button>
        </div>
        <div
          onClick={() => {
            setNav(!nav);
          }}
          className="mr-4 md:hidden hover:cursor-pointer"
        >
          {nav ? <FaTimes /> : <FaAlignJustify />}
        </div>
      </div>
      <ul className={nav ? 'absolute bg-zinc-200 w-full px-8' : 'hidden'}>
        <li className="w-full border-b-2 border-zinc-300">Home</li>
        <li className="w-full border-b-2 border-zinc-300">About</li>
        <li className="w-full border-b-2 border-zinc-300">Support</li>
        <li className="w-full border-b-2 border-zinc-300">Feature</li>
        <li className="w-full border-b-2 border-zinc-300">Feedback</li>
        <div className="flex flex-col my-4">
          <button className="px-8 py-3 mb-4 text-slate-600 bg-transparent">Sign In</button>
          <button className="px-8 py-3">Sign Up</button>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
