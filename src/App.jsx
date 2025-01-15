// import Contador from "./components/Contador"
// import ContadorDoble from "./components/ContadorDoble"

import ProductList from "./components/useEffectFetching/ProductList"

// import Saludo from "./components/useEffect/Saludo"

// import { useState } from "react";
// import Hijo from "./components/parametros/Hijo"
// import { Padre } from "./components/parametros/Padre"
// const initialStateInfo = {nombre:"Adrian", edad:10, isAdmin:false};

const App = () => {

  // const [info, setInfo] = useState(initialStateInfo);

  return (
    <>
      {/* // <div className="min-h-screen bg-gray-100 p-8">
        
      //   <div className="mb-8">
      //   <h1 className="text-3xl font-bold text-center mb-8">
      //     Ejemplos de conponentes y estados en react
      //   </h1>
      //   </div>

      //   <div className="mb-8">
      //     <h2 className="text-center text-2xl font-semibold mb-4">Contador Simple</h2>
      //     <Contador />
      //   </div>

      //   <div className="mb-8">
      //     <h2 className="text-center text-2xl font-semibold mb-4">Contador Doble</h2>
      //     <ContadorDoble />
      //   </div>
      // </div> */}
      {/* <p>info nombre: {info.nombre}</p>
      <p>indo edad: {info.edad}</p>
      <Padre info = {info} setInfo = {setInfo}>
        
        <Hijo info = {info} setInfo = {setInfo}></Hijo>
        
      </Padre> */}

      {/* <Saludo></Saludo> */}

      <ProductList></ProductList>
      

    </>
  )
}

export default App