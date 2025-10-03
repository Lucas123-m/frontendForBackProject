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

    const audio = useRef(null) //esto no funciona con useState porque es ASINCRONO. Entonces, audio.play() sucede aun sin estar seteado audio al montarse el componente.
    //useRef se inicializa al montarse y despues se puede mutar sin generar re-renderizar!
    //ademas, se mantiene el valor al re-renderizar tambien! Es persistente.
    //una variable con var / let se redefine con cada renderizado.
    //useState permite modificar PERO genera un renderizado siempre. Y ademas, no es sincrono.
    
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

    useEffect(() => {
        //https://stackoverflow.com/questions/54114171/how-to-play-an-mp3-once-onclick-in-react
        /*setAudio(new Audio(bocchi_ost))
        if (audio){
            audio.play()
        }*/
        const music = [{src: bocchi_ost,id:"1"},{src:aob_ost,id:"2"}]
        audio.current = new Audio(music.filter((music_obj)=>music_obj.id===id)[0].src)
        audio.current.play() // esto es SINCRONO. Se define audio.current y despues se le da play.
        //como es un useEffect con [], solo se ejecuta al montarse inicialmente, no se ejecutar al re-renderizar-
        //despues, se pausa al desmontarse el componente, es decir, salir de la seccion!
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