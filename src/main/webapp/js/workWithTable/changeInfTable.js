/**
 * Created by user on 21.05.2017.
 */

function changeInf(cell) {
    console.log(cell);
    var cellId = cell.id;
    console.log(id);
    var id;
    if (cellId.length == 5) {
        id = cellId.charAt(cellId.length - 1);
    } else {
        id = cellId.charAt(cellId.length - 2) + cellId.length - 1;
    }

    console.log(id);
    var value = (cell.value);
    console.log(value);
    document.getElementById('td' + id).innerHTML = '<input size="1" type="text" value="' + value + '" class="input-text" id="' +
        cellId + '" pattern="[0-9A-F]{2}" maxlength="2" onchange="changeInf(' + cellId + ' );" required="">';
    // document.getElementById(cell).setAttribute('value', value);
    // console.log(document.getElementById(cell));
};