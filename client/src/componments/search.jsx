import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function SearchBar() {
  const [searchResults, setSearchResults] = useState([]);
  const [key, setKey] = useState("");

  const search = async () => {
    try {
      if (!key.trim()) {
        setSearchResults([]);
        return;
      }
      const response = await fetch(`http://localhost:4000/manga/search?key=${key}`, {
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
      });
      const results = await response.json();
      setSearchResults(results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!key.trim()) {
      setSearchResults([]);
      return;
    }
    search();
  }, [key]);

  return (
    <form className="mr-8">
      <div className="flex border rounded-xl">
        <div className="">
          <input
            type="text"
            name=""
            id=""
            placeholder="Ara..."
            className="bg-transparent  rounded-l-xl px-2 focus:outline-none"
            value={key}
            onChange={(e) => setKey(e.target.value)}
          />
        </div>
        <button className=" bg-gradient-to-r from-purple-600 to-teal-600 rounded-r-xl px-2">Ara</button>
      </div>
      {searchResults.length > 0 &&
        <div className="results p-4 m-4 -translate-x-2 bg-slate-900 shadow-2xl rounded-3xl absolute">
            {searchResults.length > 0 &&
            searchResults.map((manga) => (
              <Link to={"/manga/"+manga.browser} >
                <div className="flex w-64 break-words my-1 gap-x-2">
                    <img src={"http://localhost:4000/Collection/"+manga.image} alt="" className="w-16 rounded-lg" />
                    <h5 className="" key={manga._id}> {manga.name} </h5>
                </div>
              </Link>
            ))}
        </div>
      }
    </form>
  );
}

