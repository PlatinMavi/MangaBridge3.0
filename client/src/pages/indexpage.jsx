import { useEffect, useState } from "react"
import Header from "../componments/header"
import Manga from "../componments/manga"

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
              <div class="fire">
                <div class="fire-left">
                  <div class="main-fire"></div>
                  <div class="particle-fire"></div>
                </div>
                <div class="fire-center">
                  <div class="main-fire"></div>
                  <div class="particle-fire"></div>
                </div>
                <div class="fire-right">
                  <div class="main-fire"></div>
                  <div class="particle-fire"></div>
                </div>
                <div class="fire-bottom">
                  <div class="main-fire"></div>
                </div>
              </div>
            </div>
            
            <div className="ml-16">
              <h1 className="text-center text-3xl mb-2">Mangabridgede popüler</h1>
              <div className="max-w-2xl ">
                
                <div className="grid grid-cols-2 gap-x-24 -translate-x-20 gap-y-4">
                  {topmanga.length > 0 && topmanga.map(manga =>(
                  
                    <Manga key={manga._id} {...manga} />
                
                  ))}
                </div>
                
              </div>
            </div>

          </div>  
      </main>
  )
}