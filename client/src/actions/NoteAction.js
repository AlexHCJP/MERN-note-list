import Dispatcher from '../dispatcher'
import NoteConstans from '../constans/NoteConstans'

import NoteApi from '../api/NoteApi'

const NoteActions = {
    loadNotes() {
        Dispatcher.dispatch({
            type: NoteConstans.LOAD_NOTES_REQUEST
        });

        NoteApi.listNotes()
            .then(({ data }) =>
            Dispatcher.dispatch({
                type: NoteConstans.LOAD_NOTES_SUCCESS,
                notes: data
            })
        ).catch(err =>
            Dispatcher.dispatch({
                type: NoteConstans.LOAD_NOTES_FAIL,
                error: err
            })
        );
    },

    createNote(note) {
        NoteApi.createNote(note).then(() =>
            this.loadNotes()
        ).catch(err =>
            console.error(err)
        );
    },

    deleteNote(noteId) {
        NoteApi.deleteNote(noteId).then(() =>
            this.loadNotes()
        ).catch(err =>
            console.error(err)
        );
    }
};

export default NoteActions;