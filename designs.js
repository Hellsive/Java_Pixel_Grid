// const are less taxing memory wise vs. var
// Select color
const colorPicker = document.querySelector("#colorPicker");

// Get the form
const sizePicker = document.querySelector("#sizePicker");

// Select table
const table = document.querySelector("#pixelCanvas");

// Create a function for the submit button
sizePicker.addEventListener('submit', function makeGrid(event) {
  // Keep the grid up
  event.preventDefault();
  
  // Clear table
  table.innerHTML = "";
  
  // Select width / height
  const inputHeight = document.querySelector("#inputHeight");
  const inputWidth = document.querySelector("#inputWidth");
  
  // Get the height and width variables as constants
  const height = inputHeight.value;
  const width = inputWidth.value;
  
  // count from 0 to the max height and insert row for each count
  for (var i = 0; i < height; i++) {
    var row = table.insertRow(i);
    // count from 0 to the max width and insert cell for each count
    for (var j = 0; j < width; j++) {
      var cell = row.insertCell(j);
      // Add function to each cell, so that we can change the colors
      cell.addEventListener('click', function(event) {
        var color = colorPicker.value;
        event.target.style.backgroundColor = color;
      });
  }
}});
