import Container from './Container'

function AnimesContainer ({animes}){
    return (
        <div className="container" id="animes-container">
           {animes.map(({id,imgSrc, title, alt="Not Found", seasons})=>
                <Container key={title} imgSrc={imgSrc} title={title} alt={alt} seasons={seasons} id={id}></Container>
           )}    
        </div>
    )
}

export default AnimesContainer;