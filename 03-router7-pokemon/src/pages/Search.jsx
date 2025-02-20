import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Spinner from '../components/Spinner';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [pokemons, setPokemons] = useState([]);
  const [filteredPokemons, setFilteredPokemons] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=1000');
        const data = await response.json();
        
        // Obtener los detalles de cada Pokemon
        const pokemonDetails = await Promise.all(
          data.results.map(async (pokemon) => {
            const res = await fetch(pokemon.url);
            return res.json();
          })
        );
        
        setPokemons(pokemonDetails);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching pokemons:', error);
        setLoading(false);
      }
    };

    fetchPokemons();
  }, []);

  useEffect(() => {
    if (searchTerm.trim() === '') {
      setFilteredPokemons([]);
      return;
    }

    const filtered = pokemons.filter(pokemon =>
      pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredPokemons(filtered);
  }, [searchTerm, pokemons]);

  if (loading) return <Spinner />;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Buscar Pokemon..."
          className="w-full px-4 py-2 rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:outline-none mb-8"
        />

        {filteredPokemons.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredPokemons.map((pokemon) => (
              <Link
                key={pokemon.id}
                to={`/search/${pokemon.name}`}
                className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
              >
                <div className="p-4">
                  <img
                    src={pokemon.sprites.other['official-artwork'].front_default || pokemon.sprites.front_default}
                    alt={pokemon.name}
                    className="w-full h-48 object-contain"
                  />
                  <div className="mt-4">
                    <h2 className="text-xl font-semibold text-center capitalize">
                      {pokemon.name}
                    </h2>
                    <div className="flex justify-center gap-2 mt-2">
                      {pokemon.types.map((type) => (
                        <span
                          key={type.type.name}
                          className={`px-3 py-1 rounded-full text-sm text-white bg-${type.type.name} capitalize`}
                          style={{
                            backgroundColor: getTypeColor(type.type.name)
                          }}
                        >
                          {type.type.name}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

        {searchTerm && filteredPokemons.length === 0 && (
          <p className="text-center text-gray-600 text-lg">
            No se encontraron Pokemon que coincidan con tu búsqueda
          </p>
        )}
      </div>
    </div>
  );
};

// Función auxiliar para obtener el color según el tipo de Pokemon
const getTypeColor = (type) => {
  const colors = {
    normal: '#A8A878',
    fire: '#F08030',
    water: '#6890F0',
    electric: '#F8D030',
    grass: '#78C850',
    ice: '#98D8D8',
    fighting: '#C03028',
    poison: '#A040A0',
    ground: '#E0C068',
    flying: '#A890F0',
    psychic: '#F85888',
    bug: '#A8B820',
    rock: '#B8A038',
    ghost: '#705898',
    dragon: '#7038F8',
    dark: '#705848',
    steel: '#B8B8D0',
    fairy: '#EE99AC'
  };
  return colors[type] || '#777777';
};

export default Search;