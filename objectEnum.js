//Enum properties of an object
//get all the properties of an object

const circle21 ={
     radius : 23,
     draw(){
       console.log('Draw')
     }
}


//for in loop

for (var key in circle21)

{
    console.log(key, circle21[key])
}

console.log('================================21');

// for of loop

for(var entry of Object.keys(circle21))
console.log(key);
console.log(entry)



//3 . in operator

//check a property in an abject
if('radius' in circle21)
console.log('yes')