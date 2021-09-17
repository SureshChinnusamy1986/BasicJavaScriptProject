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