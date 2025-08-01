import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export const MenuHamburguesa = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="relative">
      {/* Botón Hamburguesa */}
      <button onClick={toggleMenu}>
        {isOpen ? <X size={32} className="cursor-pointer text-white" /> : <Menu size={32} className="cursor-pointer text-white" />}
      </button>

      {/* Menú desplegable */}
      {isOpen && (
        <div className="absolute top-12 right-0 bg-slate-800 shadow-lg rounded-md w-48 p-4 z-50">
          <ul className="flex flex-col space-y-3">
            <li><Link to="/" className="hover:text-primary" onClick={toggleMenu}>Inicio</Link></li>
            <li><Link to="/services" className="hover:text-primary" onClick={toggleMenu}>Servicios</Link></li>
            <li><Link to="/contact" className="hover:text-primary" onClick={toggleMenu}>Contacto</Link></li>
          </ul>
        </div>
      )}
    </div>
  );
};
