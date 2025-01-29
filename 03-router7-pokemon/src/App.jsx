import { RouterProvider } from "react-router-dom"
import { router } from "./routes/Router"
import { PokemonProvider } from "./context/PokemonContext"
import { Toaster } from "sonner"

function App() {

  // Cuando usemos REact Router Dom, App solo deberia tener el router provider
  // y el resto de cosas deberian de estar en rootLayout
  return (
    <>
      <PokemonProvider> 
        <Toaster position="top-right" richColors duration={2000}/>
        <RouterProvider router={router}/>
      </PokemonProvider>
      
      
    </>
  )
}

export default App
