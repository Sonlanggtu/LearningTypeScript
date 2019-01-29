// ke thua trong ts
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//1. ke thua tu thuoc tinh tu class khac
// luu y : ke thua la phuong phap thua huong thuoc tinh tu cha, tu tao thuoc tinh ma khong can khoi tao lai
var FurCat = /** @class */ (function () {
    function FurCat() {
        this.Fur = 'Black';
    }
    FurCat.prototype.fur = function (Fur) { return Fur; };
    ;
    return FurCat;
}());
var EatCat = /** @class */ (function () {
    function EatCat() {
        this.Eat = 'Fish';
    }
    EatCat.prototype.eat = function (Eat) {
        return Eat;
    };
    return EatCat;
}());
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cat.prototype.getFurCat = function () {
        console.log(this.Fur + ' duoc ke thua tu class Cat');
    };
    return Cat;
}(FurCat));
var Cat1 = new FurCat();
var Cat2 = new EatCat();
var Cat3 = new Cat();
Cat3.getFurCat();
// ke thua tu contructor
var Persion = /** @class */ (function () {
    function Persion(name) {
        this.name = name;
        console.log(name + 'duoc tao tu class Persion');
    }
    return Persion;
}());
var Persion2 = /** @class */ (function (_super) {
    __extends(Persion2, _super);
    function Persion2(name) {
        var _this = _super.call(this, name) || this;
        console.log(name + 'duc ke thua va goi tu class Persion2');
        return _this;
    }
    ;
    return Persion2;
}(Persion));
var PersionB = new Persion2('Tuan');
