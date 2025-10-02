import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function DataAnime(id){
    const idValue = id.id
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
    
    const url_api=`http://localhost:3000/animes/series`
    
    const fetchData = async()=>{
        const res = await fetch(`${url_api}/${idValue}`);
        const data = await res.json();

        setTitle(data[0].title)
        setSeasons(data[0].seasons || '')
        setChapters(data[0].chapters || '')
        setAuthor(data[0].author)
        setWatchStatus(data[0].watch_status)
        setDescription(data[0].description || '')
        setReview(data[0].review || '')
        setImgSrc('')
    }
    fetchData()
    const options = [{value: 'planned',label: 'planned'},{value: 'watching',label: 'watching'},{value: 'completed',label: 'completed'},{value: 'on_hold',label: 'on_hold'},{value: 'dropped',label: 'dropped'}]

    return (
    <>
        <div className="sectionAdd">
            <div className="dataToModify">
                <div className="formGroup">  
                    <label htmlFor="id">ID: </label>
                    <input type="text" value={idValue} id="id" readOnly/>
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
        </div>
    </>
)}