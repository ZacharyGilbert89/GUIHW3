// File: index.html
// GUI Assignment: Creating Your First Web Page
// Zachary Gilbert, UMass Lowell Computer Science,
// Zachary_Gilbert@student.uml.edu
// Copyright (c) 2023 by Zachary Gilbert. All rights reserved. May be freely copied or
// excerpted for educational purposes with credit to the author.
// updated by ZG on November 14th, 2023 at 11:30 AM

let minCol = 0; //global variables
let minRow = 0;
let maxCol = 0;
let maxRow = 0;

document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();//sometimes the page would glitch out, resources online said this would prevent that

    //set values for variables
    minCol = document.getElementById("minCol").value;
    maxCol = document.getElementById("maxCol").value;
    minRow = document.getElementById("minRow").value;
    maxRow = document.getElementById("maxRow").value;

    var errorDiv = document.getElementById("inputError");//gets the paragraph on where to put errors
    if((maxCol > 50 || minCol < -50) || (maxRow > 50 || minRow < -50)) {//checks to see if any of the inputs are out of range
      errorDiv.innerText = "An Input is Out of Range!!!! (-50 to 50)"; //Tells the user an input is out of range
    } else if((minCol > maxCol) || (minRow > maxRow)) {
      errorDiv.innerText = "A Min Value CANNOT Exceed a Max Value!";//Tells the user that one of their minimum inputs exceeds their respective maximum
    } else {
      errorDiv.innerText = "";//resets the error to blank
      const table = document.createElement("table");//creates the table element
      const tabledata = document.getElementById("table");//creates the tabledata that holds the rows and columns and its cell data
      tabledata.innerHTML = "";//we want to make sure that each iteration their is no table already present on the screen
      minRow -= 1;//used this to offset so we can have a top row that shows each value
      minCol -= 1;//used this to offset so we can have a left column that shows each column value
      for (let i = minRow; i <= maxRow; i++) {
        row = document.createElement("tr");//creates a row
        for (let j = minCol; j <= maxCol; j++) {//fills the row based on i*j
            colH = document.createElement("th");
            if(i == minRow) {//if its the first row
              if(i == minRow && j == minCol){//if its the first cell in the table(top right cell), we do not want to do i*j, we instead want to fill it with nothing
                colH.innerText = " ";
                row.appendChild(colH);
              } else { //since its the first row, we just want to store the j values
                colH.innerText = j;
                row.appendChild(colH);
              }
            } else if(j == minCol) {//if its the first column, we only want to fill it with i values
              colH.innerText = i;
              row.appendChild(colH);
            }else {//else it fills each cell with their respective products
              colH.innerText = j * i;
              row.appendChild(colH);
            }
        }
        table.appendChild(row);//appends all the row data
      }
      tabledata.appendChild(table);//sets the table with the table data
      }
});
