import { useState } from "react"
import AddImage from "./addImage"
import DeleteImage from "./deleteImage"
import UpdateImage from "./updateImage"
export default function ManageImages(){
    const [action,setAction]=useState("add")

    const handleActionSelected = (e)=>{
        setAction(e.target.value)
    }
    const manage = ()=>{
        if (action === "add"){
            return <AddImage></AddImage>
        } else if (action === "delete"){
            return <DeleteImage></DeleteImage>
        } else if (action === "update"){
            return <UpdateImage></UpdateImage>
        } else {
            return <div><h1>Accion no encontrada</h1></div>
        }
    }
    const options = [{value: "add",label: "Add an image"},{value: "delete",label: "Delete an image"},
        {value:"update",label:"Update an image"}
    ]
    return (
    <>
        <div>
            <select value={action} name="selectAction" id="selectActionImg" onChange={handleActionSelected} required>
                {options.map(({value,label})=>{return <option key={value} value={value}>{label}</option>})}  
            </select>
        </div>
        {manage()}
    </>
    )
}