import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './router';
import { ReviewProvider } from './contexts/ReviewContext';
import { ToastProvider } from './contexts/ToastContext';
import { FavouritesProvider } from './contexts/FavouritesContext';

function App() {
  return (
    <ToastProvider>
      <FavouritesProvider>
        <ReviewProvider>
          <RouterProvider router={router} />
        </ReviewProvider>
      </FavouritesProvider>
    </ToastProvider>
  );
}

export default App;
