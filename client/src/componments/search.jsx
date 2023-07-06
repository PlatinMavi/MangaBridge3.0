import { useEffect, useState } from "react";

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
      <div className="flex gap-2">
        <div className="">
          <input
            type="text"
            name=""
            id=""
            placeholder="Ara..."
            className="bg-transparent border rounded-xl px-2"
            value={key}
            onChange={(e) => setKey(e.target.value)}
          />
        </div>
        <button>Ara</button>
      </div>
      <div className="results absolute">
        {searchResults.length > 0 &&
          searchResults.map((manga) => <h1 key={manga._id}>{manga.name}</h1>)}
      </div>
    </form>
  );
}
