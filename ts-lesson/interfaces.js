var rect1 = {
    id: '90_875%65',
    size: {
        width: 20,
        height: 30
    }
};
rect1.color = '#ff0000';
var rect2 = {};
console.log(rect2);
// Old notation
var rect3 = {};
var rect4 = {
    id: '34343',
    size: {
        width: 20,
        height: 20
    },
    getArea: function () {
        var _a = this.size, width = _a.width, height = _a.height;
        return width * height;
    }
};
var Clock = /** @class */ (function () {
    function Clock() {
        this.time = new Date();
    }
    Clock.prototype.setTime = function (date) {
        this.time = date;
    };
    return Clock;
}());
var css = {
    border: '1px solid #000',
    marginTop: '10px'
};
var css1 = {
    transition: 'ease .3s'
};
