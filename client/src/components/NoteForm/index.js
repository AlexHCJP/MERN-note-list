import React from 'react'
import './index.css';
class NoteForm extends React.Component {
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this)
        this.isEmptyNote = this.isEmptyNote.bind(this)
        this.formNote = this.formNote.bind(this)
        this.titleRef = React.createRef()
        this.descriptionRef = React.createRef()
    }
    handleClick = ev => {
        ev.preventDefault()

        const {NoteAdd, NoteUpdate, note} = this.props
        if(!note){
            NoteAdd(this.formNote());
        }else{
            NoteUpdate({
                id: note.id, 
                ...this.formNote()
            })
        }
        this.titleRef.current.value = ""
        this.descriptionRef.current.value = ""
    }
    isEmptyNote(val1, val2 = null){
        return (this.props.note)? val1 : val2
    }
    componentDidUpdate(){
        const {note} = this.props
        if(note){
            this.titleRef.current.value = note.title
            this.descriptionRef.current.value = note.description
        }
    }
    formNote(){
        return {
            title: this.titleRef.current.value,
            description: this.descriptionRef.current.value, 
        }
    }
    render(){
        const {note} = this.props
        return (
            <div className="form">
                <div className="note-form">
                    <input placeholder="Title" 
                        name="title" 
                        className="titleF"
                        ref={this.titleRef}/>
                    <textarea 
                        placeholder="Description" 
                        name="description" 
                        className="descriptionF" 
                        ref={this.descriptionRef}/>
                    <button onClick={this.handleClick}>{ this.isEmptyNote("Update", "Create")} Note</button>
                </div>
            </div>
        )
    }
}

export default NoteForm