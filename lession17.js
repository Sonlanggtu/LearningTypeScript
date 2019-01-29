// Class trong Typescript
var Car = /** @class */ (function () {
    function Car() {
        this.Product = function (params) { console.log(params); };
        this.ColorProduct = function (params) { return params; };
        this.Producer = function (params) { return params; };
        this.SpeedMax = function (speed) { return speed; };
    }
    return Car;
}());
var Car1 = new Car();
Car1.Product('Mecedes C250');
console.log(Car1.ColorProduct('Black') + ' ' + Car1.Producer('Mecedes') + ' ' + Car1.SpeedMax(200));
