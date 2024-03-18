"use strict";

// ES5

/// Objects

// const book1={name:"Book 1", author:"Author 1", price:100, pages:2000}
// const book2={name:"Book 2", author:"Author 2", price:200, pages:3000}
// const book3={name:"Book 3", author:"Author 3", price:300, pages:3000}

// /// template Object (Function constructors)

// // function CreateBookTemplate(name , author , price , pages){
//   this.name=name;
//   this.author=author;
//   this.price=price;
//   this.pages=pages;
// //   this.fullInfo=function(){
// //     console.log(this.name,this.author,this.price,this.pages);
// //   }
// }

// CreateBookTemplate.prototype.fullInfo=function(){
//     console.log(this.name,this.author,this.price,this.pages);
// }

// const book_1=new CreateBookTemplate('Book 01', 'Author 01', 1200, 300);
// const book_2=new CreateBookTemplate('Book 02', 'Author 02', 1300, 400);
// const book_3=new CreateBookTemplate('Book 03', 'Author 03', 1400, 500);

// console.log(book_1)
// console.log(book_1)

// class ES6

class Car {

    constructor(name, brand, price, year, power) {
        this.name = name;
        this.brand = brand;
        this.price = price;
        this.year = year;
        this.power = power;
    }

    #getBrand(value = "") {
        console.log(value + " " + this.brand);
    }

    callBrand(arg) {
        this.#getBrand(arg);
    }

    static create(...args) {
        return new Car(...args);
    }

    get infoBrand() {
        console.log(this.brand);
    }

    set setBrand(brand) {
        this.brand = brand;
    }

    set private1(brand) {
        this.#getBrand(brand);
    }

    get private2() {
        return this.#getBrand();
    }
}

// get , set

class device extends Car {
    constructor(name, brand, price, year, power, memory, camera, cpu) {
        super(name, brand, price, year, power);
        this.memory = memory;
        this.camera = camera;
        this.cpu = cpu;
    }
}

class smartWatch extends device {
    constructor(name, brand, price, year, power, memory, camera, cpu, strap, color, corpuse) {
        super(name, brand, price, year, power, memory, camera, cpu);

        this.strap = strap;
        this.color = color;
        this.corpuse = corpuse;
    }
}

const merc = new Car("Merc C63", "Mercedenz-benz", 1200, 2023, 300);
const bmw = new Car("BMW", "BMW", 1200, 2020, 1200);
const matiz = Car.create("Matiz", "CHevrolet", 3000, 2010, 150);

const iphone = new device("Iphone 15 pro max", "Apple", "1250+", "2024", 3700, 256, 108, 16);
const Iwatch = new smartWatch("Iwatch 3 pro", "Apple", "450+", "2024", 400, 64, 16, 4, "Silver", "Black", "Silver");

merc.private1 = "TEST 1"; // SETTER
merc.private2;


// class App extends React.Component{
//     constructor(props, state) {
 
//     }
// }

