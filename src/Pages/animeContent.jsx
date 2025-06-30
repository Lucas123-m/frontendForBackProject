import { useEffect, useState } from "react"
import TableAnimeContent from "../components/tableContent"
import { NavLink,useParams } from "react-router-dom"

export default function AnimeContent(){
    const { id } = useParams()
    const [title,setTitle] = useState("")
    const [data,setData] = useState([])
    const [deleted,setDelete] = useState(false)
    useEffect(()=>{
        const fetchTitle = async()=>{
            const res = await fetch(`http://localhost:3000/animes/series/${id}`);
            const dataTitle = await res.json();
            setTitle(dataTitle[0].title)
        }
        const fetchData = async ()=>{
            const res = await fetch(`http://localhost:3000/animes/series/contents`);
            const dataObtenida = await res.json();
            const dataFiltered = await dataObtenida.filter(content=>content.id_serie==id)
            setData(dataFiltered)
        }
        fetchTitle()
        fetchData()
        setDelete(false)
    },[deleted])
    const onDelete = async ()=>{
        setDelete(true)
    }
    if (data.length == 0 || title.length==0) {
        return (<><p>Cargando datos...</p></>)
    }
    console.log(data,title)
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
            <TableAnimeContent data={data} onDelete={onDelete}></TableAnimeContent>
            <button type="button" className="btns-edit btn-go">
                <NavLink to="/" className="go-back-link link">Go back</NavLink>
            </button>
        </main>
    </>)}