// Evaluate each of the following Javascript expressions and show the value
// 1. ‐5*3         
// 2. “JavaScript “ + 50   
// 3. 17 % 5         
// 4. 5 % 17        
// 5. 5/10         
// 6. (4 === ‘4’)        
// 7. (4 != 5)  
// 8. (7 <= 8) 
// 9."Hello" + 5
// 10. Math.ceil(x) ‐ Math.floor(x) 
// 11. Math.pow(x,2)

// Q1.1 : 
let x = -5*3 ;
console.log(x);

// Q1.2 :

let y = "javaScript" ;
let z = 50 ; 
console.log(y+z); 

//Q1.3 :
console.log(17 % 5 ) ;

// Q1.4 : 
console.log(5/10  ) ;

// Q1.5 : 
console.log(4 === "4" ) ;

// Q1.6 : 
console.log(4 != 5 ) ;

// Q1.7 : 
console.log(7 <= 8) ;

// Q1.8: 
console.log("Hello" + 5) ;

// Q1,9:
let Q = 1.88;
console.log(Math.ceil(Q))
console.log(Math.floor(Q))
console.log(Math.ceil(Q) - Math.floor(Q))

// Q1.10 : 
console.log(Math.pow(x,2));


 // Q2 : Read a number (using prompt) and display it using alert
         let NUM = prompt("Enter a number");
         alert("The number is : " + NUM);


// Q3 : Read in two numbers and display them in ascending order.

  var fnum = prompt(" Enter the First Num");
  var snum = prompt("Enter the second  ")  

  if (fnum < snum ){
    alert("Numbers in ascending order: " + fnum + ", " + snum);
  }else if (fnum > snum) {
    alert("Numbers in ascending order: " + snum + ", " + fnum);
  } else {
    alert("Both numbers are equal: " + fnum);
}

// Q4: Read in two numbers and display the larger

  var num1 = prompt(" Enter the First Num");
  var num2 = prompt("Enter the second  ")  

  if (num1 < num2){
    alert("num1 larger than num2 " + num1);
  }else if (num1 < snum2) {
    alert("( num2 larger than num1) : " + num2);
  } else {
    alert("Both numbers are equal " );
  }

// Q5: Read two numbers and display their sum. 
  var num3 = prompt(" Enter the First Num");
  var num4 = prompt("Enter the second  ")  
  alert = num3 + num4 ;
  alert("the summation of two num is : " + sum) ;

// Q6: If you have a “Number” variable,  Your task is to print:
var Number=1;

  function printNumberWord(Number) {
    switch (Number) {
        case 1:
            console.log("ONE");
            break;
        case 2:
            console.log("TWO");
            break;
        case 3:
            console.log("THREE");
            break;
        case 4:
            console.log("FOUR");
            break;
        case 5:
            console.log("FIVE");
            break;
        case 6:
            console.log("SIX");
            break;
        case 7:
            console.log("SEVEN");
            break;
        case 8:
            console.log("EIGHT");
            break;
        case 9:
            console.log("NINE");
            break;
        default:
            console.log("PLEASE TRY AGAIN");
    }
}


printNumberWord(Number);










// ----------------------------------------------
var separate_alert = 0;

 while(separate_alert <= 5){

  alert(separate_alert);

  separate_alert++;
 }
/************** */
 let single_alert = " ";
 for(var i = 0; i <= 5; i++ ){

  single_alert += i + " " ;
 }
 alert(single_alert);
/************* */
 for(let x = 0; x <= 20; x+=3){

    alert(x);

 }

 /*********** */


 do {
  
 var number = prompt("please enter number between 0 to 100 ");

 } while (number < 0 || number > 100  );

 /*******sum****** */

 sum = parseFloat(prompt("Enter a number to calculate the sum: "));
 counter = 0;

 while(sum > 0){

  counter += sum;
  sum --;
 
}
console.log(counter);