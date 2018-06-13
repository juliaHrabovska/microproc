/**
 * Created by user on 02.04.2017.
 */

var openFile = function () {
    var input = document.createElement('input');
    input.type = 'file';

    input.onchange = function () {
        var fileReader = new FileReader();
        fileReader.onload = function (info) {
            var arr = ((info.target.result).toString()).split(/[\s]+/);
            createTable(arr);
        };

        fileReader.readAsText(this.files[0]);
    };
    input.click();
};

var createTable = function (arr) {
    var table = "";
    table += '<table class=\" table table-bordered \">';
    table += '<thead>';
    table += '<tr>';
    table += '<th>' + "" + '</th>';
    for (var i = 48; i < 58; i++) {
        table += "<th>0" + String.fromCharCode(i) + '</th>';
    }

    for (var i = 65; i < 71; i++) {
        table += "<th>0" + String.fromCharCode(i) + '</th>';
    }

    table += '</tr>';
    table += '</thead>';

    table += '<tbody>';
    var id = 16;
    for (var i = 0; i < 16; i++) {
        table += '<tr>';
        table += '<th>' + "0000" + '</th>';
        var cell;
        if (i == 0) {
            for (var j = 0; j < 16; j++) {
                cell = "cell" + j;
                table += '<td id="td' + j + '">' + '<input size="1" type="text" value="' + arr[j] + '" class="input-text"' +
                    'id="cell' + j + '" pattern="[0-9A-F]{2}" maxlength="2" onchange="changeInf(' + cell + ');" required>' + '</td>';
                cell = "";
            }
        } else {
            for (var j = i * 16; j < (i + 1) * 16; j++) {
                cell = "cell" + id;
                table += '<td id="td' + id + '">' + '<input size="1" type="text" value="' + arr[j] + '" class="input-text"' +
                    'id="cell' + id + '" pattern="[0-9A-F]{2}" maxlength="2" onchange="changeInf(' + cell + ');" required>' + '</td>';
                cell = "";
                id++;
            }
        }

        table += '</tr>';
    }
    table += '</tbody>';
    table += '</table>';
    document.getElementById("memory-table").innerHTML = table;
};