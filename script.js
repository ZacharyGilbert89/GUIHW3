let minCol = 0;
let minRow = 0;
let maxCol = 0;
let maxRow = 0;

document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
    minCol = document.getElementById("minCol").value;
    maxCol = document.getElementById("maxCol").value;
    minRow = document.getElementById("minRow").value;
    maxRow = document.getElementById("maxRow").value;
    //alert(minCol + "\n" + maxCol + "\n" + minRow + "\n" + maxRow + "\n");
    //alert("Calling CreateTable");
    //console.log(minCol + " " + maxCol + " " + minRow + " " + maxRow + " " );
    const table = document.createElement("table");
    const tabledata = document.getElementById("table");
    minRow -= 1;
    minCol -= 1;
    for (let i = minRow; i <= maxRow; i++) {
      row = document.createElement("tr");
      for (let j = minCol; j <= maxCol; j++) {
          colH = document.createElement("th");
          if(i == minRow) {
            colH.innerText = j;
            row.appendChild(colH);
          } else if(j == minCol) {
            colH.innerText = i;
            row.appendChild(colH);
          }else {
            colH.innerText = j * i;
            row.appendChild(colH);
          }
      }
      table.appendChild(row);
    }
    tabledata.appendChild(table);
});
