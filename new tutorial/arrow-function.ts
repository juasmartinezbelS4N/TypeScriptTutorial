/** **/
let fn = () => "respuesa";

let a:number;
let b:boolean;
let c:string;

a=20;
b=true;
c="hello";
/**Undefined Type**/
let foo:null;
let foo2:undefined; //Existen, pero no sirven pa NaH

/**Arrays**/
var myArr=[1,2,3]
var myArr2:number[];
myArr=[1,2,3,4]
myArr.push(9);
console.log(myArr.pop());
console.log(myArr)
var myArr3:any[]=[2,3,"4",{value:5}, true, function keke(){return 6}]
console.log(myArr3);

/**Tuples**/
var myTuple:[number,boolean]=[1,true];
