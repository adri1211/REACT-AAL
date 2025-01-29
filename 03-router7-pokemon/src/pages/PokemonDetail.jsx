import { useLoaderData, useNavigate } from "react-router-dom";
import { usePokemon } from "../context/PokemonContext";

//para traer la ruta que lleva a este componente
//usamos useParams y useNavigate

const PokemonDetail = () => {
  //pokemon trae la data a traves de la funcionalidad loader de react-router-dom
  const pokemon = useLoaderData();

  //hook para navegar entre rutas (navegacion programatica)
  const navigate = useNavigate();
  const {addToFavorites} = usePokemon();

  return (
    <div>
      <div className="max-w-2xl mx-auto bg-white p-6 shadow-lg rounded-xl">
        {/*Boton para volver atras */}
        <button 
          className="mb-4 hover:underline text-blue-400"
          onClick={ () => navigate(-1) }>
          volver
        </button>

        {/**Imagen del pokemon */}
        <img 
          src={pokemon.sprites.other.dream_world.front_default} 
          alt={pokemon.name} 
          className="w-48 h-48 mx-auto"
        />

        <h1 className="text-3xl font-bold text-center mt-4">{pokemon.name}</h1>
        {/**Informacion usando grid */}
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
            <h2 className="text-xl font-semibold mb-2">Estadisticas</h2>
            {
            pokemon.stats.map((stat) => (
              <div key={stat.stat.name}>
                <p className="capitalize">{stat.stat.name}: {stat.base_stat}</p>
              </div>
            ))}
          </div>
          <div>
          <h2 className="text-xl font-semibold mb-2">Tipos</h2>
          <div className="felx gap-2">
          {
            pokemon.types.map((type) => (
              <div key={type.type.name}>
                <p className="capitalize">{type.type.name}</p>
              </div>
            ))}
          </div>
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-slate-900"
          onClick={() => {
            addToFavorites(pokemon);
          }}>
          Agregar a favoritos
        </button>
      </div>

      </div>
    </div>
  )
}

export default PokemonDetail