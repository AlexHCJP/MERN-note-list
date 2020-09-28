import React from 'react';
import NoteList from './NoteList';
import NoteForm from './NoteForm';

import NoteStore from '../stores/NoteStore';
import NoteAction from '../actions/NoteAction';



class App extends React.Component {
  constructor(){
    super()
    this.state = {
      isLoading: NoteStore.isLoading(),
      notes: NoteStore.getNotes(),
      updateNote: null
    }
    
    this._onChange = this._onChange.bind(this)
    this.handleNoteDelete = this.handleNoteDelete.bind(this)
    this.handleNoteAdd = this.handleNoteAdd.bind(this)
    this.handleNoteUpdate = this.handleNoteUpdate.bind(this)
    this.handleNoteEdit = this.handleNoteEdit.bind(this)
  }
  
  _onChange() {
    this.setState({
      isLoading: NoteStore.isLoading(),
      notes: NoteStore.getNotes(),
      updateNote: null
    });
  }
  
  componentWillMount() {
    NoteAction.loadNotes();
  }

  componentDidMount() {
    NoteStore.addChangeListener(this._onChange);
  }

  componentWillUnmount() {
    NoteStore.removeChangeListener(this._onChange);
  }

  handleNoteDelete(id) {
    NoteAction.deleteNote(id);
  }

  handleNoteUpdate(data) {
    NoteAction.updateNote(data);
  }

  handleNoteEdit(note) {
    this.setState({updateNote: note})
  }

  handleNoteAdd(noteData) {
    NoteAction.createNote(noteData);
    this.setState({updateNote: null})
  }


  render(){
    const {notes, updateNote} = this.state
    return (
      <div className="App">
        <NoteForm NoteAdd={this.handleNoteAdd} NoteUpdate={this.handleNoteUpdate} note={updateNote}/>
        <NoteList NoteDel={this.handleNoteDelete} NoteEdit={this.handleNoteEdit} notes={notes}/>
      </div>
    );
  }
  
}

export default App;
