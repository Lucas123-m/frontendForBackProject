import { NavLink,useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function EditContent(){
    const {id} = useParams()
    const [initialID,setInitialID] = useState("")
    const [idSerie,setIdSerie] = useState("")
    const [title,setTitle] = useState("")
    const [type,setType] = useState("")
    const [watchOrder,setWatchOrder] = useState("")
    const [watchStatus,setWatchStatus] = useState("")
    const [duration,setDuration] = useState("")
    const [chapters,setChapters] = useState("")
    const [review,setReview] = useState("")

    const handleIdSerie = (event)=>{setIdSerie(event.target.value)}
    const handletitle = (event)=>{setTitle(event.target.value)}
    const handletype = (event)=>{setType(event.target.value)}
    const handlewatchOrder = (event)=>{setWatchOrder(event.target.value)}
    const handlewatchStatus = (event)=>{setWatchStatus(event.target.value)}
    const handleduration = (event)=>{setDuration(event.target.value)}
    const handlechapters = (event)=>{setChapters(event.target.value)}
    const handlereview = (event)=>{setReview(event.target.value)}
        
    const url_api=`http://localhost:3000/animes/series`
    

    useEffect(()=>{
        const fetchData = async()=>{
            const res = await fetch(`${url_api}/contents/${id}`);
            const data = await res.json();
    
            setIdSerie(data[0].id_serie)
            setTitle(data[0].title_content)
            setType(data[0].type)
            setWatchStatus(data[0].watch_status)
            setWatchOrder(data[0].watch_order || '')
            setDuration(data[0].duration)
            setChapters(data[0].chapters || '')
            setReview(data[0].review || '')
            setInitialID(data[0].id_serie)
        }
        fetchData()
        console.log("fetch")
    },[])

    const options_watch_status = [{value: 'planned',label: 'planned'},{value: 'watching',label: 'watching'},{value: 'completed',label: 'completed'},{value: 'on_hold',label: 'on_hold'},{value: 'dropped',label: 'dropped'}]
    const options_type = [{value: 'season',label: 'season'},{value: 'film',label: 'film'},{value: 'ova',label: 'ova'}]
    
    /*const handleSubmit = async (event) => {
        event.preventDefault()
    
        const bodyData = {
            title: title, author: author,watch_status: watchStatus
        }
        if (seasons){bodyData["seasons"] = seasons}
        if (chapters){bodyData["chapters"] = chapters}
        if (description){bodyData["description"] = description}
        if (review){bodyData["review"] = review}
        if (imgSrc){bodyData["imgSrc"] = imgSrc}
        
        console.log("datos submit:",bodyData,JSON.stringify(bodyData))
        const response = await fetch(`${url_api}/${id}`,{method:"PUT",  
            headers: {
                'Content-Type': 'application/json; charset=UTF-8'
            }
        ,body: JSON.stringify(bodyData)})
        const retorno = await response.json()
        console.log(response,retorno)
    
    }*/
    return (
    <>
        <div className="sectionAdd">
            <h1 className="title">Edit anime content: </h1>
            <form>
                <div className="dataToModify">
                    <div className="formGroup">  
                        <label htmlFor="id">ID: </label>
                        <input type="text" value={id} id="id" readOnly/>
                    </div>
                    <div className="formGroup">  
                        <label htmlFor="id">ID Serie: </label>
                        <input type="text" value={idSerie} id="id" onChange={handleIdSerie}/>
                    </div>
                    <div className="formGroup">  
                        <label htmlFor="titleInp">Title: </label>
                        <input type="text" value={title} id="titleInp" onChange={handletitle} required/>
                    </div>
                    <div className="formGroup">
                        <label htmlFor="seasonsInp">Number of chapters (optional): </label>
                        <input type="text" value={chapters} id="seasonsInp" onChange={handlechapters}/>
                    </div>
                    <div className="formGroup">
                        <label htmlFor="seasonsInp">Watch order (optional): </label>
                        <input type="text" value={watchOrder} id="seasonsInp" onChange={handlewatchOrder}/>
                    </div>
                    <div className="formGroup">
                        <label htmlFor="chaptersInp">Duration: </label>
                        <input type="text" value={duration} id="chaptersInp" onChange={handleduration} required/>
                    </div>
                    <div className="formGroup">
                        <label htmlFor="typeInp">Type: </label>
                        <select value={type} name="Type" id="typeInp" onChange={handletype} required>
                            {options_type.map(({value,label})=>{return <option key={value} value={value}>{label}</option>})}
                        </select>
                    </div>
                    <div className="formGroup">
                        <label htmlFor="watchStatusInp">Watch status: </label>
                        <select value={watchStatus} name="Watch Status" id="watchStatusInp" onChange={handlewatchStatus} required>
                            {options_watch_status.map(({value,label})=>{return <option key={value} value={value}>{label}</option>})}
                        </select>
                    </div>
                    <div className="formGroup">
                        <label htmlFor="reviewInp">Review (optional): </label>
                        <input type="text" value={review} id="reviewInp" onChange={handlereview}/>
                    </div>
                </div>
                <div className="btns-edit-container">
                    <button type="submit" className="btns-edit btn-confirm">Confirm</button>
                    <button type="button" className="btns-edit btn-go">
                        <NavLink to={`/content/${initialID}`} className="go-back-link link">Go back</NavLink>
                    </button>
                </div>
            </form>
        </div>
    </>
)}