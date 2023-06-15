
function insert_Row() {
  var table = document.getElementById("sampleTable");
  var newRow = table.insertRow(0);

  var newCell1 = newRow.insertCell(0);
  var newCell2 = newRow.insertCell(1);

  newCell1.innerHTML = 'New Cell1';
  newCell2.innerHTML = 'New Cell2';
}
