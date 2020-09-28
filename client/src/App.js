import React from 'react';
import NoteList from './components/NoteList';
import NoteForm from './components/NoteForm';

import NoteStore from './stores/NoteStore';
import NoteAction from './actions/NoteAction';



class App extends React.Component {
  constructor(){
    super()
    this.state = {
      isLoading: NoteStore.isLoading(),
      notes: NoteStore.getNotes()
    }
    
    this._onChange = this._onChange.bind(this)
    this.handleNoteDelete = this.handleNoteDelete.bind(this)
    this.handleNoteAdd = this.handleNoteAdd.bind(this)
  }
  
  _onChange() {
    this.setState({
      isLoading: NoteStore.isLoading(),
      notes: NoteStore.getNotes()
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

  handleNoteAdd(noteData) {
    NoteAction.createNote(noteData);
  }


  render(){
    const {notes} = this.state
    return (
      <div className="App">
        <NoteForm NoteAdd={this.handleNoteAdd}/>
        <NoteList NoteDel={this.handleNoteDelete} notes={notes}/>
      </div>
    );
  }
  
}

export default App;
