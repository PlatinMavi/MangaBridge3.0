import { Link } from "react-router-dom"

export default function Lasttw({number,manga,fansub}){
    return(
        <Link to={`/manga/${manga.browser}`} className="mx-12 font-mono">
            <div className="flex relative min-w-xl">
                <img src={manga.image} alt="" className="h-64 rounded-l-xl w-44" />
                <div className="bg-white bg-opacity-5 backdrop-blur-sm h-64 p-4 text-right w-56 drop-shadow-lg rounded-r-xl absolute left-3/4">
                    <h2 className="break-words text-xl"> {manga.name} </h2>
                    <p className="break-words text-xl overflow-hidden my-2 text-slate-300"> Bölüm: {number} </p>
                    <p className="break-words text-xl overflow-hidden my-2 text-slate-300"> Yükleyen: {fansub} </p>
                
                </div>
            </div>
        </Link>
    )
}