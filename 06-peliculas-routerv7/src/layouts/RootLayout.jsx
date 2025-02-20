import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar";

const RootLayout = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main className="container mx-auto px-4">
        <Outlet />
      </main>
      <footer className="bg-sky-900 text-white mt-8">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <p className="text-center">
            Videoclub &copy; 2025
          </p>
        </div>
      </footer>
    </div>
  );
};

export default RootLayout;