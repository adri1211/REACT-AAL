import { useEffect, useState } from "react";

const Saludo = () => {
  
    const [edad, setEdad] = useState(0)
    const [sexo, setSexo] = useState('M')

    // useEffect(() => {
    //   console.log("Renderizado al montar el componente");
    // });

    // useEffect(() => {
    //   console.log("Renderizado al montar el componente");
    // },[]);

    useEffect(() => {
        console.log("Renderizado al montar el componente y cuando modifique el estado sexo");
    },[sexo]);
    

    const handleClickEdad = () => {
        setEdad((prevEdad) => prevEdad + 1); 
    }

    const handleClickSexo = () => {
        setSexo((prevSexo)=> prevSexo === 'M' ? 'F' : 'M'); 
    }
    
    return (
        <>
        <p>Edad: {edad}</p>
        <button onClick={handleClickEdad}>Aumentar Edad</button>
        <p>Sexo: {sexo}</p>
        <button onClick={handleClickSexo}>Cambiar</button>
        </>
    )
  
}

export default Saludo