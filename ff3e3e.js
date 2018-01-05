// https://haacked.com/archive/2009/12/29/convert-rgb-to-hex.aspx/
function rgbToHex(color) {
    if (color.substr(0, 1) === '#') {
        return color;
    }
    var digits = /(.*?)rgb\((\d+), (\d+), (\d+)\)/.exec(color);

    console.log(color, digits);

    var red = parseInt(digits[2]);
    var green = parseInt(digits[3]);
    var blue = parseInt(digits[4]);

    var rgb = blue | (green << 8) | (red << 16);
    return digits[1] + '#' + rgb.toString(16);
};

function generateColor() {

    var h_rand = 0;
    /*
    if (Math.random() > 0.5) {
        h_rand = Math.floor(Math.random() * (360 - 355 + 1) + 355);

    } else {
        h_rand = Math.floor(Math.random() * (5 - 0 + 1) + 5);;
    }*/


    var s_rand;

    if (Math.random() > 0.5) {
        s_rand = Math.floor(Math.random() * (100 - 50 + 1) + 50);

    } else {
        s_rand = 100;
    }

    var l_rand = Math.floor(Math.random() * (70 - 20 + 1) + 20);


    console.log("---------");
    console.log(h_rand, s_rand, l_rand);
    console.log("---------");

    document.querySelector("#bk_c").style.backgroundColor = "hsla(" + h_rand + ", " + s_rand + "%, " + l_rand + "%, 1)";

    // just in case

    var s_rand_formatted = parseFloat("0." + s_rand);
    var l_rand_formatted = parseFloat("0." + l_rand);

    if (s_rand == 100) {
        s_rand_formatted = 1;
    }
    if (l_rand == 100) {
        l_rand_formatted = 1;
    }

    console.log(s_rand_formatted);
    console.log(l_rand_formatted);

    var hexValue = rgbToHex(bk_c.style.backgroundColor);

    document.querySelector("#hexcolor").innerHTML = hexValue;

    document.querySelector("#hexcolor").style.color = hexValue;

    document.title = hexValue + " - Shade of Red";

}

window.onload = generateColor;