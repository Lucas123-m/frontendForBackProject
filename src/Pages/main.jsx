import AnimesContainer from "../components/animesContainer"
import { NavLink } from "react-router-dom"
import { useState, useEffect } from "react"

const BASE_URL = "http://localhost:3000/animes"

export default function MainPage(){
    const [dataAnimes,setData] = useState([])
    const [deleteState,setDelete] = useState(false) //para refrescar componente cuando se borra una serie
    const fetchData = async()=>{
        const res = await fetch("http://localhost:3000/animes/series");
        const data = await res.json();
        console.log("datos fetch:",data)
        setData(data)
        
    }
    useEffect(()=>{
        fetchData()
        setDelete(false)
    },[deleteState])

    return (      
        <>
            <h1 className="title">My fav animes!</h1>
            <main>
                <div className="animes-buttons">
                    <button id="add-anime" className="btn btn-add"><NavLink to="/newEntry">New Anime</NavLink></button>
                </div>
                <hr></hr>
                <AnimesContainer animes={dataAnimes} onDelete={setDelete}/>
            </main>
        </>
    )
}