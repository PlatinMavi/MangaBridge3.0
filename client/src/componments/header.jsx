import { useContext } from "react";
import { useEffect, useState} from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../usercontext";
import SearchBar from "./search";
import favicon from "../favicon.ico"

export default function Header(){

    const {setUserInfo,userInfo} = useContext(UserContext);
    const [showMenu, setShowMenu] = useState(false);

    const handleMenuToggle = () => {
      setShowMenu(!showMenu);
    };

    useEffect(() =>{
      fetch('http://localhost:4000/user/profile', {
        credentials: 'include',
        headers: {'Content-Type':'application/json'},
      }).then(response => {
        response.json().then(userinfo => {
          setUserInfo(userinfo);
        });
      });
    }, []);
  
    function logout() {
      fetch('http://localhost:4000/user/logout', {
        credentials: 'include',
        method: 'POST',
      }).then(
        setUserInfo("")
      )
      ;
    }
  
    const username = userInfo?.username;

    return(
      <header className="flex md:flex-row lg:flex-row flex-col justify-between font-bold text-xl w-full z-50 text-white fixed top-0 p-4 bg-white bg-opacity-5 backdrop-blur-sm drop-shadow-lg fredoka">
      <div className="flex justify-around h-max">
        {/* MangaBridge logo */}
        <Link to="/" className="logo text-2xl h-max">
          MangaBridge
        </Link>
        {/* Hamburger Menu (visible on small devices only) */}
        <button
          onClick={handleMenuToggle}
          className={`burger-menu lg:hidden ml-auto h-max`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
      {/* Navigation links (hidden on small devices when showMenu is false) */}
      <nav
        className={`flex flex-col gap-4 lg:flex lg:flex-row ${
          showMenu ? "mt-10" : "hidden"
        }`}
      >
        {/* Social media link */}
        <Link to="https://discord.gg/3bYYqP9Gzu" target="_blank">
          <img
            src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/636e0a6ca814282eca7172c6_icon_clyde_white_RGB.svg"
            loading="lazy"
            alt=""
            className="mark-logos w-8 h-8"
          />
        </Link>
        {/* Other navigation links */}
        <Link to="/hakkinda" className="px-2 font-thin text-2xl link link-underline link-underline-black">
          Hakkımızda & SSS
        </Link>
        <Link to="/manga" className="px-2 font-thin text-2xl link link-underline link-underline-black">
          Seriler
        </Link>
        <Link to="/chapter" className="px-2 font-thin text-2xl link link-underline link-underline-black">
          Yeni Eklenenler
        </Link>
        <SearchBar />
        {/* Logged-in user links */}
        {username && (
          <>
            <div onClick={logout} className="logout cursor-pointer font-thin text-2xl link link-underline link-underline-black">
              Çıkış Yap
            </div>
            <Link to={"/profile"} className="profile flex gap-2 font-thin text-2xl link link-underline link-underline-black">
              {username}{" "}
              <img
                src={favicon}
                alt=""
                className="rounded-full w-8 h-8 border p-1"
              />{" "}
            </Link>
          </>
        )}
        {/* Guest user links */}
        {!username && (
          <>
            <Link to="/login" className="login font-thin text-2xl link link-underline link-underline-black">
              Giriş Yap
            </Link>
            <Link to="/register" className="register font-thin text-2xl link link-underline link-underline-black">
              Kayıt Ol
            </Link>
          </>
        )}
        {/* Admin link */}
        {username === "admin" && (
          <>
            <Link to="/add" className="logo font-thin text-2xl link link-underline link-underline-black">
              Admin
            </Link>
          </>
        )}
      </nav>
    </header>
    )
}