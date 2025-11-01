console.log("Script loaded!");


function moveTheThing() {
        const thing = document.getElementById("theThing");
        const leftBlock = document.getElementById("leftBlock");
        const rightBlock = document.getElementById("rightBlock");
        if (leftBlock.contains(thing)) {
            rightBlock.appendChild(thing);
        }   else {
            leftBlock.appendChild(thing);
        }
    }

function styleTheText() {
  const text = document.getElementById("fancyText");
  text.style.color = "#67fabc";
  text.style.fontFamily = "Verdana";
  text.style.fontSize = "2em";
}

function getFormValues(){
  const first = document.getElementById("firstField").value;
  const second = document.getElementById("secondField").value;
  const third = document.getElementById("thirdField").checked ? "Checked" : "Not checked";

  document.getElementById("firstResult").textContent = first;
  document.getElementById("secondResult").textContent = second;
  document.getElementById("thirdResult").textContent = third;
}

function countTheStuff(){
  document.getElementById("countOfP").textContent = document.getElementsByTagName("p").length;
  document.getElementById("countOfH2").textContent = document.getElementsByTagName("h2").length;
  document.getElementById("countOfTD").textContent = document.getElementsByTagName("td").length;
}

function addNewRow(){
    const table = document.getElementById("addRowsTable");
    const rowCount = table.rows.length - 1;
    const newRow = table.insertRow();
    const newCell = newRow.insertCell();
    newCell.textContent = rowCount;
}

function yourBonusChallenge(){
    // Your code here
}