

import SearchBox from "../components/SearchBox";

const Search = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-center mb-8 text-sky-900">
        Buscador de Películas
      </h1>
      <SearchBox />
    </div>
  );
};

export default Search;