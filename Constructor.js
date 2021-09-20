//constructor function

function Circle1(radius){
    this.radius = radius;
    this.draw= function(){
        console.log('draw', radius);
    }
}

//how to call constructor function
//naming convension pascal notation
const a = new Circle1(1);
console.log('the value of a is '+a);
console.log(a.radius)

const b = new Circle1(2);
console.log('the value of b ' + b.radius)
