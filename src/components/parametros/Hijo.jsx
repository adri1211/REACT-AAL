
function Hijo(params) {
  const { info, setInfo } = params;
  const handleClickEdad = () => {
    setInfo((prevInfo)=>({...prevInfo, edad:prevInfo.edad + 1}))
}
  return (
    <>
    <div>Eres hijo de {info.nombre}</div>
    <div>
      <button onClick={handleClickEdad}>Aumentar edad desde hijo</button>
    </div>
    </>
  )
}

export default Hijo