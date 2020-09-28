import mongoose from "mongoose";

import '../models/Notes';

const Note = mongoose.model('Note');

const noteController = {
    listNotes() {
        return Note.find();
    },
    note(id) {
        return Note.findById(id);
    },
    createNote(data) {
        const note = new Note({
            title: data.title,
            description: data.description,
            createdAt: new Date()
        });
        return note.save();
    },
    deleteNote(_id) {
        return Note.deleteOne({ _id})
    },
    updateNote(_id, data) {
        return Note.updateOne({ _id}, { $set: { title: data.title, description: data.description }})
    }
}

export default noteController