import { useEffect, useState } from "react"
import Header from "../componments/header"
import Manga from "../componments/manga"
import { Link } from "react-router-dom"
import Lasttw from "../componments/lasttw"
import Popular from "../componments/popular"

export default function IndexPage(){
  const [topmanga, settopManga] = useState([])
  const [lasttw, setLasttw] = useState([])
  
  useEffect( () => {
    fetch("http://localhost:4000/manga/topfive",{
    headers: {'Content-Type':'application/json'},
    method:"GET",
    credentials:"include"
    }).then(response => response.json().then(mangas => settopManga(mangas)))
  },[])

  useEffect( () => {
    fetch("http://localhost:4000/chapter/lasttw",{
    headers: {'Content-Type':'application/json'},
    method:"GET",
    credentials:"include"
    }).then(response => response.json().then(chapters => setLasttw(chapters)))
  },[])

    
  return(

      <main className=" text-white">
        <Header />
          <div className="container my-24 mx-auto fredoka ">
            <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-center">
              <div className="w-max">
                {/* from-purple-600 to-teal-600 bg-gradient-to-r bg-clip-text text-transparent */}
                <h1 className="lg:text-8xl md:text-6xl text-5xl font-bold  text-[#867865]">MangaBridge</h1><br /><h2 className=" md:text-5xl text-3xl break-words max-w-2xl">Bütün Mangalarınızın <br />Buluştuğu yer</h2>
                <div className=" mt-24 lg:mt-32 -translate-x-6">
                  <div className="fire translate-x-5">
                    <div className="fire-left">
                      <div className="main-fire"></div>
                      <div className="particle-fire"></div>
                    </div>
                    <div className="fire-center">
                      <div className="main-fire"></div>
                      <div className="particle-fire"></div>
                    </div>
                    <div className="fire-right">
                      <div className="main-fire"></div>
                      <div className="particle-fire"></div>
                    </div>
                    <div className="fire-bottom">
                      <div className="main-fire"></div>
                    </div>
                  </div>
                </div>
              </div>
            
              <div className="ml-0 lg:ml-20 lg:mt-0 mt-32">
                <h1 className="text-center break-words w-3/4 mx-auto text-3xl mb-2">Mangabridgede En Çok Okunanlar</h1>
                <div className="max-w-2xl">
                  <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center gap-y-4">
                    {topmanga.length > 0 && topmanga.map(manga =>(
                    
                      <Popular key={manga._id} {...manga} />
                  
                    ))}
                  </div>
                </div>
              </div>
            
            </div>
          </div>  

          {/* Last uploaded mangas */}
          <div className=" ">
            <div className=" container p-4 mx-auto mt-12 ">
                <h3 className="text-4xl fredoka text-center sm:text-left font-bold my-4">Son Yüklemeler:</h3>
                <div className="flex flex-wrap justify-center gap-y-4">
                  <Link className="scale-90 sm:scale-100" to="/chapter">
                    <div  className="rounded-2xl bg-white bg-opacity-5 shadow-xl overflow-hidden backdrop-blur-sm p-4 text-right drop-shadow-lg mx-6 h-64" style={{width:320}}>
                      <p className=" text-center text-3xl mt-16 fredoka">Bana Tüm Son Yüklemeleri Göster</p>
                    </div>
                  </Link>
                  {lasttw.length > 0 && lasttw.map(manga =>(
                    
                    <Lasttw key={manga._id} {...manga} />
                
                  ))}
                </div>
            </div>
          </div>

      </main>
  )
}