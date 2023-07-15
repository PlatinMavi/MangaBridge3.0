import { useContext } from "react";
import { useEffect} from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../usercontext";
import SearchBar from "./search";
import favicon from "../favicon.ico"

export default function Header(){

    const {setUserInfo,userInfo} = useContext(UserContext);
    useEffect(() =>{
      fetch('http://localhost:4000/profile', {
        credentials: 'include',
        headers: {'Content-Type':'application/json'},
      }).then(response => {
        response.json().then(userinfo => {
          setUserInfo(userinfo);
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
  
    const username = userInfo?.usernameStabilazed;

    return(
        <header className=' flex justify-between font-bold text-xl w-full z-50 text-white fixed top-0 p-4 bg-white bg-opacity-5 backdrop-blur-sm drop-shadow-lg font-mono '>
            <Link to="/" className="logo">MangaBridge</Link>
            <nav className=' flex gap-4'>
              

              <Link to="/manga" className="border px-2 rounded-xl">Seriler</Link>
              <Link to="/chapter" className="border px-2 rounded-xl">Yeni Eklenenler</Link>
              <SearchBar/>

                {username && (
                    <>
                        <div onClick={logout} className="logout cursor-pointer">Çıkış Yap</div>
                        <Link to={"/profile"} className="profile flex gap-2">{username} <img src={favicon} alt="" className="rounded-full w-8 h-8 border p-1" /> </Link>
                    </>
                )}
                {!username && (
                    <>
                        <Link to="/login" className="login ">Giriş Yap</Link>
                        <Link to="/register" className="register ">Kayıt Ol</Link>
                        
                    </>
                )}
                {username==="admin" && (
                    <>
                        <Link to="/add" className="logo">Admin</Link>
                    </>
                )}
                
                

            </nav>
      </header>
    )
}