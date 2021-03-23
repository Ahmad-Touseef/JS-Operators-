//JS Operator
//1)ARITHEMATIC OPERATOR

var a=20;
var b=10;
var c=a+b;          //Addition
var d=a-b;          //Subtraction
var e=a/b;          //Divison   
var f=a*b;         //Multiplication
var g=a%b;       //Modulus  
document.write(c+"<br>");
document.write(d+"<br>");
document.write(e+"<br>");
document.write(f+"<br>");
document.write(g+"<br>");

var x=10;           //Post increment,Pre increment,Post decrement,Pre decrement
var y=x++ + ++x -x + x++ - ++x + x;
document.write(y+"<br>");

var a=3;            // JS follow DMAS Rule
var b=5;  
var c=7;  
var d=b-a*c;
document.write(d+"<br>");

//RELATIONAL OPERTAOT OR COMPARISON OPERATOR

var a=5;
var b=2;
var c=5<2;                         //Less Than
var d=5>2;                       //Greater Than                             
var e=5<=2;                   //Less Than And Equal To 
var f=5>=2;                   //Greater Than And Equal To 
var g=5==2;                   //Equal To 
var h=5!=2;                   //Not Equal To
var i=5===2;                //Equal Value And Same Type
var j=5!==2;                //Not Equal Value OR Not Same Type       
document.write(c+"<br>");         
document.write(d+"<br>");         
document.write(e+"<br>");         
document.write(f+"<br>");         
document.write(g+"<br>");         
document.write(h+"<br>");         
document.write(i+"<br>");         
document.write(j+"<br>");         
   
//3)LOGICAL OPERATOR

var a=10>5;
var b=20>8;
var c=a&&b;                    //Logical AND
var d=a||b;                        //Logical OR
var e=!(5<2);                   //Logical NOT
document.write(c+"<br>");
document.write(d+"<br>");
document.write(e+"<br>");

//4)BITWISE OPERATOR

var a=5;
var b=6;
var c=a&b;          //BITWISE LOGICAL AND
var d=a|b;            //BITWISE LOGICAL OR
var e=a<<b;         //SHIFT THE BIT TO LEFT 
var f=a>>b;         //SHIFT THE BIT  TO RIGHT
var g=a^b;          //BITWISE EXCLUSIVE OR
document.write(c+"<br>");
document.write(d+"<br>");
document.write(e+"<br>");
document.write(f+"<br>");
document.write(g+"<br>");


//5)ASSIGNMENT OPERTAOR 
var m=15;
m+=10;
document.write(m+"<br>");

var n=15;
n-=10;
document.write(n+"<br>")

var o=15;
n*=10;
document.write(o+"<br>")

var p=15;
p%=10;
document.write(p+"<br>")
