import { useContext } from "react";
import { useEffect} from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../usercontext";

export default function Header(){

    const {setUserInfo,userInfo} = useContext(UserContext);
    useEffect(() =>{
      fetch('http://localhost:4000/profile', {
        credentials: 'include',
      }).then(response => {
        response.json().then(userInfo => {
          setUserInfo(userInfo);
        });
      });
    }, []);
  
    function logout() {
      fetch('http://localhost:4000/logout', {
        credentials: 'include',
        method: 'POST',
      }).then(
        setUserInfo(null)
      )
      ;
    }
  
    const username = userInfo?.username;

    return(
        <header className=' flex justify-between font-bold text-2xl text-white  p-4 bg-slate-800 '>
            <Link to="/" className="logo">MangBridge</Link>
            <nav className=' flex gap-4'>
                {username && (
                    <>
                        <div onClick={logout} className="logout cursor-pointer">Logout</div>
                    </>
                )}
                {!username && (
                    <>
                        <Link to="/login" className="login ">Login</Link>
                        <Link to="/register" className="register ">Register</Link>
                    </>
                )}
                <Link to="/add" className="logo">manga add</Link>
            </nav>
      </header>
    )
}