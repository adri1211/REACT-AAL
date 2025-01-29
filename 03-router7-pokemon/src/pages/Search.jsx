import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";


const Search = () => {

  const [search, setSearch] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate(); 
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${search.toLowerCase()}`)
      if (!response.ok) {
        toast.error("Error buscar pokemon",{
          style:{
            background:"red",
            color:"white",
            border:"2px solid red"
          },
          icon:"❌"
        })
        return;
      }
      console.log(await response.json());

      navigate(`/search/${search.toLowerCase()}`)

      
  } catch (error) {
    toast.error("Error al buscar el pokemon", {
      style:{
        background:"red",
        color:"white",
        border:"2px solid red"
      },
      icon:"❌" 
    })
    
  } finally {
    setIsLoading(false);
  }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Pokemon a buscar: </h1>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-6 rounded-xl shadow-lg">
        <div className="flex gap-2">
          <input 
          type="text"
          value={search}
          placeholder="Buscar pokemon..."
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 p-2 border border-gray-200 rounded-lg focus:ring-rose-500" />
          
          <button
          type="submit"
          className="bg-red-500">
            Buscar</button>
        </div>
      </form>
    </div>
  )
}

export default Search