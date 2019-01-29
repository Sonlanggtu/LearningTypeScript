// Class trong Typescript

class Car{
    Product = (params : string) => {console.log(params)};
    ColorProduct = (params : string) =>{return params };
    Producer = (params : string) => {return params}; 
    SpeedMax = (speed : number) =>{return speed};
}

let Car1 = new Car();
Car1.Product('Mecedes C250');
console.log(Car1.ColorProduct('Black') + ' ' + Car1.Producer('Mecedes') + ' ' + Car1.SpeedMax(200));

