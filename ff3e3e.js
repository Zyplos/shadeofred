// https://stackoverflow.com/questions/2353211/hsl-to-rgb-color-conversion
function hslToRgb(h, s, l) {
    var r, g, b;

    if (s == 0) {
        r = g = b = l; // achromatic
    } else {
        var hue2rgb = function hue2rgb(p, q, t) {
            if (t < 0) t += 1;
            if (t > 1) t -= 1;
            if (t < 1 / 6) return p + (q - p) * 6 * t;
            if (t < 1 / 2) return q;
            if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
            return p;
        }

        var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        var p = 2 * l - q;
        r = hue2rgb(p, q, h + 1 / 3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1 / 3);
    }

    return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
}

// https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb
function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function generateColor() {
    var s_rand;

    if (Math.random() > 0.5) {
        s_rand = Math.floor(Math.random() * (100 - 50 + 1) + 50);

    } else {
        s_rand = 100;
    }

    var l_rand = Math.floor(Math.random() * (70 - 20 + 1) + 20);


    console.log(s_rand);
    console.log(l_rand);

    document.querySelector("#bk_c").style.backgroundColor = "hsla(0, " + s_rand + "%, " + l_rand + "%, 1)";

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

    var hslconv = hslToRgb(0, s_rand_formatted, l_rand_formatted);

    var hexValue = rgbToHex(hslconv[0], hslconv[1], hslconv[2]);

    document.querySelector("#hexcolor").innerHTML = hexValue;

    document.querySelector("#hexcolor").style.color = hexValue;

    document.title = hexValue + " - Shade of Red";

}

window.onload = generateColor;
