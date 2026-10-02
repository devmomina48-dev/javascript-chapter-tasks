const fvr_color=["Black","pink","Red","White","green",];
console.log(fvr_color.length);
console.log(fvr_color[0]);
console.log(fvr_color[1]);
console.log(fvr_color[1]);
console.log(fvr_color[3]);
console.log(fvr_color[4]);

// 2. Access Array Elements
// Create an array of 5 numbers and print:

// First element
// Last element
const numbers=[1, 2, 3, 4, 5, ];
console.log(numbers[0]);
console.log(numbers[4]);

// 3. Add and Remove Elements
// Create an array of fruits.

// Add one fruit at the end.
// Remove the first fruit.
// Print the updated array.

 const fruits =["Mango", "Apple", "Banana", ];
 fruits[3]="0range";
 console.log(fruits);

//  4. Create an Object
// Create a student object with:

// name
// age
// city
// Print all the properties.

let user={
    name:"Momina",
    age:"18",
    city:"Karachi",
};
console.log(user.name);
console.log(user.age);
console.log(user.city);

// 5. Update an Object
// Create a book object with:

// title
// author
// price
// Update the price and print the updated object.

let book={
title:"science",
author:"ahmed",
price:500,
}
book.price=800,
console.log(book.title);
console.log(book.author);
console.log(book.price);

//  Average Tasks
// 6. Array of Objects
// Create an array of 3 student objects.

// Each object should have:

// name
// age
// Print the name of every student.

const student=[ 
    {
        name:"Momina",
        age:  18
    },
     {
        name:"Hoorain",
        age:  18
    },
     {
        name:"Rida",
        age:  18
    },
]
console.log(student[0].name);
console.log(student[1].name);
console.log(student[2].name);
  
// 🟡 Average Level (5 Tasks)
// Task 1: Array of Objects - Student Details
// Ek array banao jisme 5 students ke objects hon.

// Har object me:

// name
// age
// city

const students=[
    {
        Name:"Shabana",
        city:"Lahore",
        Age: 30

    },
     {
        Name:"Ali",
        city:"Karachi",
        Age: 25

    },
     {
        Name:"Ahmed",
        city:"Lahore",
        Age: 20

    },
     {
        Name:"Sara",
        city:"Punjab",
        Age: 20

    },
     {
        Name:"Hassan",
        city:"Karachi",
        Age: 21

    },
]
console.log(students)
console.log(students[0].Name);
console.log(students[1].Name);
console.log(students[2].Name);
console.log(students[3].Name);
console.log(students[4].Name);

// Task 3: Update Object Values
 
const users={
    name:"Amna",
    age:18,
    course:"web development",
};
users.course="database";
users.age=20,
console.log(users.name);
console.log(users.age);
console.log(users.course);

// task4
const bikes=[
{
    brand:"Ducati",
    Model:"Streetfighter V4",
},
  {
    brand:"Royal Enfield",
    Model:"Classic 350"
},

]
console.log(bikes)
bikes[0].Model="streetfighter v3",
bikes[2]={
   brand:"BMW",
   Model:"S1000RR"
}
// Task 5: Find Object Data

const products = [
    {
        id:1,
        name:"Laptop",
        price:50000
    },
    {
        id:2,
        name:"Mobile",
        price:30000
    }
];
console.log(products[1].name);
products[1].price=35000
console.log(products[1].price);

// Task 6: Nested Array and Object
// Given:
    
const school={
    name: "The Educator school",
    students:[
        {
          Name:"ali",
          marks:80
        },
        {
          Name:"Zara",
          marks:90
        },
    ]
};
console.log(school)
console.log(school.name)
console.log(school.students[0].Name) ;
console.log(school.students [1].Name);
school.students[1].marks= 99;
console.log(school.students[1].marks);

// Task 1: Company Employees

// Ek company object banao.

// Uske andar:

// companyName
// location
// employees (ye ek array hoga)

// employees array ke andar 3 objects hon.

// Har employee object me:

// name
// position
// salary
// Tumhe ye kaam karne hain:
// Company ka naam print karo.
// Pehle employee ka name print karo.
// Dusre employee ki salary print karo.
// Teesre employee ka position update karo.
// Employees array me ek naya employee add karo.
// Pura updated object print karo.

let company={
    companyName:"Samsung",
    location:"Karachi",

    employees:[
        {
        name:"Amna",
        position:"sales director",
        salary:60000
        },
        {
        name:"sara",
        position:"manager",
        salary:50000
        },
        {
        name:"dua",
        position:"intern",
        salary:20000
        },
    ]

};
console.log(company.companyName);
console.log(company.employees[0].name);
console.log(company.employees[1].salary);

company.employees[3]={
        name:"Zaki",
        position:"HR",
        salary:60000
        }
console.log(company.employees[3]);






function greet(){
    console.log( "Hello World");
    alert( "Hello World");
    
}
greet();

function greeting(name){

    console.log("Hello " + name);
    alert("Hello " + name);

}

greeting("Momina");

function addition(a,b){
      console.log(a+b);
      
}

addition(3,9);

function bigger(a,b){
      
    if(a > b){
     return a;
    }else{
        console.log(b);
          return b;
    }
     
}


console.log(bigger(10,12)); 


