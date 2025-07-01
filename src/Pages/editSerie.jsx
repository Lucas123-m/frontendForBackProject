import { NavLink,useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Edit(){
    const {id} = useParams()

    const [title,setTitle] = useState("")
    const [seasons,setSeasons] = useState("")
    const [chapters,setChapters] = useState("")
    const [author,setAuthor] = useState("")
    const [watchStatus,setWatchStatus] = useState("")
    const [description,setDescription] = useState("")
    const [review,setReview] = useState("")

    const [urlImage,setUrlImage] = useState('')
    const [idImage,setIdImage] = useState(0)
    const [imgName,setImgName] = useState("N/A")

    const [images,setImages] = useState([])

    const handletitle = (event)=>{setTitle(event.target.value)}
    const handleseasons = (event)=>{setSeasons(event.target.value)}
    const handlechapters = (event)=>{setChapters(event.target.value)}
    const handleauthor = (event)=>{setAuthor(event.target.value)}
    const handlewatchStatus = (event)=>{setWatchStatus(event.target.value)}
    const handledescription = (event)=>{setDescription(event.target.value)}
    const handlereview = (event)=>{setReview(event.target.value)}

    const handleimageName = (event)=>{
        console.log(event.target.selectedOptions[0])
        setIdImage(parseInt(event.target.value))
        setImgName(event.target.selectedOptions[0].text)
        setUrlImage(event.target.selectedOptions[0].id)
    }
    
    const url_api=`http://localhost:3000/animes/series`
    useEffect(()=>{
        const fetchData = async()=>{
            const res = await fetch(`${url_api}/${id}`);
            const data = await res.json();
    
            setTitle(data[0].title)
            setSeasons(data[0].seasons || '')
            setChapters(data[0].chapters || '')
            setAuthor(data[0].author)
            setWatchStatus(data[0].watch_status)
            setDescription(data[0].description || '')
            setReview(data[0].review || '')
            setIdImage(data[0].idImage || 0)
        }
        fetchData()
    
        const fetchImages = async()=>{
            const res = await fetch(`http://localhost:3000/animes/images/`);
            const data = await res.json();
            console.log("id image: ",idImage)
            if (idImage){        
                const dataImage = data.filter((elem)=> elem.id === idImage)
                setImgName(dataImage.name)
                setUrlImage(dataImage.url)
                console.log("estado inicial, HAY dato previo:",imgName,urlImage)

            } else {
                console.log("estado inicial, sin dato previo: ",imgName,"-",urlImage)
            }
            data.push({id:0,name:"N/A",url: ""})
            setImages(data)
        }
        fetchImages()
    },[])

    

    const options = [{value: 'planned',label: '1-planned'},{value: 'watching',label: '2-watching'},{value: 'completed',label: '3-completed'},{value: 'on_hold',label: '4-on_hold'},{value: 'dropped',label: '5-dropped'}]
    
    const handleSubmit = async (event) => {
        event.preventDefault()
    
        const bodyData = {
            title: title, author: author,watch_status: watchStatus
        }

        if (seasons){bodyData["seasons"] = seasons}
        if (chapters){bodyData["chapters"] = chapters}
        if (description){bodyData["description"] = description}
        if (review){bodyData["review"] = review}
        if (idImage){bodyData["idImage"] = idImage}
        const response = await fetch(`${url_api}/${id}`,{method:"PUT",  
            headers: {
                'Content-Type': 'application/json; charset=UTF-8'
            }
        ,body: JSON.stringify(bodyData)})
        const retorno = await response.json()
        console.log(retorno)  
        
    }

    console.log("renderiza con: ",imgName,idImage,urlImage)
    return (
    <>
        <div className="sectionAdd">
            <h1 className="title">Edit an anime</h1>
            <form onSubmit={handleSubmit}>
                <div className="dataToModify">
                    <div className="formGroup">  
                        <label htmlFor="id">ID: </label>
                        <input type="text" value={id} id="id" readOnly/>
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
                            {options.map(({value,label})=>{return <option id={id} key={value} value={value}>{label}</option>})}  
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
                        <label htmlFor="imageModif">Img (optional): </label>
                        <select value={idImage} name="image selection" id="imageModif" onChange={handleimageName} required>
                            {images.map(({id,url,name})=>{return <option id={url} key={id} value={id}>{name}</option>})}
                        </select>
                    </div>
                    <div className="formGroup">
                        <label htmlFor="imageModif">Img selected: </label>
                        <img src={urlImage || null} alt={imgName} />
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
)}