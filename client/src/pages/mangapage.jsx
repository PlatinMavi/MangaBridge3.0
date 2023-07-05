import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Header from "../componments/header"
// import Manga from "../componments/manga"

export default function MangaPage(){
    const [Mmanga, setManga] = useState({})
    const [Chapter,setChapter] = useState([])
    const params = useParams()
    useEffect(() => {
        fetch(`http://localhost:4000/manga/${params.name}`, {
            credentials: "include",
            headers: { 'Content-Type': 'application/json' },
        })
            .then(response => response.json())
            .then(manga => {
                setManga(manga);
                chapterGetter(manga._id); // Call chapterGetter with the manga._id after setting the manga state
            })
            .catch(error => {
                console.error('Error fetching manga:', error);
                // Handle the error if necessary
            });
    }, []);
    
    function chapterGetter(mangaId) {
        fetch(`http://localhost:4000/chapter/relevant/${mangaId}`, {
            credentials: "include",
            headers: { 'Content-Type': 'application/json' },
        })
            .then(response => response.json())
            .then(chapter => {
                setChapter(chapter);
            })
            .catch(error => {
                console.error('Error fetching chapters:', error);
                // Handle the error if necessary
            });
    }

    return(
        <div className="bg-slate-900 min-h-screen text-white">
            <Header />
            <div className="m-8">
                {/* <Manga {...Mmanga} /> */}
                <h1>{Mmanga.name}</h1>
            </div>
            <div>
                {Chapter.map((c) => (
                    <h1 key={c._id}>
                        {c.fansub}, {c.number}
                    </h1>
                ))}
            </div>
        </div>
        
    )
}
