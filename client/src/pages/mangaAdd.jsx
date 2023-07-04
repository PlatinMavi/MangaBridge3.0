import { useState } from "react"
import Header from "../componments/header"

export default function MangaAdd(){
    const [Name,setName] = useState("")
    const [Img,setImg] = useState("")
    const [Desc,setDesc] = useState("")
    const [Category,setCategory] = useState("")
    const Categorys = Category.split(" ")
    
    async function submit(ev){
        ev.preventDefault()
        const response = await fetch("http://localhost:4000/manga/add",{ 
            method:"POST",
            body: JSON.stringify({Name, Img, Desc,Categorys}),
            headers: {'Content-Type':'application/json'},
            credentials: 'include',
        })
        if(response.ok){
            alert("ok")
        }else{
            alert("ops")
        }
    }

    return(
        <>
            <Header/>
            <form onSubmit={submit} >
                <input type="text" placeholder="Name" value={Name} onChange={ev => setName(ev.target.value)}/>
                <input type="text" placeholder="image" value={Img} onChange={ev => setImg(ev.target.value)}/>
                <input type="text" placeholder="description" value={Desc} onChange={ev => setDesc(ev.target.value)}/>
                <input type="text" placeholder="category" value={Category} onChange={ev => setCategory(ev.target.value)}/>
                <button type="submit">Submit</button>
            </form>
        </>
    )
}