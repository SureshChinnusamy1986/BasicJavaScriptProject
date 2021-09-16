//date types 
let name = 'Suresh';
let age = 35;
let color = 'red';
console.log(name + ' ' + age);
age = 36;
console.log('age :'+age);


//object

let user =  {
    name:"Suresh",
    age : "45"       
}

//Get the value of the property name from the object user
console.log(user.name);

//2. using bracket notation
user['name'] = 'Ram';
console.log(user.name);

//Array
let names = ['suresh','ramesh'];
console.log(names); //Array is also an object data

//function without paranmeter
function getName(){
    console.log('THIS IS MY FUNCTION');
}

//call the function
getName()


//function with parameter

function withParameter(names){
 console.log('Name List :' +names);
}

//calling the function
withParameter(names);

// return from a function 
function add (num1,num2){
    return num1+num2;
}

let sum = add(12,12);

console.log ('sum ' +sum)