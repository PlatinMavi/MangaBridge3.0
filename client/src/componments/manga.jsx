import { Link } from "react-router-dom"

export default function Manga({_id,name,desc,image,category,browser}){
    return(
        <Link to={`/manga/${browser}`} className="mx-12 font-mono">
            <div className="flex relative w-max min-w-xl">
                <img src={image} alt="" className="h-64 rounded-l-xl" />
                <div className="bg-white bg-opacity-5 backdrop-blur-sm h-64 p-4 text-right w-56 drop-shadow-lg rounded-r-xl absolute left-3/4">
                    <h2 className="break-words text-xl"> {name} </h2>
                    <p className="break-words text-sm overflow-hidden h-40 text-slate-300"> {desc} </p>
                    <p className="text-slate-300">...</p>
                </div>
            </div>
        </Link>
    )
}