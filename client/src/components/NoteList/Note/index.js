import React from 'react'
import './index.css'
const Note = ({NoteDel, id, title, description}) => {
    return(
        <div className="note">
        	<div className="header">
                <div className="header-title">
                    <h5 className="title">{title}</h5>
                </div>
                <div className="header-btn">
                    <button className="btn-del" onClick={()=>{NoteDel(id)}}>X</button>
                </div>
        	</div>
            <p className="description">{description}</p>
        </div>
    )
}
export default Note