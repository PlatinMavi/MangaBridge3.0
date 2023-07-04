import { useState,useEffect } from "react"
import Header from "../componments/header"
import { UserContext } from "../usercontext";
import { Navigate } from "react-router-dom"
import { useContext } from "react";

export default function MangaAdd(){
    const [Name,setName] = useState("")
    const [Img,setImg] = useState("")
    const [Desc,setDesc] = useState("")
    const [Category,setCategory] = useState("")
    const [Browser, setBrowser] = useState("")
    const [redirect, setRedirect] = useState(false)
    const Categorys = Category.split(" ")

    const {setUserInfo} = useContext(UserContext);
    useEffect(() =>{
      fetch('http://localhost:4000/profile', {
        credentials: 'include',
        headers: {'Content-Type':'application/json'},
      }).then(response => {
        response.json().then(userinfo => {
          setUserInfo(userinfo);
          if(!(userinfo.usernameStabilazed==="admin")){setRedirect(true)}
          
        });
      });
    }, []);
    
    async function submit(ev){
        ev.preventDefault()
        const response = await fetch("http://localhost:4000/manga/add",{ 
            method:"POST",
            body: JSON.stringify({Name, Img, Desc,Categorys,Browser}),
            headers: {'Content-Type':'application/json'},
            credentials: 'include',
        })
        if(response.ok){
            alert("ok")
        }else{
            alert("ops")
            
        }
    }

    if (redirect) {
        return <Navigate to={'/'} />}

    return(
        <div className="min-h-screen bg-gray-900">
            <Header/>
            <form onSubmit={submit} className="flex gap-4 mx-auto w-max mt-12" >
                <input type="text" placeholder="Name" value={Name} onChange={ev => setName(ev.target.value)}/>
                <input type="text" placeholder="image" value={Img} onChange={ev => setImg(ev.target.value)}/>
                <input type="text" placeholder="description" value={Desc} onChange={ev => setDesc(ev.target.value)}/>
                <input type="text" placeholder="category" value={Category} onChange={ev => setCategory(ev.target.value)}/>
                <input type="text" placeholder="browser" value={Browser} onChange={ev => setBrowser(ev.target.value)}/>
                <button type="submit" className="bg-gray-800 text-white p-4">Submit</button>
            </form>
        </div>
    )
}