//Arthimetic 
var x =02
var y =01

console.log(x+y)
console.log(x-y)
console.log(y**y)

 
//assignment
 
var x= 10;
var c= x+10;
console.log(x+c);


//comparasion 
var x ='10';
console.log(x==10)
console.log (x===10) //strict compare(type and value is checked)

//Tranary

var marks = 40
var status = marks >30 ? 'PASS' : 'Fail'

console.log('status :' +status);

//logical:
//AND and OR
var Income = true;
var CreditScore = false;
var EligibleForLoan = Income && CreditScore;

console.log('EligibleForLoan ' +EligibleForLoan )

//OR 

var Income = true;
var CreditScore = false;
var EligibleForLoan = Income || CreditScore;

console.log('EligibleForLoan ' +EligibleForLoan )

//logical operator with Non Boolean:
//falsy (false);
//undefine 
//null
//0
//false

//truthy value 
console.log(false||'suresh')
console.log(false || 1||2)
console.log(false || null)

//real time scenario

var userColor = 'red' ;
var defaultColor = 'White' ;
var finalColor = userColor || defaultColor



//bitwise operator

//if else 
//switch case 

// below 35 fail 
// between 35 to 60 second clss
// between 60 to 75 first class
// above 75 distinct 

var mark1=-10

if(mark1>=0 && mark1<35)
console.log("Opps..Fail")
else if (mark1>=36 && mark1<=60)
console.log("Second Class")
else if(mark1<=61 && mark1>=75)
console.log("First Class")
else if(mark1>=75 && mark1<=100)
console.log("Distinct")
else
console.log("Enter the value within 0 to 100");

//for/ while 

for(let i=0; i<5; i++)
{
    console.log(i);
}

//while 
let i=2
while(i<5)
{
    console.log(i)
    i++
}


const persons = {
    name: 'Suresh',
    age : 33
}

for (let key in persons){
    console.log(key,persons[key])
}


//Array

const colors = ['blue','red','green']


for (var index in colors)
console.log(index,colors[index])

//for of loop 




