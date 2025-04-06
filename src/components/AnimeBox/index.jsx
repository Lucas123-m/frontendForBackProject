import {NavLink} from 'react-router-dom';

export default function Container({imgSrc, title, alt, seasons, genres}){
    return (
        <div className="anime-box">
            <img src={imgSrc} alt={alt}></img>
            <p className="anime-title">Title: {title}.</p>
            <p className="n-seasons">Seasons: {seasons}.</p>
            <p className="genre">Genres: {(genres).join(", ")}.</p>
            <button type="button" className="btn-anime btn-edit"><NavLink to="edit" className="edit link">Edit anime</NavLink></button>
            <button type="button" className="btn-anime btn-delete">Delete anime</button>
        </div> 
    )
} 