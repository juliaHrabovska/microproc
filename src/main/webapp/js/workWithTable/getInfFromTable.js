/**
 * Created by user on 15.05.2017.
 */

var getInformationFromTable = function () {
    var table = [];
    var cell = "cell";
    for (var i = 0; i < 256; i++) {
        cell += i;
        table.push(document.getElementById(cell).getAttribute("value"));
        cell = "cell";
    }
    console.log("Table:");
    for (var i = 0; i < table.length; i++) {
        console.log(table[i]);
    }

    return table;
};

var generOutFile = function (arr) {
    var out = "";

    var id = 0;
    for (var i = 0; i < 16; i++) {
        for (var j = 0; j < 16; j++) {
            out += arr[id] + " ";
            console.log(id + "   " + arr[id]);
            id++;
        }
        out += "\u000D" + "\u000A";
    }

    console.log(out);
    return out;
};

