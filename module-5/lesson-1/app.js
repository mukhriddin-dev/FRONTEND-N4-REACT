// 1. data types

//  1. Primative types: 
// -string , number , boolean , symbol , bigInt , null , undefined
// 2. NonPrimative types: Object (Array , Function , WeakMap , WeakSet , Map , Set)


// 2. Variables  

// var   -> Global scope , Undefined , re declar , assignment
// let   -> Local scope ,  Undefined , assignment
// const -> Local scope ,  Undefined 

// 3. Call-Stack , Heap

// https://blog.kakaocdn.net/dn/cY9MWe/btrdpD5Fah4/ZahKGPhqyHxr0ps90BW1R0/img.jpg

// 4. Functions

// - declaration  function name(){}
// - expression   const app=function(){}
// - arrow        const arrow=()=>

// 5. Conditional operators

// switch
// if else , if else if else , if else , if else , if else ,

// condtion ?  "value1" : "value2"

// 6. 



// function App(arg1,arg2){
//     this.arg1 = arg1;
//     this.arg2 = arg2;
// }

// String()
// Boolean()
// console.log(Number(true))

// 8. Array

// var arr=[]; -> literal
// new Array(); -> literal
//

// let arr=[1,2,3,4,5,6,7,8,9,10];
// let b=[];

// v1 by forEach 
// v2 

// 9 . Object , Object methods

// Object.create()
// Object.values()
// Object.keys()
// Object.freeze()
// Object.entries()
// Object.fromEntries()
// Object.hasOwnProperty()


// let obj ={
//     name: "John",
//     age: 25,
//     city: "New York",
//     getInfo: function(){
//         console.log(this.name,this.age,this.city);
//     }
// }

// obj.getInfo();

// 10. for , while , do while


// let arra=[1,2,3,4,5,6,7,8,9,10];
// let [one, two, three, ...other]=arra;
// let b=[...arra]




const object={
    name: "John",
    age: 25,
    city: "New York",
   
}
console.log(object['name'])
// deep clone
// const copyObject=object;

// const copyObj=Object.create(...object);
// console.log(copyObj)


// const copyObj=Object.assign({},object);
// const copyObj={...object};
// const copyObj=JSON.parse(SON.stringify(copyObj));

// for(let key in object){
//     console.log(`${key} : ${object[key]}`)
// }

