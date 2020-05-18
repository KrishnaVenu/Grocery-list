let itemArray = [];
function displayJSONData() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var response = JSON.parse(this.responseText);
            generate_table(response);
        }
    };
    xhttp.open("GET", "shopping.json", true);
    xhttp.send();
}

function addItem() {
    var sNo = parseInt(document.getElementById("serialNumber").value);
    var iName = document.getElementById("itemName").value;
    var qty = parseInt(document.getElementById("quantity").value);
    var unit = document.getElementById("units").value;
    var dept = document.getElementById("department").value;
    var note = document.getElementById("notes").value;
    class ItemObj {
        constructor(sNo, iName, qty, unit, dept, note) {
            this.SerialNo = sNo;
            this.Name = iName;
            this.Quantity = qty;
            this.Unit = unit;
            this.Department = dept;
            this.Notes = note;
        }
    }
    var obj = new ItemObj(sNo, iName, qty, unit, dept, note);
    itemArray.push(obj);
    document.getElementById("myForm").reset();
    console.log(itemArray);
}

function displayArrayData() {
    if (itemArray && itemArray.length) {
        // not empty
        generate_table(itemArray);
    } else {
        // empty
        var divShowData = document.getElementById('showData');
        divShowData.innerHTML = "You have not entered any new items.";
    }
}

function generate_table(data) {
    console.log(data);
    // Extract value from table header. 
    var col = [];
    for (var i = 0; i < data.length; i++) {
        for (var key in data[i]) {
            if (col.indexOf(key) === -1) {
                col.push(key);
            }
        }
    }
    // Create a table.
    var table = document.createElement("table");
    // Create table header row using the extracted headers above.
    var tr = table.insertRow(-1);                   // table row.

    for (var i = 0; i < col.length; i++) {
        var th = document.createElement("th");      // table header.
        th.innerHTML = col[i];
        tr.appendChild(th);
    }

    // add json data to the table as rows.
    for (var i = 0; i < data.length; i++) {

        tr = table.insertRow(-1);

        for (var j = 0; j < col.length; j++) {
            var tabCell = tr.insertCell(-1);
            tabCell.innerHTML = data[i][col[j]];
        }
    }

    // Now, add the newly created table with json data, to a container.
    var divShowData = document.getElementById('showData');
    divShowData.innerHTML = "";
    divShowData.appendChild(table);
}






