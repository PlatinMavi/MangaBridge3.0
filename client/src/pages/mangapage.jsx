import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Header from "../componments/header"
import { Link } from "react-router-dom"
// import Manga from "../componments/manga"

export default function MangaPage(){
    const [Mmanga, setManga] = useState({})
    const [Chapter,setChapter] = useState([])
    const [Count, setCount] = useState(0)
    const [Fansub,setFansub] = useState([])
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
                setChapter(chapter.chapters);
                setCount(chapter.count)
                setFansub(chapter.fansubs)
            })
            .catch(error => {
                console.error('Error fetching chapters:', error);
                // Handle the error if necessary
            });
    }

    const myStyle = {
        backgroundColor: 'rgb(15, 23, 42)',
        backgroundImage:
          'linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)',
        backgroundSize: '1em 1em',
      };


    return(
        <div className="font-mono min-h-screen text-white">
            <Header />
            <div className="container mx-auto mt-12">
                <div className="grid gap-10 grid-cols-9">
                    <div className="col-span-2">
                        <div className=" bg-white shadow-xl bg-opacity-5 backdrop-blur-sm text-3xl break-words font-mono p-4 rounded-3xl drop-shadow-lg">
                            <img src={Mmanga.image} alt="" className="rounded-xl"/>
                            <h3 className="w-max mx-auto mt-2">Kategoriler</h3>
                            <hr />
                            <div className="flex flex-wrap justify-center gap-4 my-4">
                            {Mmanga.category && Mmanga.category.map((category, index) => (
                                <h5 key={index} className="text-lg shadow-2xl">{category}</h5>
                            ))}
                            </div>
                            <button className="w-full rounded-xl text-xl p-2 bg-slate-900">Kaydet</button>
                        </div>
                    </div>
                    <div className="col-span-7 bg-white shadow-xl bg-opacity-5 backdrop-blur-sm text-3xl break-words font-mono p-4 rounded-3xl drop-shadow-lg">
                        <h1 className="text-4xl"> 
                            {Mmanga.name}
                        </h1>
                        <hr />
                        <h3 className="text-xl">
                            Konusu: <br /> <span className="text-slate-300 text-lg">{Mmanga.desc}</span>
                        </h3>
                        <hr />
                        <div className="flex flex-wrap mt-2 gap-x-10 text-xl">
                            <h4 className=" ">Mevcut Bölüm Sayısı: <span className="from-purple-600 to-teal-600 bg-gradient-to-r bg-clip-text text-transparent font-bold">{Count}</span></h4>
                            <div className="flex gap-4" >Çevirenler: 
                                {Fansub && Fansub.map((Fansubs, index) => (
                                    <h4 key={index} className="from-purple-600 to-teal-600 bg-gradient-to-r bg-clip-text text-transparent font-bold">{Fansubs} </h4>
                                ))}
                            </div>
                        </div>
                        <h5 className="text-xl mt-4"> 
                            Görüntülenme: <span className="from-purple-600 to-teal-600 bg-gradient-to-r bg-clip-text text-transparent font-bold">{Mmanga.view}</span>
                        </h5>
                        <hr />
                        <div className="grid grid-cols-4 gap-6">
                            {Fansub && Fansub.map((Fansubs, index) => (
                                <div key={index} className="font-bold text-center mt-6 rounded-2xl p-2 h-96 overflow-y-scroll no-scrollbar" style={myStyle}>
                                    <h4>{Fansubs}</h4> <hr />
                                    {Chapter.filter((chapter) => chapter.fansub === Fansubs).map(
                                        (chapter, index) => (
                                            <Link to={chapter.url}>
                                                <div className="text-2xl w-full p-2 my-2 bg-white shadow-xl bg-opacity-5 backdrop-blur-sm drop-shadow-lg rounded-xl"  key={index}>{chapter.number}. Bölüm</div>
                                            </Link>
                                        )
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}