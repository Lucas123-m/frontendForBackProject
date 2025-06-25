import AnimesContainer from "../components/AnimesContainer"
import { NavLink } from "react-router-dom"
import { useState, useEffect } from "react"
export default function MainPage(){
    const [dataAnimes,setData] = useState(null)
    const url = "http://localhost:3000/animes/series"
    const getData = async ()=>{
        const response = await fetch(url)
        const data = await response.json()
        setData(data)
    }
    useEffect(()=>{
        getData()
    },[])
    console.log("data:",dataAnimes)
    return (      
        <>
            <h1 className="title">My fav animes!</h1>
            <main>
                <div className="animes-buttons">
                    <button id="add-anime" className="btn btn-add"><NavLink to="/newEntry">New Anime</NavLink></button>
                </div>
                <hr></hr>
                <AnimesContainer/>
            </main>
        </>
    )
}