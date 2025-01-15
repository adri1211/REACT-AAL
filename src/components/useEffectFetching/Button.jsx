import carrito from "../../assets/anadir-al-carrito.png";
export const Button = (props) => {
    const {className, onClick} = props;
  return (
    <>
        <button className={className} onClick={onClick}>
            <img src={carrito} alt="Añadir al carrito" className="w-6 h-6 inline-block mr-2"/>
            {props.children}
        </button>
    </>
  )
}

export default Button;
