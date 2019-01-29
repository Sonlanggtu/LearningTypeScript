// interface trong ES6

interface LBValue{
    lable : string;
}
function printlable(lableObject : LBValue){
    console.log(lableObject.lable);
}

let MyOBj = {size : 10, lable : 'Size 10 obj'};
printlable(MyOBj);