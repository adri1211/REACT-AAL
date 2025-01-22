import { useEffect, useState } from "react"

const Home = () => {

  const [pokemons, setPokemons] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    fetchPokemons();
  }, [])
  
  const fetchPokemons = async () => {
  try {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20')
    if(!response.ok){
      console.log('Error en la petición')
    }
    const data = await response.json()
    //obtenemos los datos de los pokemons en paralelo
    const pokemonsDetails = await Promise.all(data.results.map(async (pokemon) => {
      const response = await fetch(pokemon.url)
      return response.json()
    }))
    setPokemons(pokemonsDetails);
  } catch (error) {
    console.log("Error en la petición", error);
  }
  }


  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold mb-6">Pokemons disponibles </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {
          pokemons.map(pokemons => (
            <div 
              key={pokemons.id} 
              className="bg-white rounded-xl p-6 hover:shadow-sm">

                <div className="relative group">
                  <img className="mx-auto"
                  src={pokemons.sprites.front_default} 
                  alt={pokemons.name} />

                  <h2 className="text-xl font-bold text-center mt-4">
                    {pokemons.name}
                  </h2>
                </div>

            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Home