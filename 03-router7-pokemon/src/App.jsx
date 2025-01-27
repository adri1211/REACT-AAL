import { RouterProvider } from "react-router-dom"
import { router } from "./routes/Router"

function App() {

  // Cuando usemos REact Router Dom, App solo deberia tener el router provider
  // y el resto de cosas deberian de estar en rootLayout
  return (
    <>
      <PokemonProvider>
        <RouterProvider router={router}/>
      </PokemonProvider>
      
      
    </>
  )
}

export default App
