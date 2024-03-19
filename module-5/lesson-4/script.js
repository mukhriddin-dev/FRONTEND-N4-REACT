
// import $ from "jquery";


// function Car(name, color, width, height){
//     this.name = name;
//     this.color = color;
//     this.width = width;
//     this.height = height;
// }


// class Bus {
//     constructor(name, color){
//         this.name = name;
//         this.color = color;
//     }
// }


// const bmwBus =new Bus();
// const bmw=new Car();


// data collection -> [name, color, width, height] , {name, color, width, height}
// performance optimization for new SET() new Map()

//====== MAP ============

// const car=new Map();

// car.set('name', 'BMW');
// car.set('color', 'Red');
// car.set('width', 1200);
// car.set('height', 1000);
// car.set(1, 'Red');
// car.set('isBuy', false);


// console.log("Keys:", car.keys());
// console.log("Values:", car.values());
// console.log("Key , value :", car.entries())

// console.log(Array.from(car.entries()));
// const Obj=Object.fromEntries(Array.from(car.entries()));



// console.log(Object.fromEntries(Array.from(car.entries())))


// const object={
//     name: "John",
//     age: 25,
//     city: "New York",
// }



// console.log(Object.entries(object))
// console.log(Object.fromEntries(Object.entries(object)))


// const fruits=new Map([["Apple","NEW APPLE"],["orange", 'apelsin']]);

// console.log(car)
// console.log(fruits.get('orange'))



// ============= Set =================


// const arr=[1,2,3,4,5,6,7,8,9,1,2,3,7,33,2,34,4,5, {key:"apple"}, {key:"apple"}];

// const jobs=new Set(["apple", "orange", "orange", "orange", "orange", "orange"]);
// console.log(Array.from([...jobs]))
// const unique=new Set(arr);

// const arrayNumbers=Array.from([...new Set(arr)]);
// const uniqueArray=[...new Set(arr)]

// console.log(uniqueArray)
// console.log(arrayNumbers)

// const job1=new Set('php', 'nodejs')
// const job2=new Set('php', 'nodejs', 'ruby');

// console.log(job1.union(job2).union(new Set('laravel')));


// $(".btn").on('click', ()=>{
//     console.log("first")
// })

