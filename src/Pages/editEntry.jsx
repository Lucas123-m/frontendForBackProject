import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { animes } from '../scripts/data'
import { useEffect,useState } from "react";

function handleSubmit(event){
    event.preventDefault()
    const data = Array.from(event.target.getElementsByTagName("input")) //htmlCollection of elements
    console.log("imgSrc: ",data[3].value)
    const anime = {
        imgSrc: data[3].value,
        alt: data[0].value,
        title: data[0].value,
        seasons: data[1].value,
        genres: [data[2].value]
    }
    const indexAnime = animes.findIndex((elem)=>{return elem.title===anime.title})
    animes[indexAnime]=anime
    console.log(indexAnime)    
}

export default function Edit(){
    const {idState} = useLocation().state

    const [dataAnime,setData] = useState([])
    const [title,setTitle] = useState()
    const [seasons,setSeasons] = useState()
    const [chapters,setChapters] = useState()
    const [author,setAuthor] = useState()
    const [watchStatus,setWatchStatus] = useState()
    const [description,setDescription] = useState()
    const [review,setReview] = useState()
    const [imgSrc,setImgSrc] = useState()

    const handletitle = (event)=>{setTitle(event.target.value)}
    const handleseasons = (event)=>{setSeasons(event.target.value)}
    const handlechapters = (event)=>{setChapters(event.target.value)}
    const handleauthor = (event)=>{setAuthor(event.target.value)}
    const handlewatchStatus = (event)=>{setWatchStatus(event.target.value)}
    const handledescription = (event)=>{setDescription(event.target.value)}
    const handlereview = (event)=>{setReview(event.target.value)}
    const handleimgSrc = (event)=>{setImgSrc(event.target.value)}
    
    const fetchData = async()=>{
        const res = await fetch(`http://localhost:3000/animes/series/${idState}`);
        const data = await res.json();
        setData(data)
        setTitle(data[0].title)
        setSeasons(data[0].seasons || '')
        setChapters(data[0].chapters || '')
        setAuthor(data[0].author)
        setWatchStatus(data[0].watch_status)
        setDescription(data[0].description || '')
        setReview(data[0].review || '')
        setImgSrc('')
    }
    useEffect(()=>{
        fetchData()
    },[])

    console.log(dataAnime[0])
    //console.log(title,author,chapters,watchStatus)
    //console.log("chapters: ",chapters," seasons: ",seasons," review: ",review," description: ",description," imgSrc: ",imgSrc)
    
    /*
    const [title,setTitle] = useState(dataAnime[0].title)
    const [seasons,setSeasons] = useState(dataAnime[0].seasons || '')
    const [chapters,setChapters] = useState(dataAnime[0].chapters || '')
    const [author,setAuthor] = useState(dataAnime[0].author)
    const [watchStatus,setWatchStatus] = useState(dataAnime[0].watch_status)
    const [description,setDescription] = useState(dataAnime[0].description || '')
    const [review,setReview] = useState(dataAnime[0].review || '')
    const [imgSrc,setImgSrc] = useState(dataAnime[0].imgSrc || '')*/

    const options = [{value: 'planned',label: 'planned'},{value: 'watching',label: 'watching'},{value: 'completed',label: 'completed'},{value: 'on_hold',label: 'on_hold'},{value: 'dropped',label: 'dropped'}]
    return (
    <>
        <div className="sectionAdd">
            <h1 className="title">Add an anime</h1>
            <form onSubmit={handleSubmit}>
                <div className="dataToModify">
                    <div className="formGroup">  
                        <label htmlFor="id">ID: </label>
                        <input type="text" value={idState} id="id" readOnly/>
                    </div>
                    <div className="formGroup">  
                        <label htmlFor="titleInp">Title: </label>
                        <input type="text" value={title} id="titleInp" onChange={handletitle} required/>
                    </div>
                    <div className="formGroup">
                        <label htmlFor="seasonsInp">Number of seasons (optional): </label>
                        <input type="text" value={seasons} id="seasonsInp" onChange={handleseasons}/>
                    </div>
                    <div className="formGroup">
                        <label htmlFor="chaptersInp">Number of chapters (optional): </label>
                        <input type="text" value={chapters} id="chaptersInp" onChange={handlechapters}/>
                    </div>
                    <div className="formGroup">
                        <label htmlFor="authorInp">Author: </label>
                        <input type="text" value={author} id="authorInp" onChange={handleauthor} required/>
                    </div>
                    <div className="formGroup">
                        <label htmlFor="watchStatusInp">Watch status: </label>
                        <select value={watchStatus} name="Watch Status" id="watchStatusInp" onChange={handlewatchStatus} required>
                            {options.map(({value,label})=>{return <option key={value} value={value}>{label}</option>})}
                        </select>
                    </div>
                    <div className="formGroup">
                        <label htmlFor="descriptionInp">Description (optional): </label>
                        <input type="text" value={description} id="descriptionInp" onChange={handledescription}/>
                    </div>
                    <div className="formGroup">
                        <label htmlFor="reviewInp">Review (optional): </label>
                        <input type="text" value={review} id="reviewInp" onChange={handlereview}/>
                    </div>
                    <div className="formGroup">
                        <label htmlFor="imageInp">Img (optional): </label>
                        <input type="file" value={imgSrc} id="imageInp" accept="image/png, image/jpeg" onChange={handleimgSrc}/>
                    </div>
                </div>
                <div className="btns-edit-container">
                    <button type="submit" className="btns-edit btn-confirm">Confirm</button>
                    <button type="button" className="btns-edit btn-go">
                        <NavLink to="/" className="go-back-link link">Go back</NavLink>
                    </button>
                </div>
            </form>
        </div>
    </>
)
/*
    const options = [{value: 'planned',label: 'planned'},{value: 'watching',label: 'watching'},{value: 'completed',label: 'completed'},{value: 'on_hold',label: 'on_hold'},{value: 'dropped',label: 'dropped'}]
    return (
    <>
        <div className="sectionAdd">
            <h1 className="title">Add an anime</h1>
            <form onSubmit={handleSubmit}>
                <div className="dataToModify">
                    <div className="formGroup">  
                        <label htmlFor="titleInp">Title: </label>
                        <input type="text" id="titleInp" required/>
                    </div>
                    <div className="formGroup">
                        <label htmlFor="seasonsInp">Number of seasons (optional): </label>
                        <input type="text" id="seasonsInp"/>
                    </div>
                    <div className="formGroup">
                        <label htmlFor="chaptersInp">Number of chapters (optional): </label>
                        <input type="text" id="chaptersInp"/>
                    </div>
                    <div className="formGroup">
                        <label htmlFor="authorInp">Author: </label>
                        <input type="text" id="authorInp" required/>
                    </div>
                    <div className="formGroup">
                        <label htmlFor="watchStatusInp">Watch status: </label>
                        <select name="Watch Status" id="watchStatusInp" required>
                            {options.map(({value,label})=>{return <option key={value} value={value}>{label}</option>})}
                        </select>
                    </div>
                    <div className="formGroup">
                        <label htmlFor="descriptionInp">Description (optional): </label>
                        <input type="text" id="descriptionInp"/>
                    </div>
                    <div className="formGroup">
                        <label htmlFor="reviewInp">Review (optional): </label>
                        <input type="text" id="reviewInp"/>
                    </div>
                    <div className="formGroup">
                        <label htmlFor="imageInp">Img (optional): </label>
                        <input type="file" id="imageInp" accept="image/png, image/jpeg"/>
                    </div>
                </div>
                <div className="btns-edit-container">
                    <button type="submit" className="btns-edit btn-confirm">Confirm</button>
                    <button type="button" className="btns-edit btn-go">
                        <NavLink to="/" className="go-back-link link">Go back</NavLink>
                    </button>
                </div>
            </form>
        </div>
    </>
)*/
}