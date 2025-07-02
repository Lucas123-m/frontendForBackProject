import AddImage from "../components/forms/addImage"
import { useState } from "react";
import DeleteImage from "../components/forms/deleteImage";
export default function ManageImages(){
    const [form,setForm] = useState("add") 
    const options = [{value:"add",label:"add image"},{value: "update",label:"update image"},{value:"delete",label:"delete image"}]
    const handleFormImg = (event)=>{
        setForm(event.target.value)
        console.log(form)
    }
    let formShow;
    const text = {delete:"Nada por ahora, delete",update:"Update, ver",default:"default, no encontrado"}
    switch (form){
        case "add":
            formShow = <AddImage></AddImage>
            break
        case "delete":
            formShow = <DeleteImage></DeleteImage>
            break
        case "update":
            formShow = <div>{text["update"]}</div>
            break
        default:
            formShow = <div>{text["default"]}</div>
    }
    return (
    <>
        <h1>Manage images</h1>
        <div className="selectManageImg">
            <label htmlFor="watchStatusInp">Watch status: </label>
            <select value={form} name="Watch Status" id="watchStatusInp" onChange={handleFormImg} required>
                {options.map(({value,label})=>{return <option key={value} value={value}>{label}</option>})}  
            </select>
        </div>
        {formShow}
    </>
)
}