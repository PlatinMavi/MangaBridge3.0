import { useEffect, useState } from "react"
import Header from "../componments/header"
import Lasttw from "../componments/lasttw"

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
        <main className='font-mono min-h-screen text-white'>
            <Header />
            <h1 className="text-4xl md:text-6xl w-max mx-auto mt-24 font-bold">En Son Eklenenler</h1>
            <div className="container flex flex-wrap gap-x-24 md:-translate-x-0 -translate-x-7 gap-y-4 my-12 mx-auto ">
                {Chapter.length > 0 && Chapter.map(c =>(
            
                   <Lasttw key={c._id} {...c} />
            
                ))}
            </div>
            <div className="flex justify-center my-8">
                {total > page &&(
                    <button onClick={GetMore} className="w-1/2 bg-white bg-opacity-5 backdrop-blur-sm border py-3 text-3xl break-words text-center font-mono p-4 rounded-3xl drop-shadow-lg">Daha Fazla</button>
                )}
            </div>
            
        </main>
    )
}