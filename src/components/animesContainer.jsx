import AnimeBox from './animeBox'

function AnimesContainer ({animes, onDelete}){
    return (
        <div className="container" id="animes-container">
           {animes.map(({id,imgSrc, title, alt="Not Found", seasons})=>
                <AnimeBox key={title} imgSrc={imgSrc} title={title} alt={alt} seasons={seasons} id={id} onDelete={onDelete}></AnimeBox>
           )}    
        </div>
    )
}

export default AnimesContainer;