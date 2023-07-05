import { useEffect, useState } from "react"
import Header from "../componments/header"
import Manga from "../componments/manga"

// {Mmanga.length > 0 && Mmanga.map(manga =>(
            
//   <Manga key={manga._id} {...manga} />

// ))}


export default function IndexPage(){
  const [topmanga, settopManga] = useState([])
  
  useEffect( () => {
      fetch("http://localhost:4000/manga/all",{
      headers: {'Content-Type':'application/json'},
      method:"GET",
      credentials:"include"
      }).then(response => response.json().then(mangas => settopManga(mangas)))
    },[])
    
  return(

      <main className=" text-white">
        <Header />
        <div className="container flex flex-wrap gap-24 my-12 mx-auto ">
        {topmanga.length > 0 && topmanga.map(manga =>(
            
            <Manga key={manga._id} {...manga} />
          
          ))}
        </div>  
      </main>
  )
}