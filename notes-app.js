var notes = [
  {
    title: "my next trip",
    body: "would like to go to barcelona",
  },
  {
    title: "Habits to work on",
    body: "Exercise, Reading and focusing",
  },
  {
    title: "Fashion design event",
    body: "That will be New York or Paris",
  },
];

var filters = {
  searchText: "",
};

var renderNotes = function notesapp(notes, filters) {
  var filteredNotes = notes.filter(function (note) {
    return note.title.toLowerCase().includes(filters.searchText.toLowerCase());
  });

  document.querySelector("#notes").innerHTML = "";

  filteredNotes.forEach(function (note) {
    var noteEl = document.createElement("p");
    noteEl.textContent = note.title;
    document.querySelector("#notes").appendChild(noteEl);
  });
};

renderNotes(notes, filters);

document
  .querySelector("#create-note")
  .addEventListener("click", function (evt) {
    evt.target.textContent = "The button was clicked";
  });

document.querySelector("#remove-all").addEventListener("click", function () {
  document.querySelectorAll(".note").forEach(function (note) {
    note.remove();
  });
});

document
  .querySelector("#search-text")
  .addEventListener("input", function (evt) {
    filters.searchText = evt.target.value;
    renderNotes(notes, filters);
  });
