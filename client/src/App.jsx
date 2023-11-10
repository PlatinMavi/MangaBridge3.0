
import './App.css';
import IndexPage from "./pages/indexpage"
import LoginPage from "./pages/loginpage"
import RegisterPage from './pages/registerpage';
import  {Route,Routes} from "react-router-dom"
import { UserContextProvider } from './usercontext';
import MangaAdd from './pages/mangaAdd';
import MangaPage from './pages/mangapage';
import AllManga from './pages/allManga';
import AllChapter from './pages/allChapter';
import ProfilePage from './pages/profile';
import AboutUsPage from './pages/aboutus';
import ReadPage from './pages/readpage';

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path={"/add"} element={<MangaAdd/>} />

        <Route index element={<IndexPage/>}/>

        <Route path={"/login"} element={<LoginPage/>} />

        <Route path={"/register"} element={<RegisterPage/>} />

        <Route path={"/manga/:name"} element={<MangaPage/>} />

        <Route path={"/manga"} element={<AllManga/>} />

        <Route path={"/chapter"} element={<AllChapter/>} />

        <Route path={"/profile"} element={<ProfilePage/>} />

        <Route path={"/hakkinda"} element={<AboutUsPage/>}/>

        <Route path={"/manga/read/:link"} element={<ReadPage/>}/>

      </Routes>
    </UserContextProvider>
  );
}

export default App;
