//Factory Function : it produce objects

function  createCircle (radius) {
return{ 
        radius,
        draw() {
           console.log('draw');
       }
       
   }
   }

   var c11= 10;
   var c12= 10;
   const c10 = createCircle(c12);
   console.log(c10)
   