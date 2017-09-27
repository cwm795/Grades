console.log("hi");

var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];





// 50-60 is an F

// 61-70 is a D

// 71-80 is a C

// 81-90 is a B

// 91-100 is an A


var F = 0;


var D = 0;


var C = 0;


var B = 0;


var A = 0;



for (var i = 0; i < scores.length; i++) {


   if (scores[i] < 61) {
       F += 1;
   } else if (scores[i] < 70 && scores[i] > 60) {
       D += 1;
   } else if (scores[i] < 80 && scores[i] > 70) {
   	   C += 1;
   } else if (scores[i] < 90 && scores[i] > 80) {
   	   B += 1;
   } else {
   	A += 1;

   }




};

console.log("A:", A, "B:", B, "C:", C, "D:", D, "F:", F);

var min = Math.min.apply(null, scores);

var max = Math.max.apply(null, scores);



console.log("Highest Score:", max, "Lowest Score:", min);




