import "./tableContent.css"
import { NavLink } from 'react-router-dom';

export default function TableAnimeContent({data,onDelete}) {
    const deleteContent = async(id)=>{
        const url_api = `http://localhost:3000/animes/series`
        const response = await fetch(`${url_api}/contents/${id}`,{method: "DELETE"})
        const data = await response.json()
        console.log(data)
        onDelete()
    }
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
                    {data.map(({id,title_content,type,watch_order,chapters,review,duration})=>
                        <tr key={id}>
                            <td>{id}</td>
                            <td>{title_content}</td>
                            <td>{type}</td>
                            <td>{watch_order}</td>
                            <td>{chapters}</td>
                            <td>{review}</td>
                            <td>{duration}</td>
                            <td>
                                <button >                
                                    <NavLink to={`/content/edit/${id}`} className="edit link">
                                        Edit
                                    </NavLink>
                                </button>
                            </td>
                            <td><button onClick={()=>{deleteContent(id)}}>Delete</button></td>
                        </tr>
                    )} 
                </tbody>
            </table>
        </>
    )
}