// Cac phuong thuc trong es6
// Bien static co dinh phai goi bang doi tuong
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
        console.log('This name Cat is ' + name);
    }
    Animal.Eat = function () { console.log('Cat eat' + 'Mouse'); };
    ;
    Animal.prototype.fur = function (fur) {
        return fur;
    };
    return Animal;
}());
var Animal1 = new Animal('Kita');
Animal.Eat();
console.log(Animal1.fur('Black'));
// Motobike
var Motobike = /** @class */ (function () {
    function Motobike(NameProducer) {
        this.NameProducer = NameProducer;
        console.log('This is Producer' + this.NameProducer);
    }
    Motobike.Price = function (price) {
        console.log('Price' + price);
    };
    Motobike.prototype.NameProduct = function (Product) {
        return Product;
    };
    return Motobike;
}());
var Motobike1 = new Motobike('Honda');
Motobike.Price(1200);
console.log(Motobike1.NameProduct('Winner'));
