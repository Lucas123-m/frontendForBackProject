import { useState } from "react"
import AddImage from "../components/forms/addImage"
import DeleteImage from "../components/forms/deleteImage"
export default function ManageImages(){
    const [action,setAction]=useState("add")

    const handleActionSelected = (e)=>{
        setAction(e.target.value)
    }
    const manage = ()=>{
        const selectTag = document.getElementById("selectActionImg")
            if (action === "add"){
                return <AddImage></AddImage>
            } else if (selectTag.value === "delete"){
                return <DeleteImage></DeleteImage>
            } else {
                return <div><h1>Accion no encontrada</h1></div>
            }
        }
    const options = [{value: "add",label: "Add an image"},{value: "delete",label: "Delete an image"}]
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