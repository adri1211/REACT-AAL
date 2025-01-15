import { useState } from "react";

const Contador = () => {
    //hooks
    const [contador, setContador] = useState(0)

    //variales

    //funciones
    const handlerClick = (num) => {
        if(num > 0){
            setContador((prevContador) => prevContador + num);
        }else if(num <0 && contador > 0){
            setContador((prevContador) => prevContador + num);
        }
        
       
    };

 
    

  return (
    <>
        <div className="max-w-sm mx-auto mt-8 p-6 bg-gray-200 shadow-sm rounded-md">
            <h1 className="text-3xl font-bold text-center mb-5">Ejemplo contador</h1>
            <p className="text-2xl text-center text-blue-500 font-semibold">{contador}</p>
            <div className="flex justify-center mt-5 gap-4">
                <button onClick={() => handlerClick(1)} 
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Aumentar contador</button>
                <button onClick={() => handlerClick(-1)}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Disminuir contador</button>
            </div>
        </div>
    </>
  );
};

export default Contador;