function number(a){
      
    if(a % 2){
     return "even";
    }else{
          return  "odd";
    }
     
}

console.log(number(13,2)); 

function square(a) {

    return a * a;

}

console.log(square(13));


function vote(a){
      
  
    if(a  >= 18 ){
     return "You can vote ";
    }else{
          return  "You can not vote";
    }
     
}

let age1 = prompt("Enter your age");

console.log(vote(age1));



function length(a){

    console.log(a.length);

}

console.log(length("momina"));

function fahrenheit(c) {

    return  (c * 9/5) + 32;

}

console.log(fahrenheit(25));

function number1(a){
      
    if(a >0 ){
     return "true";
    }else{
          return  "false";
    }
     
}

console.log(number1(13)); 


function printnumber(){

    for(let i=1; i <=10; i++){
        console.log(i);
        
    }
}

 printnumber();

 function printnumber(n){

    for(let i=1; i <=n; i++){
        console.log(i);
        
    }
}

 printnumber(20);

 
 function printnumber(n){


    let i=n;
    while( i >=1) {
        console.log(i);
        i--;
    }
}

 printnumber(20);


 function subject(math,english,urdu){

    total= math + english +urdu;
    console.log(total);
    
}

subject(75,85,90);



function greet(){

    console.log("Hello world");

}

greet()



function greeting(name){

    console.log("Hello" + " " + name);
    
}

greeting("Momina");

function age(a){

    if(a >= 18){
        console.log("an adult");
        
    }else{
        console.log("not an adult");
        
    }
}

age(10);

function addition(a,b){

    console.log( a+b);
}
addition(20,20);


function bigger(a,b){

    if( a > b){

       console.log(a);
       
        
    }else{
             
       console.log(b);
       
    }
    
}
bigger(20,40);

function addition(a){


    return a;
   ;

}
// addition(20);
   console.log(nums(10));


   let num = prompt( "Enter any number");
   console.log(num.parseInt);
   console.log(typeof(num));
   

   let name = prompt("Enter your name");
   console.log(name);
   

let numbeer =Math.Squ(64 ) ;
console.log(numbeer);


   let fixed =  num.toFixed(3);
   console.log(typeof(fixed));
   let numbere = Number(fixed);
   console.log(typeof(numbere));

let useres = Number.parseInt(2);
console.log(useres);

let numbe = "12.45";
console.log(maths.ceil);


function percentage(){

    let obtained = prompt("Enter your obtained marks");
    let total = 500;
    let percentage = (obtained/total)*100;
    return percentage;

}

console.log(percentage());


function basefare(){

     let Base_fare =100;
     let kilometer = Number(prompt("how many kilometers"));
     let TotalFare = Base_fare + ( kilometer * 50);

     return   TotalFare;

}
console.log( basefare());

function calculateBill(units) {

    let bill;

    if (units <= 100) {

        bill = units * 10;

    } else if (units <= 200) {

        bill = (100 * 10) + ((units - 100) * 15);

    } else {

        bill = (100 * 10) + (100 * 15) + ((units - 200) * 20);
    }

    return bill;
}

console.log(calculateBill(250));


function Marks(grades){

  

    if( grades >= 85){

        console.log("A grade");
        
    }else if(  grades >= 75){
        console.log("B grade");
    }
    
    else if( grades >= 65){

        console.log("C grade");

}else if( grades >= 50){

        console.log("D grade");
}else{
     console.log("F grade");
}

}

let marks = prompt("Enter your marks");
Marks(marks);


function check(password){

    if(password.length >= 8){
        return "Strong Password";
        
    }else{
       return "Weak Password";
        
    }
}

let password = prompt("Enter your password");

console.log(check(password));



function discount(amount, membership, item) {

    let count = 0;
    let discount = 0;
    let vipDiscount = 0;
    let itemDiscount = 0;

    for (let i = 1; i <= item; i++) {
        count++;
    }

    if (count > 10) {
        itemDiscount = 3;
    }

    if (amount >= 50000) {
        discount = 20;
    }
    else if (amount >= 20000) {
        discount = 10;
    }
    else {
        discount = 0;
    }

    if (membership === "VIP") {
        vipDiscount = 5;
    }


let totalDiscount = discount + vipDiscount + itemDiscount;

let discountAmount = (amount * totalDiscount) / 100;

let finalAmount = amount - discountAmount;

return finalAmount;
}

console.log(discount(40000, "VIP", 12));


evaluatemarks = (marks) => {

   if(marks <0 || marks >100 ){

    return "Invalid Marks";
    
   }

    else if(marks >= 85 ){

    return "Excellent";

   }else if(marks >= 70){

     return "Good";

   }else if(marks >= 50){

      return "Needs Improvement";

   }else{
      return "Fail";
    
   }

}

function displayresult(){

    let marks = prompt("Enter your marks");
    console.log(evaluatemarks(marks));
}

displayresult();

 function analyzePrice(price) {

    if(price<1000){

         return "Budget Product";

    }else if(price >=1000 && price <=5000){

       return "Regular Product";

    }else if(price > 5000){

        return "Premium Product"

    }

 }
showresult =(price)=>{
    
    console.log(analyzePrice(price));
    

  }

  showresult(3500);
