import { Link } from "react-router-dom"

export default function Manga({name,desc,image,category}){
    return(
        <Link to={`/manga/${name}`}>
            <div className="p-4 bg-gray-800 w-max max-w-xs">
                <h1>{name}</h1>
                <h1>{desc}</h1>
                <div className="flex flex-wrap">
                    {category.length > 0 && category.map(ct =>(
                        <h1 key={ct} className="p-2"> {ct} </h1>
                    ))}
                </div>
                <img src={image} alt="" className="h-64 object-contain" />
            </div>
        </Link>
    )
}