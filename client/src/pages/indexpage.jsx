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
          <div className="container flex flex-wrap lg:pl-10 md:pl-10 pl-4 my-24 mx-auto font-mono ">
            <div className="w-max">
              
              <h1 className="lg:text-8xl md:text-6xl text-6xl font-bold from-purple-600 to-teal-600 bg-gradient-to-r bg-clip-text text-transparent">MangaBridge</h1><br /><h2 className="lg:text-5xl md:text-5xl text-4xl max-w-2xl">Bütün Mangalarınızın Buluştuğu yer</h2>
              <div className="">
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
           
            <div className="lg:ml-16 lg:mt-0 mt-80">
              <h1 className="text-center text-3xl mb-2">Mangabridgede En Çok Okunanlar</h1>
              <div className="max-w-2xl ">
                <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-x-24 -translate-x-20 gap-y-4">
                  {topmanga.length > 0 && topmanga.map(manga =>(
                  
                    <Popular key={manga._id} {...manga} />
                
                  ))}
                </div>
              </div>
            </div>
          
          </div>  

          {/* Last uploaded mangas */}
          <div className=" ">
            <div className="container md:pl-10 lg:pl-10 pl-9 p-4 mx-auto mt-24 ">
                <h3 className="text-4xl font-mono font-bold my-4">Son Yüklemeler:</h3>
                <div className="flex flex-wrap -translate-x-16 gap-y-4 gap-x-24">
                  <Link className="-translate-x-2 md:-translate-x-0 scale-95 md:scale-100" style={{width:272}} to="/chapter">
                    <div  className="bg-white shadow-xl bg-opacity-5 backdrop-blur-xs h-64 text-3xl break-words text-center font-mono p-4 rounded-3xl drop-shadow-lg translate-x-12" style={{width:356}}>
                      <p className="mt-12">Bana Tüm Son Yüklemeleri Göster</p>
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