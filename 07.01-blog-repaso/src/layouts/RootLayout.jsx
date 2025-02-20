import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"


const RootLayout = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main>
        <Outlet></Outlet>
      </main>
      <footer className="bg-sky-900 text-white mx-auto">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <p className="text-center">
            AALBLOG &copy; 2025
          </p>
        </div>
      </footer>
    </div>
  )
}

export default RootLayout