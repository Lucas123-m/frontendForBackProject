import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react"

export default function UpdateImage(){
    const [urlImage,setUrlImage] = useState('')
    const [idImage,setIdImage] = useState(0)
    const [imgName,setImgName] = useState("N/A")
    const [images,setImages] = useState([])
    const [updated,setUpdated] = useState(false)
    useEffect(()=>{
        const getImages = async()=>{
            const res = await fetch("http://localhost:3000/animes/images")
            const data = await res.json()
            data.push({id:0,name:"N/A",url: ""})
            setImages(data)
            setIdImage(0)
            setImgName("N/A")
            setUrlImage('')
            const inputImg = document.getElementById("imageInp")
            inputImg.value=""
            return data
        } 
        getImages()

        setUpdated(false)
    },[updated])

    const handleimageSelected = (event)=>{
        setIdImage(parseInt(event.target.value))
        setImgName(event.target.selectedOptions[0].text)
        setUrlImage(event.target.selectedOptions[0].id)
    }

    const handleImageName = (event)=>{
        setImgName(event.target.value)
    }
    
    const handleSubmit = async (event) => {
        event.preventDefault()
        const inputImg = document.getElementById("imageInp")
        let name = document.getElementById("nameInp").value 
        let file = {}
        if (inputImg.files.length){
            file = inputImg.files[0]
        }

        console.log("datos front:", name,file,file.length)
        const formData = new FormData();
        formData.append("name",name)
        if (file) {formData.append("file",file)}
        
        console.log("submitting:",formData)
        const url_post_api=`http://localhost:3000/animes/images` 
        const response = await fetch(`${url_post_api}/${idImage}`,{method:"PUT",body: formData})
        const retorno = await response.json()
        console.log(response,retorno)
        setUpdated(true)
    }
    return (
    <>
        <div className="sectionAdd">
            <h1 className="title">Update an Image</h1>
            <form onSubmit={handleSubmit}>
                <div className="dataToModify">
                    <div className="formGroup">
                        <label htmlFor="imageSelect">Img: </label>
                        <select value={idImage} name="image selection" id="imageSelect" onChange={handleimageSelected} required>
                            {images.map(({id,url,name})=>{return <option id={url} key={id} value={id}>{name}</option>})}
                        </select>
                    </div>
                    <div className="formGroup">
                        <label htmlFor="nameInp">Image name: </label>
                        <input value={imgName} type="text" id="nameInp" onChange={handleImageName} required/>
                    </div>
                    <div className="formGroup">
                        <label htmlFor="imageInp">New Image:</label>
                        <input type="file" id="imageInp" accept="image/png, image/jpeg"/>
                    </div>
                    <div className="formGroup">
                        <label htmlFor="image">Current Image: </label>
                        <img id="image" src={urlImage || null} alt={imgName} />
                    </div>
                </div>
                <div className="btns-edit-container">
                    <button type="submit" className="btns-edit btn-confirm">Submit</button>
                    <button type="button" className="btns-edit btn-go">
                        <NavLink to="/" className="go-back-link link">Go back</NavLink>
                    </button>
                </div>
            </form>
        </div>
    </>
)
}