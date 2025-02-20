import { Navigate, NavLink, Outlet } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'


const AdminLayout = () => {
  const {logout} = useAuth();
  function handleLogout(){
    logout();
    Navigate("/");
    }
  return (
    <div className='flex h-screen'>
      <div className='lg:hidden'>
        <button>

        </button>
      </div>
      <div>
        <aside className='fixed lg:static w-64 bg-gray-800 h-full lg:block transform transition-transform flex flex-col'>
        <nav className='flex-1 p-4 space-y-2'>
          <NavLink to="/admin" className="bloc p-2 text-white hover:text-amber-700">
            DashBoard
          </NavLink>
          </nav>
          <nav className='flex-1 p-4 space-y-2'>
          <NavLink to="/admin/users" className="bloc p-2 text-white hover:text-amber-700">
            Users
          </NavLink>
          </nav>
          <nav className='flex-1 p-4 space-y-2'>
          <NavLink to="/admin/products" className="bloc p-2 text-white hover:text-amber-700">
            Productos
          </NavLink>
          </nav>
          <nav className='flex-1 p-4 space-y-2'>
          <NavLink to="/admin/settings" className="bloc p-2 text-white  hover:text-amber-700">
            Settings
          </NavLink>
        </nav>
        <div className='p-4 border-t border-gray-700'>
          <button onClick={handleLogout} className='w-full bg-red-500 text-white p-2 rounded hover:bg-red-800 transition-colors'>
            Logout
          </button>
        </div>
        </aside>
        <main className='flex-1 p-6 overflow-auto'>
          <Outlet/>
        </main>
      </div>
    </div>

  )
}


export default AdminLayout