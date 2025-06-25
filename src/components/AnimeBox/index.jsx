import { NavLink } from 'react-router-dom';
import { animes } from '../../scripts/data'

function deleteAnime (title){
    const indexAnime = animes.findIndex((elem)=> {return elem.title===title})
    animes.splice(indexAnime,1)
}
export default function Container({imgSrc, title, alt, seasons}){
    console.log(imgSrc)
    return (
        <div className="anime-box">
            <img src={imgSrc} alt={alt}></img>
            <p className="anime-title">Title: {title}.</p>
            <p className="n-seasons">Seasons: {seasons}.</p>
            <button type="button" className="btn-anime btn-edit"><NavLink to="/edit" className="edit link" state={{title: title, seasons: seasons}}>Edit anime</NavLink></button>
            <button type="button" className="btn-anime btn-delete" onClick={()=> 
                {
                    deleteAnime(title);
                }          
            }>Delete anime</button>
        </div> 
    )
} 