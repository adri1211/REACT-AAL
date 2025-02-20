import { Link } from "react-router-dom"


const Navbar = () => {
  return (
    <nav className="bg-gradient-to-tr from-gray-500 to-pink-500 shadow-lg p-4">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="space-x-4">
          <Link to='/' className="text-white hover:text-red-600 font-bold">
            Inicio App
          </Link>

          <Link to='/login' className="text-white hover:text-red-600 font-bold">
            Iniciar Sesion
          </Link>

          <Link to='/register' className="text-white hover:text-red-600 font-bold">
            Registrarme
          </Link>
          <Link to='/products' className="text-white hover:text-red-600 font-bold">
            Productos
          </Link>
          <Link to='/cart' className="text-white hover:text-red-600 font-bold">
            Carrito
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar