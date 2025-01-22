import { NavLink } from 'react-router-dom';
import { ROUTES } from '../routes/paths';

const Navbar = () => {
  /**
   * NavLink se utiliza para movernos entre las rutas de nuestra aplicación.
   * NavLink añade la clase active a className cuando la ruta es la actual.
   * isActive -> es una prop de react router dom que me dice si la ruta está activa.
   */
  return (
    <nav className="bg-gradient-to-tr from-gray-500 to-pink-500 shadow-lg p-4">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="space-x-4">
          <NavLink
            to={ROUTES.HOME}
            className={({ isActive }) =>
              `text-white hover:text-red-600 ${isActive ? 'font-bold' : ''}`
            }
          >
            Inicio App
          </NavLink>

          <NavLink to={ROUTES.SEARCH} className={({ isActive }) =>
              `text-white hover:text-red-600 ${isActive ? 'font-bold' : ''}`
            }>
            Buscar
          </NavLink>

          <NavLink to={ROUTES.FAVORITES} className={({ isActive }) =>
              `text-white hover:text-red-600 ${isActive ? 'font-bold' : ''}`
            }>
            Favoritos
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
