import { Link } from "react-router-dom";
import Header from "../componments/header";
import pp from "../logo192.png"
import { UserContext } from "../usercontext";
import { useContext, useState } from "react";
import { useEffect} from "react";

export default function ProfilePage(){
    const {userInfo} = useContext(UserContext);
    const[count,setCount] = useState(0)
    const[mangas,setMangas] = useState([])

    useEffect(()=>{
      if(count === 1){
        GetSaved(userInfo)
      }else{
        setCount(1)
      }
    },[userInfo])

    function GetSaved(ui){
      fetch(`http://localhost:4000/manga/save/getall/${ui.id}`)
      .then(response => response.json()).then(data => setMangas(data))
    }

    const username = userInfo?.usernameStabilazed;

    return(
        <>
            <Header />
            <main className="mt-24 container mx-auto  text-white">
                <div className="grid md:grid-cols-12 grid-cols-1 gap-6">
                    <div className="md:col-span-3 mt-4">
                        <div className="bg-white shadow-xl bg-opacity-5 backdrop-blur-sm text-3xl break-words font-mono p-4 rounded-3xl drop-shadow-lg ">
                            <img src={pp} alt="" className="w-max mx-auto rounded-full my-4 border p-4" />
                            <h1 className="text-5xl w-max mx-auto mt-4">{username}</h1>
                        </div>
                    </div>
                    <div className="md:col-span-9 bg-white my-4 shadow-xl bg-opacity-5 backdrop-blur-sm text-3xl break-words font-mono p-4 rounded-3xl drop-shadow-lg">
                        <h2 className="text-3xl w-max mx-auto">Kaydedilenler</h2>
                        <hr />
                        <div className="grid lg:grid-cols-6 md:grid-cols-4 grid-cols-2 mt-4 gap-4">
                          {mangas.length > 0 && mangas.map(manga =>( 
                            <Link to={`/manga/${manga.browser}`}>                                                    
                              <img src={"http://localhost:4000/Collection/"+manga.image} alt="" className="w-full lg:h-60 md:h-52 h-60 mx-auto rounded-xl shadow-xl" />
                              <p className="w-full text-center mx-auto text-lg break-words"> {manga.name} </p>
                            </Link>  
                          ))}
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}