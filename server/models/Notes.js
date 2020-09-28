import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const NoteSchema = new Schema({
    title: String,
    description: String,
    createdAt: Date
})

mongoose.model('Note', NoteSchema);