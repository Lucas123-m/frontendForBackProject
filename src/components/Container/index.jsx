export default function Container(animeObj){
    return (
        <div className="anime-box">
            <img src={animeObj.imgSrc} alt={animeObj.alt}></img>
            <p className="anime-title">Title: {animeObj.title}.</p>
            <p className="n-seasons">Seasons: {animeObj.seasons}.</p>
            <p className="genre">Genres: {(animeObj.genres).join(", ")}.</p>
            <button type="button" className="btn-anime btn-edit">Edit anime</button>
            <button type="button" className="btn-anime btn-delete">Delete anime</button>
        </div>
    )
} 