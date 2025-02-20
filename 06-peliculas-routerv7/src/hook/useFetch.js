import { useEffect, useState } from "react";

export const useFetch = (fetchFunction, dependencies = []) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const fetchData = async () =>{
        try {
            const response = await fetchFunction();
            setData(response);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    }
    useEffect(() => {
        // me pongo en modo de carga
        const abortController = new AbortController();
        setLoading(true);
        // llamo a la funcion que se me pasa como parametro
        fetchData();
        // limpio los errores
        setError(null);

        return () => {
        // lo que ejecutemos aqui se ejecutara cuando se desmonte el componente
        abortController.abort(); 
        }
    }, dependencies);

    return { data, error, loading };
}

export default useFetch;