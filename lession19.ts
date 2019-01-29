// ke thua trong ts

//1. ke thua tu thuoc tinh tu class khac
// luu y : ke thua la phuong phap thua huong thuoc tinh tu cha, tu tao thuoc tinh ma khong can khoi tao lai
class FurCat{
    protected Fur : string = 'Black';
     fur(Fur:string){return Fur};
}

class EatCat{
    protected Eat : string = 'Fish';
    eat(Eat: string){
        return Eat;
    }
}

class Cat extends FurCat {
        getFurCat() {
        console.log( this.Fur + ' duoc ke thua tu class Cat');
    }
}

let Cat1 = new FurCat();
let Cat2 = new EatCat();
let Cat3 = new Cat();
Cat3.getFurCat();

// ke thua tu contructor
class Persion{
    constructor(name){
        this.name = name;
        console.log(name + 'duoc tao tu class Persion');
    }
}
class Persion2 extends Persion{
    constructor(name){
        super(name); // dung de goi toi contructor cua thang cho ke thua
        console.log(name + 'duc ke thua va goi tu class Persion2');
    };

}

let PersionB = new Persion2('Tuan');