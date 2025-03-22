import Container from '../Container'

function AnimesContainer (){
    /// = > path to public folder inside my project!
    const animes = [
        {
            imgSrc: '/assets/honzuki.jpeg',
            alt: 'AoB',
            title: 'Honzuki no Gekokujou',
            seasons: '3',
            genres: ['Isekai','Slice of Life']
        },
        {
            imgSrc: '/assets/dr-stone.jpeg',
            alt: 'dr stone',
            title: 'Dr Stone',
            seasons: '4',
            genres: ['Adventure','SciFi']
        },
        {
            imgSrc: '/assets/kusuriya.jpeg',
            alt: 'Kusuriya no Hitorigoto',
            title: 'Kusuriya no Hitorigoto',
            seasons: '2',
            genres: ['Slice of Life','Mistery']
        },
        {
            imgSrc: '/assets/bocchi.jpeg',
            alt: 'Bocchi la roquita',
            title: 'Bocchi the rock',
            seasons: '1',
            genres: ['Slice of Life','Comedy','Music']
        },
        {
            imgSrc: '/assets/log-horizon.jpeg',
            alt: 'Log Horizon',
            title: 'Log Horizon',
            seasons: '3',
            genres: ['Isekai','Adventure']
        },
        {
            imgSrc: '/assets/spy-family.jpeg',
            alt: 'Spy x Family',
            title: 'Spy x Family',
            seasons: '2',
            genres: ['Slice of Life','Comedy']
        },
        {
            imgSrc: '/assets/tate-no-yuusha.jpeg',
            alt: 'Tate no yuusha',
            title: 'Tate no yuusha no nariagari',
            seasons: '3',
            genres: ['Isekai','Dark fantasy']
        },
        {
            imgSrc: '/assets/tensura.jpeg',
            alt: 'tensura',
            title: 'Tensei shitara slime datta ken',
            seasons: '3',
            genres: ['Isekai','Comedy','Music']
        },
    ]
    return (
        <div className="container" id="animes-container">
           {animes.map(({imgSrc, title, alt, seasons, genres})=>
                <Container imgSrc={imgSrc} title={title} alt={alt} seasons={seasons} genres={genres}></Container>
           )}    
        </div>
    )
}

export default AnimesContainer;