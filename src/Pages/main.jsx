import AnimesContainer from "../components/AnimesContainer"
import { NavLink } from "react-router-dom"
import { useState, useEffect } from "react"

const BASE_URL = "http://localhost:3000/animes"

export default function MainPage(){
    const [dataAnimes,setData] = useState([])
    const fetchData = async()=>{
        const res = await fetch("http://localhost:3000/animes/series");
        const data = await res.json();
        setData(data)
        
    }
    useEffect(()=>{
        fetchData()
    },[])
    if (dataAnimes.length===0){
        return <div>Loading...</div>
    }
    return (      
        <>
            <h1 className="title">My fav animes!</h1>
            <main>
                <div className="animes-buttons">
                    <button id="add-anime" className="btn btn-add"><NavLink to="/newEntry">New Anime</NavLink></button>
                </div>
                <hr></hr>
                <AnimesContainer animes={dataAnimes}/>
            </main>
        </>
    )
}