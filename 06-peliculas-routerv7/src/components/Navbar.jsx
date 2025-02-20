import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-sky-950 text-white shadow-lg mb-6">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center space-x-8">
            <NavLink 
              to="/" 
              className={({ isActive }) =>
                `text-xl font-bold hover:text-gray-300 transition-colors ${
                  isActive ? 'text-blue-400' : ''
                }`
              }
            >
              Inicio
            </NavLink>

            <NavLink 
              to="/movies" 
              className={({ isActive }) =>
                `hover:text-gray-300 transition-colors ${
                  isActive ? 'text-blue-400' : ''
                }`
              }
            >
              Películas
            </NavLink>

            <NavLink 
              to="/search" 
              className={({ isActive }) =>
                `hover:text-gray-300 transition-colors ${
                  isActive ? 'text-blue-400' : ''
                }`
              }
            >
              Buscar
            </NavLink>

            <NavLink 
              to="/reviews" 
              className={({ isActive }) =>
                `hover:text-gray-300 transition-colors ${
                  isActive ? 'text-blue-400' : ''
                }`
              }
            >
              Reseñas
            </NavLink>

            <NavLink 
              to="/favorites" 
              className={({ isActive }) =>
                `hover:text-gray-300 transition-colors ${
                  isActive ? 'text-blue-400' : ''
                }`
              }
            >
              Favoritos
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;