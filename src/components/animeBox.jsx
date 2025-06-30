import { NavLink } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete'; 
import EditIcon from '@mui/icons-material/Edit';
import ReadMoreIcon from '@mui/icons-material/ReadMore';

export default function AnimeBox({imgSrc, title, alt, seasons,id,onDelete}){
    const deleteAnime =  async (id)=>{
        const url_api=`http://localhost:3000/animes/series`
        const res = await fetch(`${url_api}/${id}`,{method: "DELETE"});
        const data = await res.json();
        console.log("resultado de borrar:",data)
        onDelete(c => !c)
    }
    return (
        <div className="anime-box">
            <img src={imgSrc} alt={alt}></img>
            <p className="anime-title">Title: {title}.</p>
            <p className="n-seasons">Seasons: {seasons}.</p>
            <button type="button" className="btn-anime btn-edit">
                <NavLink to={`/edit/${id}`} className="edit link">
                    <EditIcon sx={{ fontSize: 20 }}></EditIcon>
                </NavLink>
            </button>
            <button type="button" className="btn-anime btn-see">
                <NavLink to={`/content/${id}`} className="edit link">
                    <ReadMoreIcon sx={{ fontSize: 20 }}></ReadMoreIcon>
                </NavLink>
            </button>
            <button type="button" className="btn-anime btn-delete" onClick={()=> 
                {
                    deleteAnime(id);
                }          
            }><DeleteIcon sx={{ fontSize: 20 }}/>   </button>
        </div> 
    )
} 