import { useEffect, useState } from "react"
import Header from "../componments/header"

export default function AllChapter(){
    const [Chapter, setChapter] = useState([])
    const [page, setPage] = useState(1)
    const [total, setTotal] = useState("")
  
    useEffect( () => {
        fetch(`http://localhost:4000/chapter/lastup?page=${"0"}`,{
        headers: {'Content-Type':'application/json'},
        method:"GET",
        credentials:"include"
        }).then(response => response.json())
        .then(chapters => {
          setChapter(prevChapter => prevChapter.concat(chapters.all));
          setTotal(chapters.totalPages);
        })
    },[])

    function GetMore(){
        setPage(page+1)
        fetch(`http://localhost:4000/chapter/lastup?page=${page.toString()}`,{
        headers: {'Content-Type':'application/json'},
        method:"GET",
        credentials:"include"
        }).then(response => (response.json()).then(chapters => {
            setChapter(prevChapter =>  [...prevChapter, ...chapters.all]);
            setTotal(chapters.totalPages);
          }))

    }

    return(
        <main className='bg-slate-900 min h-screen text-white'>
            <Header />
            <div className="container flex gap-4 my-12 mx-auto ">
                {Chapter.length > 0 && Chapter.map(c =>(
            
                   <h1>{c.number}</h1>
            
                ))}
                {total > page &&(
                    <button onClick={GetMore}>Load more</button>
                )}
                
            </div>  
        </main>
    )
}