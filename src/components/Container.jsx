import { NavLink } from 'react-router-dom';

export default function Container({imgSrc, title, alt, seasons,id,onDelete}){
    const deleteAnime =  async (id)=>{
        const url_api=`http://localhost:3000/animes/series`
        const res = await fetch(`${url_api}/${id}`,{method: "DELETE"});
        const data = await res.json();
        onDelete(true)
        console.log(data)
    }
    return (
        <div className="anime-box">
            <img src={imgSrc} alt={alt}></img>
            <p className="anime-title">Title: {title}.</p>
            <p className="n-seasons">Seasons: {seasons}.</p>
            <button type="button" className="btn-anime btn-edit"><NavLink to="/edit" className="edit link" state={{idState: id}}>Edit anime</NavLink></button>
            <button type="button" className="btn-anime btn-delete" onClick={()=> 
                {
                    deleteAnime(id);
                }          
            }>Delete anime</button>
        </div> 
    )
} 