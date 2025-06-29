import { useEffect, useState } from "react"
import "./tableContent.css"


export default function TableAnimeContent(id) {

    const [data,setData] = useState([])
    const [changes,setChanges] = useState(false)
    const url_api = `http://localhost:3000/animes/series`
    console.log("id en TableAnimeContent:",id.id,typeof(id.id))

    useEffect(()=>{
        const getData = async () => {
            const response = await fetch(`${url_api}/contents`)
            const data = await response.json()
            setData(data)
            setChanges(false)
        }
        getData()
    },[changes])


    const dataFiltered = data.filter((content)=> {
        return content.id_serie==id.id
    })
    console.log(dataFiltered)

    return (
        <>
            <table className="tableAnimeContent">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Title</th>
                        <th>Type</th>
                        <th>Watch Order</th>
                        <th>Chapters</th>
                        <th>Review</th>
                        <th>Duration</th>
                        <th colSpan="2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {dataFiltered.map(({id,title_content,type,watch_order,chapters,review,duration})=>
                        <tr key={id}>
                            <td>{id}</td>
                            <td>{title_content}</td>
                            <td>{type}</td>
                            <td>{watch_order}</td>
                            <td>{chapters}</td>
                            <td>{review}</td>
                            <td>{duration}</td>
                            <td><button>Edit</button></td>
                            <td><button>Delete</button></td>
                        </tr>
                    )} 
                </tbody>
            </table>
        </>
    )
}