import { NavLink } from "react-router-dom";

export default function AddImage(){
    const handleSubmit = async (event) => {
        event.preventDefault()
        const inputs = event.target.getElementsByTagName("input")
        const file = inputs[1].files[0]
        
        const formData = new FormData();
        console.log("file antes de enviar: ",file)
        formData.append("name",inputs[0].value)
        formData.append("file",file)
        
        const url_post_api=`http://localhost:3000/animes/images` 
        const response = await fetch(url_post_api,{method:"POST",body: formData})
        const retorno = await response.json()
        console.log(response,retorno)
    }
    return (
    <>
        <div className="sectionAdd">
            <h1 className="title">Add an Image</h1>
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