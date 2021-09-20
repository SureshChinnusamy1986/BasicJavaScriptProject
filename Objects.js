//vars and functions can be defined in am object 

const circle = {
    radius:10,
    isVisible : true,
    location:{
        x:1,
        y:2
    },
 
     draw : function(){
        console.log('draw')
    }
    

}

console.log(circle.radius);