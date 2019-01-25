const a = 10;

const obj = {
    name : 'Dam Ngoc Son',
    numberconst : 1000
};

let Name : string = 'Nguyen Van A';
Name = 'Nguyen van B';
console.log(Name);
let number : number = 15.5;
let booled : boolean = true;
console.log(obj.numberconst);

let hex : number = 0xf00d;
let binary : number = 0b1010101;
let octal : number = 0o535;


let FullName : string = 'Nguyễn Đức Huy';
let age : number = 20;
// co the tinh toan hay goi ra khi de vao dau `` va goi ${<tencangoi>}
console.log(`năm sau ${FullName} sẽ ${age + 1} tuổi`);

// Khai bao mang
let arr : number[] = [1,2,3,4,5,6,7,8,9];
console.log(arr);
let arr2 : string[] = ['A','B',"Nguyễn Văn Huyên", "Nguyễn Thị Linh", 'Chu Thị Linh'];
console.log(arr2);
let arra3 : Array<string> = ['Nguyễn Huyền Anh', "Chu Ngọc Huyền"];
console.log(arra3);

// Mang hon hop (Tuple)

let arr4 : [string, number, string, boolean]
arr4 = ['Nguyễn Ngọc Ánh', 123,'Chu Van An',true];
console.log(arr4);
// Co the goi nhu phan tu mang
console.log(arr4[0],arr4[1],arr4[2],arr4[3]);
// ho tro cac phuong thuc tuong tac nhu cat chuoi , tim kiem ..........
console.log(arr4[0].substr(1));
console.log(arr4[0].search('n'));

// ho tro Enum
enum Color {Red , Green , Yello };
let r = Color.Green;
console.log(r);
console.log(Color.Green);


// Kieu any la kieu mac dinh tu nhan kieu
let Namee = 'Nguyen van A';

// Kieu void
function F() : void{
    alert("Day la Function F kieu void");
}
// F();

// Kieu Null & untifill

let u : undefined = undefined;
let x : null = null;
console.log(u);
console.log(x);

// Kieu Never kieu du lieu ko co gia tri tra ve
// function error (message : string) : never{
//     throw new Error(message);
// }

// error();
