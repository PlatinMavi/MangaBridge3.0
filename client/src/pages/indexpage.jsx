import { useEffect, useState } from "react"
import Header from "../componments/header"
import Manga from "../componments/manga"


export default function IndexPage(){
  const [manga, setManga] = useState([])
  
  useEffect( () => {
      fetch("http://localhost:4000/manga/all",{
      headers: {'Content-Type':'application/json'},
      method:"GET",
      credentials:"include"
      }).then(response => response.json().then(mangas => setManga(mangas)))
    },[])
    
  return(
      <main className='bg-slate-900 min h-screen text-white'>
        <Header />
        <div className="container flex gap-4 my-12 mx-auto ">
          {manga.length > 0 && manga.map(manga =>(
            
              <Manga key={manga} {...manga} />
            
          ))}
        </div>  
      </main>
  )
}