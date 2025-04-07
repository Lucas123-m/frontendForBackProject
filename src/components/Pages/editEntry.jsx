import { NavLink } from "react-router-dom";

export default function Edit(){
    return (
    <>
        <div className="sectionEdit">
            <h1 className="title">Edit an anime</h1>
            <div className="dataToModify">
                <div className="formGroup">  
                    <label htmlFor="titleInp">Title: </label>
                    <input type="text" id="titleInp" readOnly={true}/>
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
                    <label htmlFor="image">Front page: </label>
                    <input type="file" id="imageInp" accept="image/png, image/jpeg" />
                </div>
            </div>
            <div className="btns-edit-container">
                <button type="button" className="btns-edit btn-confirm">Confirm</button>
                <button type="button" className="btns-edit btn-discard">Discard</button>
                <button type="button" className="btns-edit btn-go">
                    <NavLink to="/" className="go-back-link link">Go back</NavLink>
                </button>
            </div>
        </div>
    </>
)
}