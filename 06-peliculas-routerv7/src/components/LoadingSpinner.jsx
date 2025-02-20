import { PacmanLoader } from "react-spinners";

const LoadingSpinner = () => {
  return (
    <div className='flex justify-center items-center'>
        <div className='relative'>
        <PacmanLoader color="#15387b" />
        </div>
    </div>
  )
}

export default LoadingSpinner