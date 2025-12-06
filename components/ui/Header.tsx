'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/' },
     { name: 'About', path: '#about' },
    { name: 'Projects', path: '#projects' },
    { name: 'Contact', path: '#contact' },
  ];

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex flex-col items-center pt-6 px-4"
    >
      
      <nav className="relative w-full md:w-auto flex items-center justify-between md:justify-center gap-6 px-6 py-3 rounded-full bg-white/5 backdrop-blur-md border border-white/10 shadow-lg">
        
        {/* Logo */}
        <Link href="/" className="text-white font-bold text-lg tracking-wider md:mr-4 z-50">
          PORTFOLIO<span className="text-blue-500">.</span>
        </Link>

        {/* --- DESKTOP MENU (Hidden on Mobile) --- */}
        <ul className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link 
                href={item.path}
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
          ))}
        </ul>

        {/* --- CTA BUTTON (Desktop Only) --- */}
        <Link 
          href="#contact" 
          className="hidden md:block ml-4 px-4 py-1.5 text-xs font-semibold bg-white text-black rounded-full hover:bg-gray-200 transition-colors"
        >
          Hire Me
        </Link>

        {/* --- MOBILE HAMBURGER BUTTON (Visible on Mobile) --- */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white p-1 focus:outline-none z-50"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            // Icon Close (X)
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 18 12"/></svg>
          ) : (
            // Icon Menu (Hamburger)
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
          )}
        </button>
      </nav>

      {/* --- MOBILE MENU DROPDOWN --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-20 left-4 right-4 md:hidden"
          >
            <div className="flex flex-col items-center gap-4 p-6 bg-neutral-900/90 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  onClick={() => setIsOpen(false)} // Tutup menu saat link diklik
                  className="text-gray-300 hover:text-white text-lg font-medium transition-colors"
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Mobile CTA */}
              <div className="w-full border-t border-white/10 my-2"></div>
              <Link 
                href="#Contact"
                onClick={() => setIsOpen(false)}
                className="w-full text-center px-6 py-3 text-sm font-bold bg-white text-black rounded-full hover:bg-gray-200 transition-colors"
              >
                Hire Me
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}