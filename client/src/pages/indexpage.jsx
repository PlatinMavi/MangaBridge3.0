import { useEffect, useState } from "react"
import Header from "../componments/header"
import Manga from "../componments/manga"
import stack from "../stack.svg"
import { Link } from "react-router-dom"


// {Mmanga.length > 0 && Mmanga.map(manga =>(
            
//   <Manga key={manga._id} {...manga} />

// ))}


export default function IndexPage(){
  const [topmanga, settopManga] = useState([])
  
  useEffect( () => {
      fetch("http://localhost:4000/manga/topfive",{
      headers: {'Content-Type':'application/json'},
      method:"GET",
      credentials:"include"
      }).then(response => response.json().then(mangas => settopManga(mangas)))
    },[])

    // {topmanga.length > 0 && topmanga.map(manga =>(
            
    //   <Manga key={manga._id} {...manga} />
    
    // ))}
    
  return(

      <main className=" text-white">
        <Header />
          <div className="container flex flex-wrap my-12 mx-auto font-mono ">
            <div className="w-max">
              
              <h1 className="text-8xl font-bold from-purple-600 to-teal-600 bg-gradient-to-r bg-clip-text text-transparent">MangaBridge</h1><br /><h2 className="text-5xl max-w-2xl">Bütün Mangalarınızın Buluştuğu yer</h2>
              
              <div className="fire">
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
           
            <div className="ml-16">
              <h1 className="text-center text-3xl mb-2">Mangabridgede Popüler</h1>
              <div className="max-w-2xl ">
                <div className="grid grid-cols-2 gap-x-24 -translate-x-20 gap-y-4">
                  {topmanga.length > 0 && topmanga.map(manga =>(
                  
                    <Manga key={manga._id} {...manga} />
                
                  ))}
                </div>
              </div>
            </div>
          
          </div>  

          {/* Last uploaded mangas */}
          <div className=" ">
            <div className="container p-4 mx-auto mt-12 ">
                <h3 className="text-4xl font-mono font-bold my-4">Son Yüklemeler:</h3>
                <div className="flex flex-wrap -translate-x-16 gap-y-4 gap-x-24">
                  <Link to="/chapter" className="bg-white bg-opacity-5 backdrop-blur-sm h-64 text-3xl break-words text-center font-mono p-4 rounded-3xl w-80  drop-shadow-lg translate-x-16" >
                    <p className="mt-12">Bana Tüm Son Yüklemeleri Göster</p>
                  </Link>
                  {topmanga.length > 0 && topmanga.map(manga =>(
                    
                    <Manga key={manga._id} {...manga} />
                
                  ))}
                </div>
            </div>
          </div>

      </main>
  )
}