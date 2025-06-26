import { NavLink } from 'react-router-dom';

export default function Container({imgSrc, title, alt, seasons,id}){
    const deleteAnime = (title)=>{return title}
    return (
        <div className="anime-box">
            <img src={imgSrc} alt={alt}></img>
            <p className="anime-title">Title: {title}.</p>
            <p className="n-seasons">Seasons: {seasons}.</p>
            <button type="button" className="btn-anime btn-edit"><NavLink to="/edit" className="edit link" state={{idState: id}}>Edit anime</NavLink></button>
            <button type="button" className="btn-anime btn-delete" onClick={()=> 
                {
                    deleteAnime(title);
                }          
            }>Delete anime</button>
        </div> 
    )
} 