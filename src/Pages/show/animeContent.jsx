import { useEffect, useState, useRef } from "react"
import TableAnimeContent from "../../components/container/tableContent"
import { NavLink,useParams } from "react-router-dom"
import aob_ost from '../../../dist/assets/aob_ost.mp3'
import bocchi_ost from '../../../dist/assets/bocchi_ost.mp3'

export default function AnimeContent(){
    const { id } = useParams()
    const [title,setTitle] = useState("")
    const [data,setData] = useState([])
    const [deleted,setDelete] = useState(false)
    const music = [{src: bocchi_ost,id:"1"},{src:aob_ost,id:"2"}]
    var audio = useRef()
    //new Audio(music.filter((music_obj)=>music_obj.id===id)[0].src)
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
        audio.current = new Audio(music.filter((music_obj)=>music_obj.id===id)[0].src)
        audio.current.play()
    },[deleted])

    useEffect(() => {
        //https://stackoverflow.com/questions/54114171/how-to-play-an-mp3-once-onclick-in-react
        return () => {
            audio.current.pause()
        }
    }, [])
    const onDelete = async ()=>{
        setDelete(true)
    }
    return (<>
        <h1 className="title">Contents: </h1>
        <main>
            <div className="sectionAdd">
                <div className="dataToModify">
                    <div className="formGroup">  
                        <label htmlFor="id">ID serie: </label>
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
            <div>
                <button type="button" className="btn-edit-form btn-go">
                    <NavLink to="/content/new/" state={{id: id}} className="go-back-link link">Add content</NavLink>
                </button>
                <button type="button" className="btn-edit-form btn-go">
                    <NavLink to="/" className="go-back-link link">Go back</NavLink>
                </button>
            </div>
        </main>
    </>)}