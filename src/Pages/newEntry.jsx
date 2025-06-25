import { NavLink } from "react-router-dom";
//import { animes } from '../scripts/data'

function discardChanges(){
    const inputs = document.getElementsByTagName('input')
    for (let input of inputs){
        input.value = ""
    }
}

const handleSubmit =  async (event) => {
    event.preventDefault()
    //const img = event.target.getElementsByTagName("input")[3].files[0]
    const cloud_name = "dgak0vgg2"
    const preset_name = "anime_images"
    const data = Array.from(event.target.getElementsByTagName("input")) //htmlCollection of elements
    const file_img = data[3].files[0]
    /*const anime = {
        imgSrc: data[3].value,
        alt: data[0].value,
        title: data[0].value,
        seasons: data[1].value,
        genres: [data[2].value]
    }*/
    console.log(data[3].files[0])
    //console.log(event.target.files[0])
    
    //animes.push(anime)
    const url_post = `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`
    const form = new FormData()
    form.append("file",file_img)
    form.append("upload_preset",preset_name)
    form.append("cloud_name",cloud_name)
    const response = await fetch(url_post,{method:"POST",body: form}) //Sube la imagen sin validar si existe antes, ojo
    const uploadedImageUrl = await response.json()
    console.log(uploadedImageUrl.url)
    discardChanges()    
}

export default function Edit(){
    return (
    <>
        <div className="sectionAdd">
            <h1 className="title">Add an anime</h1>
            <form onSubmit={handleSubmit}>
                <div className="dataToModify">
                    <div className="formGroup">  
                        <label htmlFor="titleInp">Title: </label>
                        <input type="text" id="titleInp"/>
                    </div>
                    <div className="formGroup">
                        <label htmlFor="seasonsInp">Number of anime seasons: </label>
                        <input type="text" id="seasonsInp"/>
                    </div>
                    <div className="formGroup">
                        <label htmlFor="imageInp">Front page: </label>
                        <input type="file" id="imageInp" accept="image/png, image/jpeg"/>
                    </div>
                </div>
                <div className="btns-edit-container">
                    <button type="submit" className="btns-edit btn-confirm">Confirm</button>
                    <button type="button" className="btns-edit btn-discard" onClick={discardChanges}>Discard</button>
                    <button type="button" className="btns-edit btn-go">
                        <NavLink to="/" className="go-back-link link">Go back</NavLink>
                    </button>
                </div>
            </form>
        </div>
    </>
)
}