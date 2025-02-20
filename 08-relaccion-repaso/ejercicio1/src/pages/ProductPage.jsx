import { useParams } from "react-router-dom";


const ProductPage = ({ action }) => {
  const {id} = useParams();
  return (
    <div>ProductPage action: {action} id:</div>
  )
}

export default ProductPage