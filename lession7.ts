//1. Kieu du lieu string

let stringstr : string = 'Nguyễn thùy linh';
console.log(stringstr);

//2.Kieu du lieu Number
let number1 : number = 19.9;
let hexal : number = 0x242;
console.log(number1);
console.log(hexal);
// 3. Kieu du lieu bool

let boolean1 : boolean = true;
console.log(boolean1);

//4. Kieu du lieu enum

enum Color {Pink, White, Yellow};
var Colorex = Color.White;
console.log(Colorex);

enum enumarr {'a','b','c'};

let b1 : enumarr = enumarr.a;
console.log(enumarr[0]);

//5. Kieu du lieu Array

let arr1 : number[] = [1,2,3,5,6,7];
console.log(arr1);

let StrArr : string[] = ['Dam Ngoc Son','Nguyen Thuy Linh','Nguyen Ngoc Anh','Nguyen Thi Huong'];
console.log(StrArr);

//6. Kieu du lieu kieu Generic

let Generic1 : Array<number> = [2,4,5,6,7];
console.log(Generic1);

//7. Kieu du lieu Any - la kieu du lieu mac dinh no nhan bat ki kieu nao
let ex2 = 1;
let ex3 = 'String';

//8. Kieu mang hon hop Tuple

let arr3 : [string, number,string,number];
arr3 = ['Dam Ngoc Son',1,'Nguyen Thi Huong',2];
console.log(arr3);

//9. Kieu du lieu void
// function F(){
//     alert(1);
// }
// F();

//10. Kieu du lieu Undefind va NULL
// Kieu NULL la kieu chua dung bo nho, chua duoc cap phat
// Kieu Undefind la kieu da cap phat bo nho nhung chua dinh danh kieu nao

let Undefind1 : undefined = undefined;
let NULL1 : null = null;
console.log(Undefind1);
console.log(NULL1);

//11. Kieu Nerve Khong chua kieu nao

// Kieu Never kieu du lieu ko co gia tri tra ve
// function error (message : string) : never{
//     throw new Error(message);
// }

// error();


