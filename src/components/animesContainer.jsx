import AnimeBox from './animeBox'

function AnimesContainer ({animes, onDelete, images}){
    return (
        <div className="container" id="animes-container">
           {animes.map(({id, title, name, seasons,idImage})=>
                
                <AnimeBox key={title} imgSrc={images.filter((image)=>image.id===idImage)[0]?.url || null} title={title} alt={name} seasons={seasons} id={id} onDelete={onDelete}></AnimeBox>
           )}    
        </div>
    )
}

export default AnimesContainer;