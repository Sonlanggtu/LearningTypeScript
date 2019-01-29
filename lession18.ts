// Cac phuong thuc trong es6
// Bien static co dinh phai goi bang doi tuong

class Animal{
    constructor(name){
        this.name = name;
        console.log('This name Cat is ' + name);
    }
     static Eat(){console.log( 'Cat eat' + 'Mouse')};
        fur(fur : string){
            return fur;
    }
}

let Animal1 = new Animal('Kita');
Animal.Eat();
console.log(Animal1.fur('Black'));

// Motobike

class Motobike{
 constructor(NameProducer){
     this.NameProducer = NameProducer;
     console.log('This is Producer' + this.NameProducer);
 }
 static Price(price : number){
    console.log('Price' + price);
 }
 NameProduct(Product : string){
     return Product;
 }
  
}

let Motobike1 = new Motobike('Honda');
Motobike.Price(1200);
console.log(Motobike1.NameProduct('Winner'));