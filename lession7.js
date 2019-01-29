//1. Kieu du lieu string
var stringstr = 'Nguyễn thùy linh';
console.log(stringstr);
//2.Kieu du lieu Number
var number1 = 19.9;
var hexal = 0x242;
console.log(number1);
console.log(hexal);
// 3. Kieu du lieu bool
var boolean1 = true;
console.log(boolean1);
//4. Kieu du lieu enum
var Color;
(function (Color) {
    Color[Color["Pink"] = 0] = "Pink";
    Color[Color["White"] = 1] = "White";
    Color[Color["Yellow"] = 2] = "Yellow";
})(Color || (Color = {}));
;
var Colorex = Color.White;
console.log(Colorex);
var enumarr;
(function (enumarr) {
    enumarr[enumarr["a"] = 0] = "a";
    enumarr[enumarr["b"] = 1] = "b";
    enumarr[enumarr["c"] = 2] = "c";
})(enumarr || (enumarr = {}));
;
var b1 = enumarr.a;
console.log(enumarr[0]);
//5. Kieu du lieu Array
var arr1 = [1, 2, 3, 5, 6, 7];
console.log(arr1);
var StrArr = ['Dam Ngoc Son', 'Nguyen Thuy Linh', 'Nguyen Ngoc Anh', 'Nguyen Thi Huong'];
console.log(StrArr);
//6. Kieu du lieu kieu Generic
var Generic1 = [2, 4, 5, 6, 7];
console.log(Generic1);
//7. Kieu du lieu Any - la kieu du lieu mac dinh no nhan bat ki kieu nao
var ex2 = 1;
var ex3 = 'String';
//8. Kieu mang hon hop Tuple
var arr3;
arr3 = ['Dam Ngoc Son', 1, 'Nguyen Thi Huong', 2];
console.log(arr3);
//9. Kieu du lieu void
// function F(){
//     alert(1);
// }
// F();
//10. Kieu du lieu Undefind va NULL
// Kieu NULL la kieu chua dung bo nho, chua duoc cap phat
// Kieu Undefind la kieu da cap phat bo nho nhung chua dinh danh kieu nao
var Undefind1 = undefined;
var NULL1 = null;
console.log(Undefind1);
console.log(NULL1);
//11. Kieu Nerve Khong chua kieu nao
// Kieu Never kieu du lieu ko co gia tri tra ve
// function error (message : string) : never{
//     throw new Error(message);
// }
// error();
