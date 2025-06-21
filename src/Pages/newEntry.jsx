import { NavLink } from "react-router-dom";
import {animes} from '../scripts/data'

function discardChanges(){
    const inputs = document.getElementsByTagName('input')
    for (let input of inputs){
        input.value = ""
    }
}

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
    animes.push(anime)
    discardChanges()    
}
export default function Edit(){
    return (
    <>
        <div className="sectionAdd">
            <h1 className="title">Add an anime</h1>
            <form onSubmit={handleSubmit}>
                <div className="dataToModify">
                    <div className="formGroup">  
                        <label htmlFor="titleInp">Title: </label>
                        <input type="text" id="titleInp"/>
                    </div>
                    <div className="formGroup">
                        <label htmlFor="seasonsInp">Number of anime seasons: </label>
                        <input type="text" id="seasonsInp"/>
                    </div>
                    <div className="formGroup">
                        <label htmlFor="genresInp">Genres: </label>
                        <input type="text" id="genresInp"/>
                    </div>
                    <div className="formGroup">
                        <label htmlFor="imageInp">Front page: </label>
                        <input type="file" id="imageInp" accept="image/png, image/jpeg" />
                    </div>
                </div>
                <div className="btns-edit-container">
                    <button type="submit" className="btns-edit btn-confirm">Confirm</button>
                    <button type="button" className="btns-edit btn-discard" onClick={discardChanges}>Discard</button>
                    <button type="button" className="btns-edit btn-go">
                        <NavLink to="/" className="go-back-link link">Go back</NavLink>
                    </button>
                </div>
            </form>
        </div>
    </>
)
}