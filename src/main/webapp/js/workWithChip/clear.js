/**
 * Created by user on 19.05.2017.
 */

document.getElementById('clear').onclick = function () {
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
    var id = 0;
    var cell;
    for (var i = 0; i < 16; i++) {
        table += '<tr>';
        table += '<th>' + "0000" + '</th>';
        for (var j = i * 16; j < (i + 1) * 16; j++) {
            cell = "cell" + id;
            table += '<td id="td' + id + '">' + '<input size="1" type="text" value="00" class="input-text"' +
                'id="cell' + id + '" pattern="[0-9A-F]{2}" maxlength="2" onchange="changeInf(' + cell + ');" required>' + '</td>';
            cell = "";
            id++;
        }

        table += '</tr>';
    }
    table += '</tbody>';
    table += '</table>';
    document.getElementById("memory-table").innerHTML = table;
};
