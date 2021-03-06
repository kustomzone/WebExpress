//variables
var iconRippleTime = 300;
var rippleTime = 400;

function decode_utf8(s) {
    return unescape(encodeURIComponent(s));
}

function shadeColor(color, percent) {

    var R = parseInt(color.substring(1, 3), 16);
    var G = parseInt(color.substring(3, 5), 16);
    var B = parseInt(color.substring(5, 7), 16);

    R = parseInt(R * (100 + percent) / 100);
    G = parseInt(G * (100 + percent) / 100);
    B = parseInt(B * (100 + percent) / 100);

    R = (R < 255) ? R : 255;
    G = (G < 255) ? G : 255;
    B = (B < 255) ? B : 255;

    var RR = ((R.toString(16).length == 1) ? "0" + R.toString(16) : R.toString(16));
    var GG = ((G.toString(16).length == 1) ? "0" + G.toString(16) : G.toString(16));
    var BB = ((B.toString(16).length == 1) ? "0" + B.toString(16) : B.toString(16));

    return "#" + RR + GG + BB;
}

function isURL(s) {
    var regexp = /[a-zA-Z-0-9]+\.[a-zA-Z-0-9]{2,3}/;
    return regexp.test(s);
}

function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function isInArray(value, array) {
    return array.indexOf(value) > -1;
}

function decode_utf8(s) {
    return unescape(encodeURIComponent(s));
}
function endsWith(str, suffix) {
    return str.indexOf(suffix, str.length - suffix.length) !== -1;
}
function colorBrightness(color) {
    var r, g, b, brightness,
        colour = color;
    if (colour.match(/^rgb/)) {
        colour = colour.match(/rgba?\(([^)]+)\)/)[1];
        colour = colour.split(/ *, */).map(Number);
        r = colour[0];
        g = colour[1];
        b = colour[2];
    } else if ('#' == colour[0] && 7 == colour.length) {
        r = parseInt(colour.slice(1, 3), 16);
        g = parseInt(colour.slice(3, 5), 16);
        b = parseInt(colour.slice(5, 7), 16);
    } else if ('#' == colour[0] && 4 == colour.length) {
        r = parseInt(colour[1] + colour[1], 16);
        g = parseInt(colour[2] + colour[2], 16);
        b = parseInt(colour[3] + colour[3], 16);
    }
    brightness = (r * 299 + g * 587 + b * 114) / 1000;

    return brightness;
};
function autocomplete(input, text) {
    var text1 = input.val();
    if (text != null || text != "") {
        if (text.toLowerCase().startsWith(text1.toLowerCase())) {
            input.val(text);
            input[0].setSelectionRange(text1.length, text.length);
        }
    }
}
function getSelectionText() {
    var text = "";
    if (window.getSelection) {
        text = window.getSelection().toString();
    } else if (document.selection && document.selection.type != "Control") {
        text = document.selection.createRange().text;
    }
    return text;
}

function makeRippleMenuItem(menuItem, e) {
    var relX = e.pageX - $(menuItem).offset().left;
    var relY = e.pageY - $(menuItem).offset().top;
    Ripple.makeRipple($(menuItem), relX, relY, $(menuItem).width(), $(menuItem).height(), rippleTime, 0);
}

function makeRippleIconButton(item) {
    Ripple.makeRipple(item, item.width() / 2, item.height() / 2, 14, 14, iconRippleTime, 0);
}