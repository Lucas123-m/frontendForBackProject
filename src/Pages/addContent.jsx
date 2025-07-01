import { NavLink,useLocation } from "react-router-dom";
//import { useEffect } from "react";

export default function AddContent(){
    const {id} = useLocation().state
    const url_api=`http://localhost:3000/animes/series`

    const options_watch_status = [{value: 'planned',label: 'planned'},{value: 'watching',label: 'watching'},{value: 'completed',label: 'completed'},{value: 'on_hold',label: 'on_hold'},{value: 'dropped',label: 'dropped'}]
    const options_type = [{value: 'season',label: 'season'},{value: 'film',label: 'film'},{value: 'ova',label: 'ova'}]
    const discardChanges = ()=> {
        const inputs = document.getElementsByTagName('input')
        for (let input of inputs){
            if (input.id=="id"){continue}
            input.value = ""
        }
        const selects = document.getElementsByTagName("select")
        selects[1].value = "planned"
        selects[0].value = "season"

    }
    
    const handleSubmit = async (event) => {
        event.preventDefault()
        const inputs = event.target.getElementsByTagName("input")
        const selects = event.target.getElementsByTagName("select")
        const bodyData = {
            id_serie: id,title: inputs[1].value, type: selects[0].value,watch_status: selects[1].value, 
            duration: inputs[4].value
        }
        if (inputs[3].value){bodyData["watch_order"] = inputs[3].value}
        if (inputs[2].value){bodyData["chapters"] = inputs[2].value}
        if (inputs[5].value){bodyData["review"] = inputs[5].value}
        
        const response = await fetch(`${url_api}/contents/`,{method:"POST",  
            headers: {
                'Content-Type': 'application/json; charset=UTF-8'
            }
        ,body: JSON.stringify(bodyData)})
        const retorno = await response.json()
        console.log(response,retorno)
    
    }
    
    return (
    <>
        <div className="sectionAdd">
            <h1 className="title">Add anime content: </h1>
            <form onSubmit={handleSubmit}>
                <div className="dataToModify">
                    <div className="formGroup">  
                        <label htmlFor="id">ID Serie: </label>
                        <input value={id} type="text" id="id_serie" readOnly/>
                    </div>
                    <div className="formGroup">  
                        <label htmlFor="titleInp">Title: </label>
                        <input type="text" id="titleInp" required/>
                    </div>
                    <div className="formGroup">
                        <label htmlFor="seasonsInp">Number of chapters (optional): </label>
                        <input type="text" id="seasonsInp"/>
                    </div>
                    <div className="formGroup">
                        <label htmlFor="watchOrderInp">Watch order (optional): </label>
                        <input type="text" id="watchOrderInp"/>
                    </div>
                    <div className="formGroup">
                        <label htmlFor="chaptersInp">Duration: </label>
                        <input type="text" id="chaptersInp" required/>
                    </div>
                    <div className="formGroup">
                        <label htmlFor="typeInp">Type: </label>
                        <select name="Type" id="typeInp" required>
                            {options_type.map(({value,label})=>{return <option key={value} value={value}>{label}</option>})}
                        </select>
                    </div>
                    <div className="formGroup">
                        <label htmlFor="watchStatusInp">Watch status: </label>
                        <select name="Watch Status" id="watchStatusInp" required>
                            {options_watch_status.map(({value,label})=>{return <option key={value} value={value}>{label}</option>})}
                        </select>
                    </div>
                    <div className="formGroup">
                        <label htmlFor="reviewInp">Review (optional): </label>
                        <input type="text" id="reviewInp" />
                    </div>
                </div>
                <div className="btns-edit-container">
                    <button type="submit" className="btns-edit btn-confirm">Confirm</button>
                    <button type="button" className="btns-edit btn-discard" onClick={discardChanges}>Discard</button>
                    <button type="button" className="btns-edit btn-go">
                        <NavLink to={`/content/${id}`} className="go-back-link link">Go back</NavLink>
                    </button>
                </div>
            </form>
        </div>
    </>
)}