import { Link, Outlet, useNavigate } from "react-router-dom"


const RootLayout = () => {

  const navigate = useNavigate();
  const isAuth = localStorage.getItem("token") !== null;
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-100">
        <nav className="bg-white shadow-lg">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex justify-between items-center h-16">
              <div className="flex space-x-4">
                <Link to='/' className="text-xl font-bold">
                home
                </Link>
                <Link to='/profile' className="text-xl font-bold">
                profile
                </Link>
                <Link to='/dashboard' className="text-xl font-bold">
                dashboard
                </Link>
              </div>
              {
                isAuth && (
                  <button
                  onClick={handleLogout} 
                  className="bg-rose-500 text-white px-4 
                  py-2 rounded hover:bg-red-800 
                  hover:shadow-2xl">
                    Cerrar sesión
                  </button>
                )
              }
              
            </div>
          </div>
        </nav>
        <main className="max-w-6xl mx-auto px-4 py-8 mt-8">
          <Outlet />
        </main>
    </div>
  )
}

export default RootLayout