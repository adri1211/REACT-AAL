

export const Padre = (params) => {
    let {info, setInfo, children} = params;
    const handleClick = () => {
        setInfo({...info,nombre:"Pedro"})

    }
    const handleClickEdad = () => {
        setInfo((prevInfo)=>({...prevInfo, edad:prevInfo.edad + 1}))
    }
    console.log(params.children); 
  return (
    <> 
    <section>
        <h2>Bienvenido {info.nombre}</h2>
        <p>Edad: {info.edad}</p>
        {info.isAdmin && (<p>Es admin</p>)}
        <div>
            <button onClick={handleClick}>Modificar</button>
        </div>
        <div>
            <button onClick={handleClickEdad}>Aumentar Edad</button>
        </div>
        {info.edad < 18 && (<p>Es menor</p>)}
        {info.edad >= 18 && (<p>Es mayor</p>)}
    </section>
    <section>
        {children}
    </section>
    </>
  )
}
