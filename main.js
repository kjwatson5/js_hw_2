//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

let loop_through = function(some_object){
    for(let i = 0; i < Object.keys(some_object).length; i++){
        if(Array.isArray(Object.values(some_object))){
            console.log(Object.values(some_object)[i])
        }
    }
}
console.log(loop_through(person3))


//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype

function Person(name, age){
    this.name = name;
    this.age = age

// Use an arrow to create the printInfo method

    this.printInfo = () => {
        console.log(`Hello, my name is ${this.name}. I am ${this.age} years old.`);
        return 'returned expression'
    }

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age

    this.addAge = () =>{
        return this.age++
    }
}

let Sarah = new Person('Sarah', 18)
console.log(Sarah.printInfo())

let Grayson = new Person('Grayson', 2)
console.log(Grayson.printInfo())

let Kyle = new Person('Kyle', 20)
console.log(Kyle.printInfo())
console.log(Kyle.addAge())
console.log(Kyle.printInfo())
console.log(Kyle.addAge())
console.log(Kyle.printInfo())
console.log(Kyle.addAge())
console.log(Kyle.printInfo())



// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word".
    If the length of the string is less than 10 console log "Small Number"
*/

Big_string_test = 'Adjustable'
little_string_test = 'Howdy'

determine_string_size = (test_string) => {
    return new Promise( (resolve, reject) =>{
        if(test_string.length >= 10){
            resolve('Big Word')
        }else{
            reject('Little Word')
        }
    })
}

console.log(determine_string_size(Big_string_test))
console.log(determine_string_size(little_string_test))
