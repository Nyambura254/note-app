// //query all paragraphs
// var paragraphs = document.querySelectorAll("p");

// paragraphs.forEach(function(para) {
//     para.textContent = "great cities";
// });

//add a new element
// var newParagraph = document.createElement("p");
// newParagraph.textContent = "Cairo is a great place";
// document.querySelector("body").appendChild(newParagraph);


// var notes = [{
//         title: "new trip",
//         body: "heading to valencia",
//     },
//     {
//         title: "designing houses",
//         body: "architecture magazine",
//     },
// ];

// var filters = {
//     searchText: "",
// };

// var renderNotes = function(notesData, filtersData) {
//     var filteredNotes = notesData.filter(function(note) {
//         return note.title
//             .toLowerCase()
//             .includes(filtersData.searchText.toLowerCase());
//     });

//     document.querySelector("#notes").innerHTML = "";

//     filteredNotes.forEach(function(note) {
//         var noteEl = document.createElement("p");
//         noteEl.textContent = note.title;
//         document.querySelector("#notes").appendChild(noteEl);
//     });
// };

// renderNotes(notes, filters);

// // click button (create note)
// document.querySelector("#create-note").addEventListener("click", (evt) => {
//     evt.target.textContent = "The button was clicked";
// });

// document.querySelector("#search-text").addEventListener("input", (evt) => {
//     filters.searchText = evt.target.value;
//     renderNotes(notes, filters);
// });


//more approach
// //query all paragraphs
// var paragraphs = document.querySelectorAll("p");

// paragraphs.forEach(function(para) {
//     para.textContent = "great cities";
// });

//add a new element
// var newParagraph = document.createElement("p");
// newParagraph.textContent = "Cairo is a great place";
// document.querySelector("body").appendChild(newParagraph);


var notes = [];

var filters = {
    searchText: "",
};
// Check for existing saved data
var notesJSON = localStorage.getItem("notes");

if (notesJSON !== null) {
    notes = JSON.parse(notesJSON);
}

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
    var textEl = document.createElement("span");
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
    noteEl.appendChild(textEl);

    return noteEl;
};

var saveNotes = function(notes) {
    localStorage.setItem("notes", JSON.stringify(notes));
};

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

renderNotes(notes, filters);

// click button (create note)
document.querySelector("#create-note").addEventListener("click", (evt) => {
    notes.push({
        id: uuid(),
        title: "",
        body: "",
    });
    saveNotes(notes);
    renderNotes(notes, filters);
});

document.querySelector("#search-text").addEventListener("input", (evt) => {
    filters.searchText = evt.target.value;
    renderNotes(notes, filters);
});
