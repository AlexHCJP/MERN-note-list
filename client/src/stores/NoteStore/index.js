import { EventEmitter } from 'events';
import Dispatcher from '../../dispatcher'
import NoteContstans from '../../constans/NoteConstans'


function formatNote(note) {
    return {
        id: note._id,
        title: note.title,
        description: note.description,
    };
}

const CHANGE_EVENT = 'change';

let _notes = [];
let _loadingError = null;
let _isLoading = true;

const TasksStore = Object.assign({}, EventEmitter.prototype, {
    isLoading() {
        return _isLoading;
    },

    getNotes() {
        return _notes;
    },

    emitChange: function() {
        this.emit(CHANGE_EVENT);
    },

    addChangeListener: function(callback) {
        this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }
});




Dispatcher.register(function(action) {
    switch(action.type) {
        case NoteContstans.LOAD_NOTES_REQUEST: {
            _isLoading = true;
            TasksStore.emitChange();
            break;
        }

        case NoteContstans.LOAD_NOTES_SUCCESS: {
            _isLoading = false;
            _notes = action.notes.map( formatNote );
            _loadingError = null;

            TasksStore.emitChange();
            break;
        }

        case NoteContstans.LOAD_NOTES_FAIL: {
            _loadingError = action.error;

            TasksStore.emitChange();
            break;
        }

        default: {
            console.log('No such handler');
        }
    }
});

export default TasksStore;