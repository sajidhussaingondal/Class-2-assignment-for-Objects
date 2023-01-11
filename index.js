/*
1- Make An Object Using new Object() Constructor And Add Some Properties And Methods Of Your Choice
 And Access Them 

2- Reassign Values In Your Object Properties And Access Using Methods With The Help Of 
this keyword


3- Make A Function Which Prints Your Name 

4- Make 4 Methods Which Takes 2 Parameters And Do Addition,Subtraction,Multiplication And Division
*/

const companyDetails = new Object(); //An empty Object (companyDetails) is created using new keyword. 
companyDetails.companyName ="MAG Engineering";  //First property and it's value given.
companyDetails.services ="Engineering design and construction services"; //Second property and it's value given.
companyDetails.location = "110 DHA Lahore, Main Boulevard"; //Third property and it's value given.
companyDetails.ManagingDirector = "SAJID HUSSAIN"; //Third property and it's value given.
console.log(companyDetails); //Object (companyDetails) printed in console window of browser.


function myName (firstName, lastName){     //A function is created with two parameters in small braces.
    console.log(firstName + " " + lastName);    //Content of the function.
}
myName("Sajid", "Hussain");            // Function has been called by passing two arguments.