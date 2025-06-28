import { NavLink } from "react-router-dom";
//import { animes } from '../scripts/data'

function discardChanges(){
    const inputs = document.getElementsByTagName('input')
    for (let input of inputs){
        input.value = ""
    }
}

/*const handleImage =  async (event) => {
    event.preventDefault()
    //const img = event.target.getElementsByTagName("input")[3].files[0]
    const cloud_name = "dgak0vgg2"
    const preset_name = "anime_images"
    const data = Array.from(event.target.getElementsByTagName("input")) //htmlCollection of elements
    const file_img = data[3].files[0]
    /*
    const anime = {
        imgSrc: data[3].value,
        alt: data[0].value,
        title: data[0].value,
        seasons: data[1].value,
        genres: [data[2].value]
    }
    */
    /*console.log(data[3].files[0])
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
*/
const handleSubmit = async (event) => {
    event.preventDefault()

    const dataInputs = Array.from(event.target.getElementsByTagName("input")) //htmlCollection of elements
    const dataSelect = event.target.getElementsByTagName("Select")
    //console.log("data select: ", dataSelect[0].value)
    //console.log(dataInputs)
    /*const file_img = dataInputs[6].files[0]
    console.log(file_img)
    const formImg = new FormData()
    const cloud_name = "dgak0vgg2"
    const url_post = `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`
    const preset_name = "anime_images"
    formImg.append("file",file_img)
    formImg.append("upload_preset",preset_name)
    formImg.append("cloud_name",cloud_name)
    const response = await fetch(url_post,{method:"POST",body: formImg})
    const uploadedImageUrl = await response.json()
        console.log(uploadedImageUrl) */

    const url_post_api=`http://localhost:3000/animes/series/`
    const bodyData = {
        title: dataInputs[0].value, author: dataInputs[3].value,watch_status: dataSelect[0].value
    }
    if (dataInputs[1].value.length){bodyData["seasons"] = dataInputs[1].value}
    if (dataInputs[2].value.length){bodyData["chapters"] = dataInputs[2].value}
    if (dataInputs[4].value.length){bodyData["description"] = dataInputs[4].value}
    if (dataInputs[5].value.length){bodyData["review"] = dataInputs[5].value}
    if (dataInputs[6].files[0].name){bodyData["imgSrc"] = dataInputs[6].files[0].name}
    
    console.log(bodyData,JSON.stringify(bodyData))
    const response = await fetch(url_post_api,{method:"POST",  
        headers: {
            'Content-Type': 'application/json; charset=UTF-8'
        }
    ,body: JSON.stringify(bodyData)})
    const retorno = await response.json()
    console.log(response,retorno)

}

export default function Edit(){
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
                            {options.map(({value,label})=>{return <option value={value}>{label}</option>})}
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