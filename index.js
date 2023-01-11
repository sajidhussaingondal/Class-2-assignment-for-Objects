/*
1- Make An Object Using new Object() Constructor And Add Some Properties And Methods Of Your Choice
 And Access Them 

2- Reassign Values In Your Object Properties And Access Using Methods With The Help Of 
this keyword


3- Make A Function Which Prints Your Name 

4- Make 4 Methods Which Takes 2 Parameters And Do Addition,Subtraction,Multiplication And Division
*/

let companyDetails = new Object(); //An empty Object (companyDetails) is created using new Object keyword. 
companyDetails.companyName ="MAG Engineering";  //First property and it's value given.
companyDetails.services ="Engineering design and construction services"; //Second property and it's value given.
companyDetails.location = "110 DHA Lahore, Main Boulevard"; //Third property and it's value given.
companyDetails.ManagingDirector = "SAJID HUSSAIN"; //Third property and it's value given.
companyDetails.completedProjects = function(){
let P1 ="1-Multistory residential bilding, covered area = 20340 square feet."; 
return this.P1;
let P2 ="2-Multistory commercial bilding, covered area = 10000 square feet."; 
return this.P2;
let P3 ="3-ten number of houses, each house covered area = 2500 square feet."; 
return this.P3;
}
// completedProjects();
console.log(companyDetails); //Object (companyDetails) printed in console window of browser.


companyDetails = {
    companyName: "Sigma Marketing",
    services: "Marketing",
    location: "Islamabad",
    ManagingDirector:"Rehan"
}

console.log(companyDetails);

function myName (firstName, lastName){     //A function is created with two parameters in small braces.
    console.log(firstName + " " + lastName);    //Content of the function.
}
myName("Sajid", "Hussain");            // Function has been called by passing two arguments.

function doCalculations (a, b){  //A function is created with two parameters in small braces.
    console.log(a+b);
    console.log(a-b);
    console.log(a*b);
    console.log(a/b);

}
doCalculations(10, 2);