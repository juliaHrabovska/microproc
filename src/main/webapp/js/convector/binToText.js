/**
 * Created by user on 20.05.2017.
 */

var convertToText = function () {

    console.log("before converting: " + 137);

    var whole = 137 / 16;
    var fraction = 137 % 16;

    whole = Math.floor(whole);

    if (whole > 9) {
        whole = convertLetter(whole);
    }

    if (fraction > 9) {
        fraction = convertLetter(fraction);
    }

    var result = "&#" + whole + "&#" + fraction;
    console.log("the symbol " + 137 + " in bin code is " + result);

};

var convertLetter = function (value) {
    return value += 55;
};
