var a = 10;
var obj = {
    name: 'Dam Ngoc Son',
    numberconst: 1000
};
var Name = 'Nguyen Van A';
Name = 'Nguyen van B';
console.log(Name);
var number = 15.5;
var booled = true;
console.log(obj.numberconst);
var hex = 0xf00d;
var binary = 85;
var octal = 349;
var FullName = 'Nguyễn Đức Huy';
var age = 20;
// co the tinh toan hay goi ra khi de vao dau `` va goi ${<tencangoi>}
console.log("n\u0103m sau " + FullName + " s\u1EBD " + (age + 1) + " tu\u1ED5i");
// Khai bao mang
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(arr);
var arr2 = ['A', 'B', "Nguyễn Văn Huyên", "Nguyễn Thị Linh", 'Chu Thị Linh'];
console.log(arr2);
var arra3 = ['Nguyễn Huyền Anh', "Chu Ngọc Huyền"];
console.log(arra3);
// Mang hon hop (Tuple)
var arr4;
arr4 = ['Nguyễn Ngọc Ánh', 123, 'Chu Van An', true];
console.log(arr4);
// Co the goi nhu phan tu mang
console.log(arr4[0], arr4[1], arr4[2], arr4[3]);
// ho tro cac phuong thuc tuong tac nhu cat chuoi , tim kiem ..........
console.log(arr4[0].substr(1));
console.log(arr4[0].search('n'));
// ho tro Enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Yello"] = 2] = "Yello";
})(Color || (Color = {}));
;
var r = Color.Green;
console.log(r);
console.log(Color.Green);
// Kieu any la kieu mac dinh tu nhan kieu
var Namee = 'Nguyen van A';
// Kieu void
function F() {
    alert("Day la Function F kieu void");
}
// F();
// Kieu Null & untifill
var u = undefined;
var x = null;
console.log(u);
console.log(x);
// Kieu Never kieu du lieu ko co gia tri tra ve
// function error (message : string) : never{
//     throw new Error(message);
// }
// error();
