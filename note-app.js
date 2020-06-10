// //query all paragraphs
// var paragraphs = document.querySelectorAll("p");

// paragraphs.forEach(function(para) {
//     para.textContent = "great cities";
// });

//add a new element
// var newParagraph = document.createElement("p");
// newParagraph.textContent = "Cairo is a great place";
// document.querySelector("body").appendChild(newParagraph);


var notes = [{
        title: "new trip",
        body: "heading to valencia",
    },
    {
        title: "designing houses",
        body: "architecture magazine",
    },
];

var filters = {
    searchText: "",
};

var renderNotes = function(notesData, filtersData) {
    var filteredNotes = notesData.filter(function(note) {
        return note.title
            .toLowerCase()
            .includes(filtersData.searchText.toLowerCase());
    });

    document.querySelector("#notes").innerHTML = "";

    filteredNotes.forEach(function(note) {
        var noteEl = document.createElement("p");
        noteEl.textContent = note.title;
        document.querySelector("#notes").appendChild(noteEl);
    });
};

renderNotes(notes, filters);

// click button (create note)
document.querySelector("#create-note").addEventListener("click", (evt) => {
    evt.target.textContent = "The button was clicked";
});

document.querySelector("#search-text").addEventListener("input", (evt) => {
    filters.searchText = evt.target.value;
    renderNotes(notes, filters);
});