import React from 'react'
import './index.css';
class NoteForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            title: null,
            description: null,
        }
        this.handleClick = this.handleClick.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }
    handleClick = ev => {
        ev.preventDefault()
        this.props.NoteAdd(this.state);
        console.log(this.state)
    }
    handleChange = ev => {
        this.setState({
            [ev.target.name] : ev.target.value
        })
    }
    render(){
        return (
            <div className="form">
                <div className="note-form">
                    <input placeholder="Title" name="title" className="titleF" onChange={this.handleChange}/>
                    <textarea placeholder="Description" name="description" className="descriptionF" onChange={this.handleChange}></textarea>
                    <button onClick={this.handleClick}>Create Note</button>
                </div>
            </div>
        )
    }
}

export default NoteForm