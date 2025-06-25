import Container from '../AnimeBox'

//import { animes } from '../../scripts/data'
function AnimesContainer ({animes}){
    console.log("data: ",animes)
    return (
        <div className="container" id="animes-container">
           {animes.map(({imgSrc, title, alt="Not Found", seasons})=>
                <Container key={title} imgSrc={imgSrc} title={title} alt={alt} seasons={seasons}></Container>
           )}    
        </div>
    )
}

export default AnimesContainer;