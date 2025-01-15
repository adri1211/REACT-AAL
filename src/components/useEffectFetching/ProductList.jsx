import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { LiCartProduct } from "./LiCartProduct";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [carrito, setCarrito] = useState([]);
  const [totalcarrito, setTotalcarrito] = useState(0);

  useEffect(() => {
    fetchProduct();

  }, [])


  const addToCart = (product) => {
    setCarrito((prevCarrito)=>[...prevCarrito, product]);
    setTotalcarrito(totalCart(carrito));
  }

  const totalCart = (carrito) => {
    return carrito.reduce((acc, product) => acc + product.precio, 0);
  };

  const removeCart = (product) => {};
  

  const fetchProduct = async () => {
    try {
        const response = await fetch("http://localhost:5173/src/Data/db.json");
        if (!response.ok) {
            throw new Error("Ha ocurrido un error");  
        }
        setProducts(await response.json());

    } catch (error) {
        console.log(error);
    }
  }
  return (
    <div className="w-full max-w-5xl mx-auto p-4">
        <h1 className="text-2xl font-bold text-center mb-6">Lista de libros</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
           {
            products.map((product) => (
            <ProductCard key={product.id} product = {product} addToCart = {addToCart}></ProductCard>
            ))
           }
        </div>
        <div className="mt-10">
            <h2 className="text-2xl font-bold text-center mt-6">Carrito de compras</h2>
            <p> Total Carrito: {totalcarrito}</p>
            {
                carrito.length > 0 ? (
                    <ul>
                        {
                            carrito.map((product, index)=>(
                            <LiCartProduct key = {index} product={product}></LiCartProduct>
                        ))
                        }
                    </ul>
                ) : (
                    <p className="text-center">No hay libros en el carrito</p>
                )
            }
            

        </div>
    </div>
  )
}

export default ProductList