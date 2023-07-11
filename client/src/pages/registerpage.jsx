import { useState } from "react"
import Header from "../componments/header"
import { Navigate } from "react-router-dom"

export default function RegisterPage(){
    const [username, setUsername] = useState("")
    const [password, setPassword]= useState("")
    const [redirect, setRedirect] = useState(false)

    async function register(ev){
        ev.preventDefault()
        const response = await fetch("http://localhost:4000/register",{
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
        <main className=' text-white h-screen'>
          <Header/>
          <div className="container mt-24 mx-auto ">
            <form onSubmit={register} className="w-max mx-auto p-12 flex flex-col gap-4 bg-slate-800 rounded-3xl">
                <h1 className="font-bold text-3xl text-center">Register</h1>

                <input type="text" placeholder="Username" className="p-2 bg-slate-900 rounded-xl"
                value={username} onChange={ev => setUsername(ev.target.value)}/>

                <input type="password" placeholder="Password" className="p-2 bg-slate-900 rounded-xl" 
                value={password} onChange={ev => setPassword(ev.target.value)}/>

                <button type="submit" className="p-2 bg-slate-900 rounded-2xl">Submit</button>
            </form>
          </div>
          
        </main>
    )
}