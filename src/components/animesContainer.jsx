import AnimeBox from './animeBox'

function AnimesContainer ({animes, onDelete, images}){

    //images.foreach((elem)=>console.log("elem en animes container: ",elem,"--",elem.id))
    if (!images){
        return <div>cargando...</div>
    }
    images.forEach(element => {
        console.log(element)
    });
    return (
        <div className="container" id="animes-container">
           {animes.map(({id, title, name, seasons,idImage})=>
                
                <AnimeBox key={title} imgSrc={images.filter((image)=>image.id===idImage)[0]?.url || null} title={title} alt={name} seasons={seasons} id={id} onDelete={onDelete}></AnimeBox>
           )}    
        </div>
    )
}

export default AnimesContainer;