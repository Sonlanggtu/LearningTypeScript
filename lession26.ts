// contructor and property for ES6

class ObjectCar{
    public Color : string;
    public Product : string;
    constructor(ColorCT: string,ProductCT : string ){
        this.Color = ColorCT;
        this.Product = ProductCT;
        console.log(`${this.Color} va ${this.Product} duoc tao tu contructor class ObjectCar `);
    }

        public FunctionCar(Color, Product) {
            console.log(`${Color} va ${Product} duoc tao tu FunctionCar trong class objectCar `);
    }
}

let ObjectCar1 = new ObjectCar('black','Mecedes C250');
console.log(`Bien Property Color co gia tri ${ObjectCar1.Color} /n va bien Property Product co gia tri ${ObjectCar1.Product} `);