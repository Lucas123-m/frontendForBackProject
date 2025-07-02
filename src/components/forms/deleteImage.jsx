import { useEffect,useState } from "react"
import { NavLink } from "react-router-dom"
export default function DeleteImage(){ 
    const [urlImage,setUrlImage] = useState('')
    const [idImage,setIdImage] = useState(0)
    const [imgName,setImgName] = useState("N/A")

    const [images,setImages] = useState([])

    const handleimageName = (event)=>{
        setIdImage(parseInt(event.target.value))
        setImgName(event.target.selectedOptions[0].text)
        setUrlImage(event.target.selectedOptions[0].id)
    }

    useEffect(()=>{
        const fetchData = async()=>{
            const resImages = await fetch(`http://localhost:3000/animes/images/`);
            const dataImages = await resImages.json();
    
            dataImages.push({id:0,name:"N/A",url: ""})
            setImages(dataImages)
        }
        fetchData()
    },[]) 

    return (<>
    <div className="sectionDelete">
        <h1 className="title">Delete an image</h1>
        <form>
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
            <div>
                <button type="submit" className="btns-delete btn-delete-form">Delete</button>
                <button type="button" className="btns-delete btn-go">
                    <NavLink to="/" className="go-back-link link">Go back</NavLink>
                </button>
            </div>
        </form>
    </div>
    </>)
}