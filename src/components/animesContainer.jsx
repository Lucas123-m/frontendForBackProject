import AnimeBox from './animeBox'

function AnimesContainer ({animes, onDelete, images}){
    return (
        <div className="container" id="animes-container">
           {animes.map(({id, title, name, seasons,idImage})=>
                <AnimeBox key={title} imgSrc={images[idImage] || '/imgFalsa.jpeg'} title={title} alt={name} seasons={seasons} id={id} onDelete={onDelete}></AnimeBox>
           )}    
        </div>
    )
}

export default AnimesContainer;