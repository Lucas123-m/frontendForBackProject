import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainPage from './Pages/main.jsx'
import Edit from './Pages/editEntry.jsx'
import NewEntry from './Pages/newEntry.jsx'
import AnimeContent from './Pages/animeContent.jsx'
export default function App(){
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<MainPage/>} />
          <Route exact path="/edit/:id" element={<Edit/>} />
          <Route exact path="/newEntry" element={<NewEntry/>} />
          <Route exact path="/content/:id" element={<AnimeContent/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}


