import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

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
        <h1>{Manga.name}</h1>
    )
}
