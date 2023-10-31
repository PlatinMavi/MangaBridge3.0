import { useState } from "react"
import Header from "../componments/header"
import { Navigate } from "react-router-dom"

export default function RegisterPage(){
    const [username, setUsername] = useState("")
    const [password, setPassword]= useState("")
    const [redirect, setRedirect] = useState(false)

    async function register(ev){
        ev.preventDefault()
        const response = await fetch("http://localhost:4000/user/register",{
            method:"POST",
            body: JSON.stringify({username, password}),
            headers: {"Content-Type":"application/json"}
        })
        if (response.status === 400){
            alert("registration failed")
        }else{
            setRedirect(true)
        }
    }

    if (redirect) {
        return <Navigate to={'/login'} />}

    return(
        <main className='fredoka text-white h-screen'>
          <Header/>
          <div className="container mt-24 mx-auto ">
            <form onSubmit={register} className="w-max mx-auto p-12 flex flex-col gap-4 border border-white rounded-3xl">
                <h1 className="font-bold text-3xl text-center">Kayıt Ol</h1>

                <input type="text" placeholder="Kullanıcı Adı" className="p-2 bg-transparent border border-white rounded-xl"
                value={username} onChange={ev => setUsername(ev.target.value)}/>

                <input type="password" placeholder="Şifre" className="p-2 bg-transparent border border-white rounded-xl" 
                value={password} onChange={ev => setPassword(ev.target.value)}/>

                <button type="submit" className="p-2 bg-black border border-white rounded-2xl">Kayıt Ol</button>
            </form>
          </div>
          
        </main>
    )
}