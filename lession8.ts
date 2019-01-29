// Learning Array Function

var ReturnNumber = function () {
    return 100;
}

console.log(ReturnNumber());

// Aray Funciton tuong tu

let ReturnNumber2 = () => 1000;
console.log(ReturnNumber2());

// ex2

let ReturnNumber3 = (a : number, b : number) => 1000*a*b;
console.log(ReturnNumber3(2,3));

// ex3

let ReturnStr = (a: string, b: string) => (a+': '+b);
console.log(ReturnStr('FirstName','Son'));

// 
// class Car{
//     Product = (params : string) => {console.log(params)};
//     ColorProduct = (params : string) =>{return params };
//     Producer = (params : string) => {return params}; 
//     SpeedMax = (speed : number) =>{return speed};
// }
