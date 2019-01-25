// Boc tach object

let objectCar = {
    Color1 : 'Green',
    Price : 1000000,
    NameProduct : 'E300',
    Producer : 'Mescedes'
}

let {Color1,Price,NameProduct} = objectCar;

console.log(Color1);
console.log(Price);

// Chung ta co the dat ten

let objectCar2 = {
    Color2 : 'Green',
    Price2 : 1000000,
    NameProduct2 : 'E300',
    Producer2 : 'Mescedes'
}

let {Color2:C,Price2:P,NameProduct2:N} = objectCar2;

console.log(C);
console.log(P);
