import { useContext } from "react";
import { useEffect} from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../usercontext";
import SearchBar from "./search";

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
        <header className=' flex justify-between font-bold text-xl text-white sticky top-0  p-4 bg-white bg-opacity-5 backdrop-blur-sm drop-shadow-lg font-mono '>
            <Link to="/" className="logo">MangaBridge</Link>
            <nav className=' flex gap-4'>
              <SearchBar/>

              <Link to="/manga">Seriler</Link>

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
                {username==="admin" && (
                    <>
                        <Link to="/add" className="logo">Admin</Link>
                    </>
                )}
                
                

            </nav>
      </header>
    )
}