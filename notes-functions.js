// Read existing notes from localStorage
// var getSavedNotes = function () {
//   var notesJSON = localStorage.getItem("notes");
//   if (notesJSON !== null) {
//     return JSON.parse(notesJSON);
//   } else {
//     return [];
//   }
// };

// // Save the notes to localStorage
// var saveNotes = function (notes) {
//   localStorage.setItem("notes", JSON.stringify(notes));
// };

// var renderNotes = function notesapp(notes, filters) {
//   var filteredNotes = notes.filter(function (note) {
//     return note.title.toLowerCase().includes(filters.searchText.toLowerCase());
//   });

//   document.querySelector("#notes").innerHTML = "";

//   filteredNotes.forEach(function (note) {
//     var noteEl = document.createElement("p");
//     noteEl.textContent = note.title;
//     document.querySelector("#notes").appendChild(noteEl);
//   });
// };


// step 2...

// Read existing notes from localStorage
var getSavedNotes = function() {
    var notesJSON = localStorage.getItem('notes');
    if (notesJSON !== null) {
        return JSON.parse(notesJSON)
    } else {
        return []
    }
}

// Save the notes to localStorage
var saveNotes = function(notes) {
    localStorage.setItem("notes", JSON.stringify(notes));
};

// Remove a note from the list
var removeNote = function(id) {
    var noteIndex = notes.findIndex(function(note) {
        return note.id === id;
    });

    if (noteIndex > -1) {
        notes.splice(noteIndex, 1);
    }
};

// Generate the DOM structure for a note
var generateNoteDOM = function(note) {
    var noteEl = document.createElement("div");
    var textEl = document.createElement("a");
    var button = document.createElement("button");

    // Setup the remove note button
    button.textContent = "x";
    noteEl.appendChild(button);
    button.addEventListener("click", function() {
        removeNote(note.id);
        saveNotes(notes);
        renderNotes(notes, filters);
    });

    if (note.title.length > 0) {
        textEl.textContent = note.title;
    } else {
        textEl.textContent = "No title";
    }
    textEl.setAttribute('href', `/edit.html#${note.id}`)
    noteEl.appendChild(textEl);

    return noteEl;
};

// Render notes
var renderNotes = function(notesData, filtersData) {
    var filteredNotes = notesData.filter(function(note) {
        return note.title
            .toLowerCase()
            .includes(filtersData.searchText.toLowerCase());
    });

    document.querySelector("#notes").innerHTML = "";

    filteredNotes.forEach(function(note) {
        var noteEl = generateNoteDOM(note);
        document.querySelector("#notes").appendChild(noteEl);
    });
};
