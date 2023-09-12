import { Link } from "react-router-dom"

export default function Popular({name,desc,image,browser}){
    return(
        <Link to={`/manga/${browser}`} className="mx-12 font-mono ">
            <div className="flex relative min-w-xl lg:ml-0 md:ml-0 ml-10">
                <img src={"http://localhost:4000/Collection/"+image} alt="" className="h-64 rounded-l-xl w-44 shadow-xl" />
                <div className="bg-white bg-opacity-5 shadow-xl overflow-hidden backdrop-blur-sm h-64 p-4 text-right w-56 drop-shadow-lg rounded-r-xl absolute md:left-3/4 left-1/2 ">
                    <h2 className="break-words text-xl"> {name} </h2>
                    <p className="break-words text-sm overflow-hidden h-40 text-slate-300"> {desc} </p>
                    <p className="text-slate-300">...</p>
                </div>
            </div>
        </Link>
    )
}