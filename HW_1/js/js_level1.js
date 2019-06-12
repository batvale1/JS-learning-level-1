var Tc = prompt("Please, enter the temperature in Celsius to convert it to Fahrenheit:");
var Tf = (9 / 5) * Tc + 32;
Tf = Tf.toFixed(2);
alert("The temperature is " + Tf + " degrees Fahrenheit.");

////////////////////////////////

var admin;
var name = "Василий";
admin = name;
console.log("The admin name is: " + admin);

////////////////////////////////
//var x = 1000 + "108"/;
//Надеюсь, я правильно понял и переписал операцию в ситаксис js
var x = 1000 + '"108"/';
console.log("The variable value is: " + x + ", its type is: " + typeof x);