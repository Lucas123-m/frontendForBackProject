import { NavLink } from "react-router-dom";

const handleSubmit = async (event) => {
    event.preventDefault()
    const inputs = event.target.getElementsByTagName("input")
    const file_img = inputs[1].files[0]
    console.log("object file:",file_img)
    const formImg = new FormData()
    const cloud_name = "dgak0vgg2"
    const url_post = `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`
    const preset_name = "anime_images"
    formImg.append("file",file_img)
    formImg.append("upload_preset",preset_name)
    formImg.append("cloud_name",cloud_name)
    const responseImg = await fetch(url_post,{method:"POST",body: formImg})
    const uploadedImageUrl = await responseImg.json()
    console.log(uploadedImageUrl)

    if (responseImg.ok) {
        const bodyData = {
            url: uploadedImageUrl.url, name: inputs[0].value
        }
        const url_post_api=`http://localhost:3000/animes/images/` 

        console.log(bodyData,JSON.stringify(bodyData))
        const response = await fetch(url_post_api,{method:"POST",  
            headers: {
                'Content-Type': 'application/json; charset=UTF-8'
            }
        ,body: JSON.stringify(bodyData)})
        const retorno = await response.json()
        console.log(response,retorno)
    }
}

export default function Edit(){
    return (
    <>
        <div className="sectionAdd">
            <h1 className="title">Add an anime</h1>
            <form onSubmit={handleSubmit}>
                <div className="dataToModify">
                    <div className="formGroup">
                        <label htmlFor="nameInp">Name for image: </label>
                        <input type="text" id="nameInp" required/>
                    </div>
                    <div className="formGroup">
                        <label htmlFor="imageInp">Img: </label>
                        <input type="file" id="imageInp" accept="image/png, image/jpeg" required/>
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