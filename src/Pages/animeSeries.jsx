import AnimesContainer from "../components/animesContainer"
import { NavLink } from "react-router-dom"
import { useState, useEffect } from "react"

const BASE_URL = "http://localhost:3000/animes"

export default function MainPage(){
    const [dataAnimes,setData] = useState([])
    const [deleteState,setDelete] = useState(false) //para refrescar componente cuando se borra una serie
    const [dataImages,setImages] = useState([])
    const fetchData = async()=>{
        const res = await fetch("http://localhost:3000/animes/series");
        const data = await res.json();
        setData(data)
        
    }
    const fetchImages = async()=>{
        const res = await fetch("http://localhost:3000/animes/images");
        const data = await res.json();
        setImages(data)
        
    }
    useEffect(()=>{
        fetchData()
        fetchImages()
    },[deleteState])

    return (      
        <>
            <h1 className="title">My fav animes!</h1>
            <main>
                <div className="animes-buttons">
                    <button id="add-anime" className="btn btn-add"><NavLink to="/newEntry">New Anime</NavLink></button>
                </div>
                <div className="animes-buttons">
                    <button id="add-image" className="btn btn-add"><NavLink to="/newImage">New Image</NavLink></button>
                </div>
                <hr></hr>
                <AnimesContainer animes={dataAnimes} images={dataImages} onDelete={setDelete}/>
            </main>
        </>
    )
}