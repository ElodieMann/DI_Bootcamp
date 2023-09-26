const fs = require('fs');

const addNote = (title, body) => {
    const notes = loadNotes();

    const duplicateNote = notes.find((note) => note.title === title);

    if (!duplicateNote) {
        notes.push({ title, body });
        saveNotes(notes);
        console.log('Note added!');
    } else {
        console.log('Note title already exists!');
    }
};


const readNote = (title) => {
    const notes = loadNotes();
    const note = notes.find((note) => note.title === title);

    if (note) {
        console.log(`Title: ${note.title}`);
        console.log(`Body: ${note.body}`);
    } else {
        console.log('Note not found.');
    }
};

const listNotes = () => {
    const notes = loadNotes();
    console.log('Your Notes:');
    notes.forEach((note) => console.log(`- ${note.title}`));
};

const removeNote = (title) => {
    const notes = loadNotes();
    const updatedNotes = notes.filter((note) => note.title !== title);

    if (notes.length > updatedNotes.length) {
        saveNotes(updatedNotes);
        console.log('Note removed!');
    } else {
        console.log('Note not found.');
    }
};

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (error) {
        return [];
    }
};

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
};

module.exports = {
    addNote,
    readNote,
    listNotes,
    removeNote,
};
