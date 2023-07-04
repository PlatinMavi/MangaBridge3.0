import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Header from "../componments/header"

export default function MangaPage(){
    const [Manga, setManga] = useState("")
    const params = useParams()
    useEffect(()=>{
        fetch(`http://localhost:4000/manga/${params.name}`,{credentials:"include",headers: {'Content-Type':'application/json'},}).then(
            response => response.json().then(
                manga => setManga(manga)
            )
        )
    },[])

    return(
        <div className="bg-slate-900 min-h-screen text-white">
            <Header />
            <h1>{Manga.name}</h1>
        </div>
        
    )
}
