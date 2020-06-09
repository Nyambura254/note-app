var notes = getSavedNotes();
​
var filters = {
  searchText: "",
};
​
renderNotes(notes, filters);
​
document
  .querySelector("#search-text")
  .addEventListener("input", function (evt) {
    filters.searchText = evt.target.value;
    renderNotes(notes, filters);
  });
​
document
  .querySelector("#create-note")
  .addEventListener("click", function (evt) {
    notes.push({
      title: "travel",
      body: "egypt",
    });
    saveNotes(notes);
    renderNotes(notes, filters);
  });
