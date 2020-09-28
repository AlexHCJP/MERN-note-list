import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import { port } from 'config';
import noteController from './controllers/noteController'
import * as db from './db';

// Initialization of express application
const app = express();

// Set up connection of database
db.setUpConnection();
// Using bodyParser middleware
app.use( bodyParser.json() );
// Allow requests from any origin
app.use(cors({ origin: '*' }));

// RESTful api handlers
app.get('/notes', (req, res) => {
    noteController.listNotes().then(data => {res.send(data)});
});

app.post('/note', (req, res) => {
    noteController.createNote(req.body).then(data => res.send(data));
});

app.delete('/note/:id', (req, res) => {
    noteController.deleteNote(req.params.id).then(data => res.send(data));
});

app.put('/note/:id', (req, res) => {
    noteController.updateNote(req.params.id, req.body).then(data => res.send(data));
});

app.listen(port, function() {
    console.log(`Server is up and running on port ${port}`);
});