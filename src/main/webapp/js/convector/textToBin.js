/**
 * Created by user on 20.05.2017.
 */
var convertToBin = function (table) {

    console.log("before converting: " + table);

    var value1 = fromUnicToDec(table.charCodeAt(0));
    var value2 = fromUnicToDec(table.charCodeAt(1));

    var result = value1 * 16 + value2;
    console.log("the symbol " + table + " in bin code is " + result);

};

var fromUnicToDec = function (value) {
    value -= 48;

    if (value > 9) {
        value -= 7;
    }

    return value;
};