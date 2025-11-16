import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"

export default function DeleteImage(){
    const [urlImage,setUrlImage] = useState('')
    const [idImage,setIdImage] = useState(0)
    const [imgName,setImgName] = useState("N/A")
    const [images,setImages] = useState([])
    const [deleted,setDeleted] = useState(false)
    useEffect(()=>{
        const getImages = async()=>{
            const res = await fetch("http://localhost:3000/animes/images")
            const data = await res.json()
            setImages(data)
            setIdImage(0)
            setUrlImage('')
            setImgName("N/A")
            const inputImg = document.getElementById("imageInp")
            if(inputImg){inputImg.value=""}
            return data
        } 
        getImages()
        setDeleted(false)
    },[deleted])

    const handleimageName = (event)=>{
        setIdImage(parseInt(event.target.value))
        setImgName(event.target.selectedOptions[0].text)
        setUrlImage(event.target.selectedOptions[0].id)
    }

    const handleSubmit= async (event)=>{
        event.preventDefault()
        const res = await fetch(`http://localhost:3000/animes/images/${idImage}`,{method: "DELETE",credentials: "include"})
        const data = await res.json() 
        console.log(data)
        setDeleted(true)
    }
    return(
        <>
            <div className="sectionAdd">
                <h1 className="title">Delete an image</h1>
                <form onSubmit={handleSubmit}>
                    <div className="dataToModify">
                        <div className="formGroup">
                            <label htmlFor="imageModif">Img: </label>
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
                        <button type="submit" className="btn-edit-form btn-confirm">Delete</button>
                        <button type="button" className="btn-edit-form btn-go">
                            <NavLink to="/" className="go-back-link link">Go back</NavLink>
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}