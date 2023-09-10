
function add() {
    var name = document.getElementById("name").value
    var surname = document.getElementById("surname").value
    var age = document.getElementById("age").value

    if(name === ""|| surname ==="" || age < 1){
        alert("Įveskite duomenys")
        return
    }

    var table = document.getElementById("myTable").getElementsByTagName("tbody")[0]
    var newRow = table.insertRow(table.rows.length)
    var row1 = newRow.insertCell(0)
    var row2 = newRow.insertCell(1)
    var row3 = newRow.insertCell(2)
    row1.innerHTML = name
    row2.innerHTML = surname
    row3.innerHTML = age
    

    document.getElementById("name").value = ""
    document.getElementById("surname").value = ""
    document.getElementById("age").value = ""
}

function deleteLast() {
    var table = document.getElementById("myTable").getElementsByTagName("tbody")[0]
    var rowCount = table.rows.length
    if (rowCount > 0) {
        table.deleteRow(rowCount - 1)
    }
    else {
        alert("Nebėra ką trinti")
    }
}

function deleteFirst() {
    var table = document.getElementById("myTable").getElementsByTagName("tbody")[0]
    if (table.rows.length > 0) {
        table.deleteRow(0)
    }
    else {
        alert("Nebėra ką trinti")
    }
}
