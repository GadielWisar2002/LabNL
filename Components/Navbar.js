import { useState } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  const categories = ['Artes', 'Arquitectura', 'Ciencia', 'Ciudad', 'Comportamiento', 'Comunicación', 'Cultura Digital', 'Diseño', 'Economía', 'Filosofía', 'Género', 'Gestión Cultural', 'Gobernanza', 'Hazlo Tú Mismo', 'Investigación', 'Memoria', 'Pedagogía', 'Política', 'Producción Audiovisual', 'Sociología / Antropología', 'Sostenibilidad', 'Tecnología'];

  return (
    <nav className="navbar">
      <img src="https://www.labnuevoleon.mx/_next/static/media/labnl-logo.9c66c725.svg" alt="LABNL Logo" className="navbar-logo" />
      <div className='dropdown'>
        <button className='chosen-value' onClick={() => setIsNavExpanded(true)}>
          Categorías
        </button>
        {isNavExpanded && (
          <ul className='value-list'>
            {categories.map((category, index) => (
              <li key={index}>{category}</li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
}





/*<div
        className="navbar-item"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        Categorías
        {isHovering && (
          <div className="categories-dropdown">
            {categories.map((category, index) => (
              <div key={index} className="category-item">
                {category}
              </div>
            ))}
          </div>
        )}
      </div>*/