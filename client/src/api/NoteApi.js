import Axios from 'axios'

const apiPrefix = "http://localhost:3030"
export default {
    listNotes() {
        return Axios.get(`${apiPrefix}/notes`);
    },

    createNote(data) {
        return Axios.post(`${apiPrefix}/note`, data);
    },

    deleteNote(noteId) {
        return Axios.delete(`${apiPrefix}/note/${noteId}`);
    }
}