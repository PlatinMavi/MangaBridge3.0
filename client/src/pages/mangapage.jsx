import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Header from "../componments/header"
import { Link } from "react-router-dom"
import { UserContext } from "../usercontext";
import { useContext } from "react";
import favicon from "../favicon.ico"
// import Manga from "../componments/manga"

export default function MangaPage(){
    const [Mmanga, setManga] = useState({})
    const [Chapter,setChapter] = useState([])
    const [Count, setCount] = useState(0) //chapter count
    const [Fansub,setFansub] = useState([])
    const [isSaved, setIsSaved] = useState(false)//check if saved
    const params = useParams()
    const {userInfo} = useContext(UserContext);
    const [cout,setCout] = useState(0)//prevent if saved running twice

    const [comments, setComments] = useState([])
    const [content,setContent] = useState("")

    useEffect(() => {

        async function check(userInfo) {
            await fetch(`http://localhost:4000/manga/${params.name}`, {
                credentials: "include",
                headers: { 'Content-Type': 'application/json' },
                })
                .then(response => response.json())
                .then(manga => {
                    setManga(manga);
                    chapterGetter(manga._id); // Call chapterGetter with the manga._id after setting the manga state
                    Check(manga)
                    CommentsGetter(manga._id)
                })
                .catch(error => {
                    console.error('Error fetching manga:', error);
                    // Handle the error if necessary
            });

            function Check(Mmanga){
                fetch(`http://localhost:4000/manga/check/${userInfo.id}&${Mmanga._id}`, {
                headers: { 'Content-Type': 'application/json' },
                }).then(response => response.json()).then(data => setIsSaved(data.issaved))
            }
        
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

            function CommentsGetter(mangaId){
                fetch(`http://localhost:4000/manga/comments/${mangaId}`, {
                    headers: { 'Content-Type': 'application/json' }})
                .then(response => response.json()).then(data => setComments(data))
            }
            
        }

        if(cout === 1){
            check(userInfo)
        }
        else{
            if(userInfo === ""){
                check()
            }
            setCout(1)
        }
        ;
    }, [userInfo]);

    useEffect(()=>{
        if(isSaved === true){
            document.getElementById("save").innerHTML = "Kaydedildi"
            document.getElementById("save").classList.add("bg-red-600")
            document.getElementById("save").classList.remove("bg-[#0b0c0f]")
        }
    },[isSaved])

    function Kaydet(userId,mangaId){
        fetch(`http://localhost:4000/manga/save/${userId}&${mangaId}`, {
            headers: { 'Content-Type': 'application/json' },
        }).then(res => res.json()).then(resstat => StyleChanger(resstat.issaved))
    }

    function StyleChanger(Status){
        console.log(Status)
        if (Status === true){
            document.getElementById("save").innerHTML = "Kaydedildi"
            document.getElementById("save").classList.add("bg-red-600")
            document.getElementById("save").classList.remove("bg-[#0b0c0f]")
        }else if(Status === false){
            document.getElementById("save").innerHTML = "Kaydet"
            document.getElementById("save").classList.remove("bg-red-600")
            document.getElementById("save").classList.add("bg-[#0b0c0f]")
        }
        
    }

    function SubmitComment(ev){
        const btn = document.getElementById("btnsend")
        btn.classList.add("disabled")
        ev.preventDefault()
        fetch("http://localhost:4000/manga/comments/add",{ 
            method:"POST",
            body: JSON.stringify({content:content,user:userInfo.id,manga:Mmanga._id}),
            headers: {'Content-Type':'application/json'},
            credentials: 'include',
        }).then(response => response.json()).then(data => setComments(data))
        btn.classList.remove("disabled")
    }

    const myStyle = {
        backgroundColor: '#0b0c0f',
        backgroundImage:
          'linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)',
        backgroundSize: '1em 1em',
    };

    function deletecomment(id){
        fetch("http://localhost:4000/manga/comments/delete",{ 
            method:"POST",
            body: JSON.stringify({id:id, manga:Mmanga._id}),
            headers: {'Content-Type':'application/json'},
            credentials: 'include',
        }).then(response => response.json()).then(data => setComments(data))
    }
    

    const username = userInfo?.usernameStabilazed;


    return(
        <div className="fredoka min-h-screen text-white">
            <Header />
            <div className="container mx-auto mt-24">
                <div className="grid gap-10 lg:grid-cols-9 grid-cols-1">
                    <div className="lg:col-span-2 lg:w-auto w-screen">
                        <div className=" bg-white shadow-xl bg-opacity-5 backdrop-blur-sm text-3xl break-words fredoka p-4 rounded-3xl drop-shadow-lg">
                            <img src={"http://localhost:4000/Collection/"+Mmanga.image} alt="" className="rounded-xl mx-auto"/>
                            <h3 className="w-max mx-auto mt-2">Kategoriler</h3>
                            <hr />
                            <div className="flex flex-wrap justify-center gap-4 my-4">
                            {Mmanga.category && Mmanga.category.map((category, index) => (
                                <h5 key={index} className="text-lg shadow-2xl">{category}</h5>
                            ))}
                            </div>
                            {username &&(<button onClick={()=> {Kaydet(userInfo.id,Mmanga._id)} } className="w-full rounded-xl text-xl p-2 bg-[#0b0c0f]" id="save">Kaydet</button>)}
                            {!username &&(<button disabled className="w-full rounded-xl text-lg p-2 bg-red-600">Kaydetmek için giriş yapınız</button>)}
                        </div>
                    </div>
                    <div className="lg:col-span-7 ">
                        <div className="bg-white shadow-xl bg-opacity-5 backdrop-blur-sm text-3xl break-words fredoka p-4 rounded-3xl drop-shadow-lg">
                            <h1 className="text-4xl"> 
                                {Mmanga.name}
                            </h1>
                            <hr />
                            <h3 className="text-xl">
                                Konusu: <br /> <span className="text-slate-300 text-lg">{Mmanga.desc}</span>
                            </h3>
                            <hr />
                            <div className="flex flex-wrap mt-2 gap-x-10 text-xl">
                                <h4 className=" ">Mevcut Bölüm Sayısı: <span className="from-purple-600 to-teal-600 bg-gradient-to-r bg-clip-text text-transparent font-bold text-[#867865]">{Count}</span></h4>
                                <div className="flex flex-wrap gap-x-4" >Çevirenler: 
                                    {Fansub && Fansub.map((Fansubs, index) => (
                                        <h4 key={index} className="from-purple-600 to-teal-600 bg-gradient-to-r bg-clip-text text-transparent font-bold text-[#867865]">{Fansubs} </h4>
                                    ))}
                                </div>
                            </div>
                            <h5 className="text-xl mt-4"> 
                                Görüntülenme: <span className="from-purple-600 to-teal-600 bg-gradient-to-r bg-clip-text text-transparent font-bold text-[#867865]">{Mmanga.view}</span>
                            </h5>
                            <hr />
                            <div className="grid lg:grid-cols-4 grid-cols-2 gap-6 ">
                                {Fansub && Fansub.map((Fansubs, index) => (
                                    <div key={index} className="font-bold text-center mt-6 rounded-2xl p-2 h-96 overflow-y-scroll no-scrollbar" style={myStyle}>
                                        <h4 className="text-xl md:text-2xl">{Fansubs}</h4> <hr />
                                        {Chapter.filter((chapter) => chapter.fansub === Fansubs).map(
                                            (chapter, index) => (
                                                <Link to={chapter.url} key={index}>
                                                    <div className="text-2xl w-full p-2 my-2 bg-white shadow-xl bg-opacity-5 backdrop-blur-sm drop-shadow-lg rounded-xl"  >{chapter.number}. Bölüm</div>
                                                </Link>
                                            )
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="comments bg-white shadow-xl bg-opacity-5 mt-8 backdrop-blur-sm text-3xl break-words fredoka p-4 rounded-3xl drop-shadow-lg">
                            {username && (
                                <form onSubmit={SubmitComment} className="flex flex-wrap text-lg w-full">
                                    <input type="text" className="bg-transparent max-w-full border mr-2 p-2 flex-grow rounded-xl " placeholder="Yorum yap..." value={content} onChange={ev => setContent(ev.target.value)} />
                                    <button className="border p-2 rounded-xl" id="btnsend">Gönder</button>
                                    <h3 className="mx-2 text-2xl mt-1 flex gap-1"> <img src={favicon} alt="" className="rounded-full w-10 h-10 border p-1" /> <span className="">{username}</span> </h3>
                                </form>
                            )}
                            {!username && (
                                <>
                                    <h3 className="text-center text-3xl font-bold">Yorum yapmak için giriş yapınız...</h3>        
                                </>
                            )}
                            
                        </div>

                        <div className="comments bg-white shadow-xl bg-opacity-5 my-8 backdrop-blur-sm text-3xl break-words fredoka  rounded-3xl drop-shadow-lg">
                                {comments && comments.map((content, index) => (
                                    <div className="p-4 flex border rounded-2xl mt-2 border-slate-500 flex-wrap">
                                        
                                        <h3 className="mx-2 text-2xl mt-1 flex gap-1">
                                            {content.user.username === username && (
                                                <button onClick={()=>{deletecomment(content._id)}}>
                                                    <svg className="mt-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"/>
                                                        <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"/>
                                                    </svg>
                                                </button>
                                            )}
                                            <img src={favicon} alt="" className="rounded-full w-8 h-8 border p-1" /> <span className="">{content.user.username} :</span>
                                        </h3>
                                        <p key={index} className="text-lg mt-2 shadow-2xl">{content.content}</p>
                                        
                                    </div>
                                ))}

                        </div>

                    </div>
                </div>
            </div>
        </div>
        
    )
}