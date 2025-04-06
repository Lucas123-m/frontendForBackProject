import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainPage from './components/Pages/main.jsx'
import Edit from './components/Pages/editEntry.jsx'

export default function App(){
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<MainPage/>} />
          <Route exact path="/edit" element={<Edit/>} />
          <Route exact path="/newEntry" element={<MainPage/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}


