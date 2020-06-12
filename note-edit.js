var titleElement = document.querySelector('#note-title');
var bodyElement = document.querySelector('#note-body');
var removeElement = document.querySelector('#remove-note');
var noteId = location.hash.substring(1);
var notes = getSavedNotes();
var note = notes.find(function(note) {
    return note.id === noteId
});

if (note === undefined) {
    location.assign('/index.html')
}

titleElement.value = note.title;
bodyElement.value = note.body;

titleElement.addEventListener('input', function(evt) {
    note.title = evt.target.value;
    saveNotes(notes);
})

bodyElement.addEventListener('input', function(evt) {
    note.body = evt.target.value;
    saveNotes(notes)
})

removeElement.addEventListener('click', function(evt) {
    removeNote(note.id);
    saveNotes(notes);
    location.assign('/index.html')
})