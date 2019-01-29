// contructor and property for ES6
var ObjectCar = /** @class */ (function () {
    function ObjectCar(ColorCT, ProductCT) {
        this.Color = ColorCT;
        this.Product = ProductCT;
        console.log(this.Color + " va " + this.Product + " duoc tao tu contructor class ObjectCar ");
    }
    ObjectCar.prototype.FunctionCar = function (Color, Product) {
        console.log(Color + " va " + Product + " duoc tao tu FunctionCar trong class objectCar ");
    };
    return ObjectCar;
}());
var ObjectCar1 = new ObjectCar('black', 'Mecedes C250');
console.log("Bien Property Color co gia tri " + ObjectCar1.Color + " /n va bien Property Product co gia tri " + ObjectCar1.Product + " ");
