import { Link } from "react-router-dom"

export default function Lasttw({number,manga,fansub}){
    return(
        <Link to={`/manga/${manga.browser}`} className="flex fredoka text-white overflow-hidden h-52 sm:h-64">
            <img src={"http://localhost:4000/Collection/"+manga.image} alt="" className="rounded-l-2xl translate-x-6 h-52 sm:h-64 w-36 sm:w-44" />
            <div className="rounded-r-2xl bg-white bg-opacity-5 shadow-xl overflow-hidden backdrop-blur-sm p-4 text-right w-48 drop-shadow-lg -translate-x-6">
                <h2 className="break-words text-lg sm:text-xl"> {manga.name} </h2>
                <p className="break-words text-xl overflow-hidden my-2 text-slate-300"> Bölüm: {number} </p>
                <p className="break-words text-xl overflow-hidden my-2 text-slate-300"> Yükleyen: {fansub} </p>
            
            </div>
        </Link>
    )
}