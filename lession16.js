// vong lap for in , for of
// for in - for index doc ra chi so thu tu
// for of - chi ra ten (gia tri) cua phan tu do
var ArrayAnimal = ['Cat', 'house', 'cows'];
for (var Animal in ArrayAnimal) {
    console.log(Animal);
}
for (var _i = 0, ArrayAnimal_1 = ArrayAnimal; _i < ArrayAnimal_1.length; _i++) {
    var Animal = ArrayAnimal_1[_i];
    console.log(Animal);
}
var StrName = 'Đàm Ngọc Sơn';
for (var _a = 0, StrName_1 = StrName; _a < StrName_1.length; _a++) {
    var i = StrName_1[_a];
    console.log(i);
}
