import { useEffect, useState } from "react"
import Header from "../componments/header"
import Manga from "../componments/manga"


export default function AllManga(){
    const [Mmanga, setManga] = useState([])
    const [page, setPage] = useState(1)
    const [total, setTotal] = useState("")
  
    useEffect( () => {
        fetch(`http://localhost:4000/manga/all/page?page=${"0"}`,{
        headers: {'Content-Type':'application/json'},
        method:"GET",
        credentials:"include"
        }).then(response => response.json())
        .then(mangas => {
          setManga(prevManga => prevManga.concat(mangas.all));
          setTotal(mangas.totalPages);
        })
    },[])

    function GetMore(){
        setPage(page+1)
        fetch(`http://localhost:4000/manga/all/page?page=${page.toString()}`,{
        headers: {'Content-Type':'application/json'},
        method:"GET",
        credentials:"include"
        }).then(response => (response.json()).then(mangas => {
            setManga(prevManga =>  [...prevManga, ...mangas.all]);
            setTotal(mangas.totalPages);
          }))

    }

    return(
        <main className=' fredoka text-white'>
            <Header />
            <h1 className="text-4xl md:text-6xl w-max mx-auto mt-24 font-bold">Bütün Mangalar</h1>
            <div className="container flex flex-wrap gap-y-4 my-12 mx-auto justify-center ">
                {Mmanga.length > 0 && Mmanga.map(manga =>(
            
                   <Manga key={manga._id} {...manga} />
            
                ))}
                
                
            </div>  
            <div className="flex justify-center my-8">
                {total > page &&(
                    <button onClick={GetMore} className="w-1/2 bg-white bg-opacity-5 backdrop-blur-sm border py-3 text-3xl break-words text-center fredoka p-4 rounded-3xl drop-shadow-lg">Daha Fazla</button>
                )}
            </div>
        </main>
    )
}