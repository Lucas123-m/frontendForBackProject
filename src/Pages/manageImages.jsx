import AddImage from "../components/forms/addImage"
import { useState } from "react";
export default function ManageImages(){
    const [form,setForm] = useState("add") 
    const options = [{value:"add",label:"add image"},{value: "update",label:"update image"},{value:"delete",label:"delete image"}]
    const handleFormImg = (event)=>{
        setForm(event.target.value)
        console.log(form)
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
        <AddImage></AddImage>
    </>
)
}