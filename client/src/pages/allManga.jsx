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
        <main className='bg-slate-900 min h-screen text-white'>
            <Header />
            <div className="container flex gap-4 my-12 mx-auto ">
                {Mmanga.length > 0 && Mmanga.map(manga =>(
            
                   <Manga key={manga._id} {...manga} />
            
                ))}
                {total > page &&(
                    <button onClick={GetMore}>Load more</button>
                )}
                
            </div>  
        </main>
    )
}