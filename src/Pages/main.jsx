import AnimesContainer from "../components/AnimesContainer"
import { NavLink } from "react-router-dom"
export default function MainPage(){
    return (      
        <>
            <h1 className="title">My fav animes!</h1>
            <main>
                <div className="animes-buttons">
                    <button id="show-animes" className="btn btn-show"><span>Show Animes</span></button>
                    <button id="add-anime" className="btn btn-add"><NavLink to="/newEntry">New Anime</NavLink></button>
                </div>
                <hr></hr>
                <AnimesContainer />
            </main>
        </>
    )
}