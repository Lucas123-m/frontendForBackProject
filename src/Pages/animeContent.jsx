import { useEffect, useState } from "react"
import TableAnimeContent from "../components/tableContent"
import { NavLink,useParams } from "react-router-dom"
export default function AnimeContent(){
    const { id } = useParams()
    const [title,setTitle] = useState("")
    const url_api=`http://localhost:3000/animes/series`
    useEffect(()=>{
        const getTitle = async ()=>{
            const response = await fetch(`${url_api}/${id}`)
            const data = await response.json()
            setTitle(data[0].title)
            console.log(data)
        }
        getTitle()
    })
    console.log("id:",id,"title: ,",title)
    return (<>
        <h1 className="title">Contents: </h1>
        <main>
            <div className="sectionAdd">
                <div className="dataToModify">
                    <div className="formGroup">  
                        <label htmlFor="id">ID: </label>
                        <input type="text" value={id} id="id" readOnly/>
                    </div>
                    <div className="formGroup">  
                        <label htmlFor="titleInp">Serie title: </label>
                        <input type="text" value={title} id="titleInp" readOnly/>
                    </div>
                </div>
            </div>
            <hr />
            <TableAnimeContent id={id}></TableAnimeContent>
            <button type="button" className="btns-edit btn-go">
                <NavLink to="/" className="go-back-link link">Go back</NavLink>
            </button>
        </main>
    </>)
}