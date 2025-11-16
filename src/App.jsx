import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Pages/auth/login.jsx'
import MainPage from './Pages/show/animeSeries.jsx'
import ManageImages from './Pages/modify/images/manageImages.jsx'
import Edit from './Pages/modify/anime/editSerie.jsx'
import NewEntry from './Pages/modify/anime/addSerie.jsx'
import AddContent from './Pages/modify/anime/addContent.jsx'
import AnimeContent from './Pages/show/animeContent.jsx'
import EditContent from './Pages/modify/anime/editContent.jsx'

export default function App(){
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<MainPage/>} />
          <Route exact path="/login" element={<Login/>} />
          <Route exact path="/manageImages" element={<ManageImages/>} />
          <Route exact path="/edit/:id" element={<Edit/>} />
          <Route exact path="/newEntry" element={<NewEntry/>} />
          <Route exact path="/content/:id" element={<AnimeContent/>} />
          <Route exact path="/content/new/" element={<AddContent/>} />
          <Route exact path="/content/edit/:id" element={<EditContent/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}


