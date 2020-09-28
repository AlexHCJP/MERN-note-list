import React from 'react'
import Masonry from 'react-masonry-css';
import Note from './Note';
import './index.css'

const NoteList = ({notes, NoteDel, NoteEdit}) => {
    const breakpointColumns= {
        default: 4,
        1100: 3,
        700: 2,
        500: 1
    };
    
    if(notes)
    {
        notes = notes.map((note, ind)=> {
            return <Note key={ind} NoteDel={NoteDel} NoteEdit={NoteEdit} note={note}/>
        })
        return (
            <div>
                <Masonry
                    className="noteList"
                    breakpointCols={breakpointColumns}
                    columnClassName="col">
                    {notes}
                </Masonry>
            </div> 
        );
    }
    else return <Empty/>
}
const Empty = () => {
    return (
        <div className="empty">
            <p>Note list empty...</p>
        </div>
    )
}
export default NoteList