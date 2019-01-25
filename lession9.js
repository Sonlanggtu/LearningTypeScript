var object = {
    id: 1,
    greet: function () {
        var _this = this;
        setTimeout(function () { return console.log(_this.id); }, 1000);
    }
};
object.greet();
