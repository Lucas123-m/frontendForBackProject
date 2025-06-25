import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { animes } from '../scripts/data'
import { useState } from "react";

function handleSubmit(event){
    event.preventDefault()
    const data = Array.from(event.target.getElementsByTagName("input")) //htmlCollection of elements
    console.log("imgSrc: ",data[3].value)
    const anime = {
        imgSrc: data[3].value,
        alt: data[0].value,
        title: data[0].value,
        seasons: data[1].value,
        genres: [data[2].value]
    }
    const indexAnime = animes.findIndex((elem)=>{return elem.title===anime.title})
    animes[indexAnime]=anime
    console.log(indexAnime)    
}

export default function Edit(){
    const {title,seasons} = useLocation().state
    const [titleState,setTitle] = useState(title)
    const [seasonsState,setSeasons] = useState(seasons)

    function handleTitle(event){
        setTitle(event.target.value)
    }

    function handleSeasons(event){
        setSeasons(event.target.value)
    }

    return (
    <>
        <div className="sectionEdit">
            <h1 className="title">Edit an anime</h1>
            <form onSubmit={handleSubmit}>
                <div className="dataToModify">
                    <div className="formGroup">  
                        <label htmlFor="titleInp">Title: </label>
                        <input type="text" id="titleInp"value={titleState} onChange={handleTitle}/>
                    </div>
                    <div className="formGroup">
                        <label htmlFor="seasonsInp">Number of anime seasons: </label>
                        <input type="text" id="seasonsInp" value={seasonsState} onChange={handleSeasons}/>
                    </div>
                    <div className="formGroup">
                        <label htmlFor="imageInp">Front page: </label>
                        <input type="file" id="imageInp" accept="image/png, image/jpeg" />
                    </div>
                </div>
                <div className="btns-edit-container">
                    <button type="submit" className="btns-edit btn-confirm">Confirm</button>
                    <button type="button" className="btns-edit btn-go">
                        <NavLink to="/" className="go-back-link link">Go back</NavLink>
                    </button>
                </div>
            </form>
        </div>
    </>
)
}