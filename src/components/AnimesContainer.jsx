import Container from './Container'

function AnimesContainer ({animes, onDelete}){
    return (
        <div className="container" id="animes-container">
           {animes.map(({id,imgSrc, title, alt="Not Found", seasons})=>
                <Container key={title} imgSrc={imgSrc} title={title} alt={alt} seasons={seasons} id={id} onDelete={onDelete}></Container>
           )}    
        </div>
    )
}

export default AnimesContainer;