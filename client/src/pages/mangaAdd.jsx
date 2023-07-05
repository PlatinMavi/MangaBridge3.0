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
    const [number, setNumber] = useState("")
    const [Url,setUrl] = useState("")
    const [Manga, setManga] = useState("")
    const [Fansub, setFansub] = useState("")
    const [mangaList, setMangaList] = useState([]);
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

    useEffect(() => {
        // Fetch the manga list from the backend when the component mounts
        fetchMangaList();
      }, []);
      
    const fetchMangaList = async () => {
        try {
          const response = await fetch("http://localhost:4000/manga/all"); // Adjust the endpoint URL to your manga fetch route
          if (response.ok) {
            const data = await response.json();
            setMangaList(data); // Assuming the response contains an array of manga objects with _id and name fields
          }
        } catch (error) {
          console.error("Error fetching manga list:", error);
        }
      };
    
    async function submitManga(ev){
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

    async function submitChapter(ev){
        ev.preventDefault()
        const response = await fetch("http://localhost:4000/chapter/add",{ 
            method:"POST",
            body: JSON.stringify({number,Url,Manga,Fansub}),
            headers: {'Content-Type':'application/json'},
            credentials: 'include',
        })
        if(response.ok){
            alert("ok")
        }else{
            alert("ops")  
        }
    }
    

    const handleMangaSelect = (selectedMangaId) => {
        setManga(selectedMangaId);
      };

    if (redirect) {
        return <Navigate to={'/'} />}

    return(
        <div className="min-h-screen bg-gray-900">
            <Header/>
            <form onSubmit={submitManga} className="flex gap-4 mx-auto w-max mt-12" >
                <input type="text" placeholder="Name" value={Name} onChange={ev => setName(ev.target.value)}/>
                <input type="text" placeholder="image" value={Img} onChange={ev => setImg(ev.target.value)}/>
                <input type="text" placeholder="description" value={Desc} onChange={ev => setDesc(ev.target.value)}/>
                <input type="text" placeholder="category" value={Category} onChange={ev => setCategory(ev.target.value)}/>
                <input type="text" placeholder="browser" value={Browser} onChange={ev => setBrowser(ev.target.value)}/>
                <button type="submit" className="bg-gray-800 text-white p-4">Submit</button>
            </form>

            <form onSubmit={submitChapter} className="flex gap-4 mx-auto w-max mt-12" >
                <input type="number" placeholder="Number" value={number} onChange={ev => setNumber(ev.target.value)}/>
                <input type="text" placeholder="Url" value={Url} onChange={ev => setUrl(ev.target.value)}/>
                <select value={Manga} onChange={(ev) => handleMangaSelect(ev.target.value)}>
                    <option value="">Select Manga</option>
                    {mangaList.map((manga) => (
                        <option key={manga._id} value={manga._id}>
                        {manga.name}
                        </option>
                    ))}
                </select>
                <input type="text" placeholder="Fansub" value={Fansub} onChange={ev => setFansub(ev.target.value)}/>
                <button type="submit" className="bg-gray-800 text-white p-4">Submit</button>
            </form>
        </div>
    )
}