import Container from '../AnimeBox'
import { useState } from 'react';
import { animes} from '../../scripts/data'
function AnimesContainer (){
    const [,setState] = useState()
    return (
        <div className="container" id="animes-container">
           {animes.map(({imgSrc, title, alt="Not Found", seasons})=>
                <Container key={title} imgSrc={imgSrc} title={title} alt={alt} seasons={seasons} renderFunction={setState}></Container>
           )}    
        </div>
    )
}

export default AnimesContainer;