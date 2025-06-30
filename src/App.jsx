import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainPage from './Pages/main.jsx'
import Edit from './Pages/editSerie.jsx'
import NewEntry from './Pages/newEntry.jsx'
import AnimeContent from './Pages/animeContent.jsx'
import EditContent from './Pages/editContent.jsx'
export default function App(){
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<MainPage/>} />
          <Route exact path="/edit/:id" element={<Edit/>} />
          <Route exact path="/newEntry" element={<NewEntry/>} />
          <Route exact path="/content/:id" element={<AnimeContent/>} />
          <Route exact path="/content/edit/:id" element={<EditContent/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}


