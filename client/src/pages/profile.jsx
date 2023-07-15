import Header from "../componments/header";
import pp from "../logo192.png"
import { UserContext } from "../usercontext";
import { useContext } from "react";
import { useEffect} from "react";

export default function ProfilePage(){
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

    const username = userInfo?.usernameStabilazed;

    return(
        <>
            <Header />
            <main className="mt-24 container mx-auto  text-white">
                <div className="grid grid-cols-12 gap-6">
                    <div className="col-span-3">
                        <div className="bg-white shadow-xl bg-opacity-5 backdrop-blur-sm text-3xl break-words font-mono p-4 rounded-3xl drop-shadow-lg">
                            <img src={pp} alt="" className="w-max mx-auto rounded-full my-4 border p-4" />
                            <h1 className="text-5xl w-max mx-auto mt-4">{username}</h1>
                        </div>
                    </div>
                    <div className="col-span-9 bg-white shadow-xl bg-opacity-5 backdrop-blur-sm text-3xl break-words font-mono p-4 rounded-3xl drop-shadow-lg">
                        <h2 className="text-3xl w-max mx-auto">Kaydedilenler</h2>
                        <hr />
                        <div className="grid grid-cols-6 gap-4">

                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}