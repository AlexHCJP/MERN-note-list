import React from 'react'
import './index.css'
const Note = ({NoteDel, NoteEdit, note}) => {
    return(
        <div className="note">
        	<div className="header">
                <div className="header-title">
                    <h5 className="title">{note.title}</h5>
                </div>
                <div className="header-btn">
                    <button className="btn-del" onClick={()=>{NoteDel(note.id)}}>Del</button>
                    <button className="btn-del" onClick={()=>{NoteEdit(note)}}>Edit</button>
                </div>
        	</div>
            <p className="description">{note.description}</p>
        </div>
    )
}
export default Note