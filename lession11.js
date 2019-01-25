var DisplayColor = function () {
    var DisplayColor = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        DisplayColor[_i] = arguments[_i];
    }
    for (var ar in DisplayColor) {
        console.log(arguments[ar]);
    }
};
var color = 'Color: ';
DisplayColor(color, 'Red', 'Green');
DisplayColor('Yello', 'Pink');
DisplayColor('Red', 'Green', 'Yello', 'Pink');
