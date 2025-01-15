import { useState } from "react";

const ContadorDoble = () => {
    // hooks
    const [friends, setFriends] = useState({
        Juan: 0,
        Carlos: 0,
        Maria: 0,
        
    });

    // variables


    // funciones
    function handlerClickLike(nombre, likes){
        if(likes > 0){
            setFriends((preValue)=> {return {...preValue, [nombre]: preValue[nombre]+likes}}
        )
      }else if(likes < 0 && friends[nombre] > 0){
        setFriends((preValue)=> {return {...preValue, [nombre]: preValue[nombre]+likes}}
        )
      }
    }

    function mediaLikes(){
        const likesTotales = Object.values(friends).reduce((a,b)=>a + b, 0);
        const amigos = Object.keys(friends).length;
        return amigos > 0 ? (likesTotales/amigos) : 0;
    }

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-gray-200 shadow-md rounded-md">
        <h1 className="text-2xl font-bold mb-5 text-center">
            Contador de likes de amigos
        </h1>
        <div className="text-center mt-4">
            <span>
                Juan tiene <strong>{friends.Juan}</strong> likes
            </span>
            <div className="flex justify-center gap-4 mt-4">
                <button className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
                onClick={()=>handlerClickLike("Juan",1)}>
                    Like 
                </button>
                <button className="bg-green-500 hover:bg-green-700 text-white px-4 py-2 rounded-md"
                onClick={()=>handlerClickLike("Juan",-1)}>
                    Dislike 
                </button>
            </div>
        </div>

        <div className="text-center mt-4">
            <span>
                Maria tiene <strong>{friends.Maria}</strong> likes
            </span>
            <div className="flex justify-center gap-4 mt-4">
                <button className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
                onClick={()=>handlerClickLike("Maria",1)}>
                    Like 
                </button>
                <button className="bg-green-500 hover:bg-green-700 text-white px-4 py-2 rounded-md"
                onClick={()=>handlerClickLike("Maria",-1)}>
                    Dislike 
                </button>
                
            </div>
        </div>

        <div className="text-center mt-4">
            <span>
                Carlos tiene <strong>{friends.Carlos}</strong> likes
            </span>
            <div className="flex justify-center gap-4 mt-4">
                <button className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
                onClick={()=>handlerClickLike("Carlos",1)}>
                    Like 
                </button>
                <button className="bg-green-500 hover:bg-green-700 text-white px-4 py-2 rounded-md"
                onClick={()=>handlerClickLike("Carlos",-1)}>
                    Dislike 
                </button>
                
            </div>
        </div>

        <div className="text-center mt-4">
            <p className="bg-black text-white px-4 py-2 rounded-md ">Media de likes: {mediaLikes()} </p>
        </div>
    </div>
  )
}

export default ContadorDoble;