import Container from '../AnimeBox'
import {animes} from '../../scripts/data'
import { useState } from 'react';

function AnimesContainer (){
    const [,setState] = useState()
    return (
        <div className="container" id="animes-container">
           {animes.map(({imgSrc, title, alt, seasons, genres})=>
                <Container key={title} imgSrc={imgSrc} title={title} alt={alt} seasons={seasons} genres={genres} renderFunction={setState}></Container>
           )}    
        </div>
    )
}

export default AnimesContainer;