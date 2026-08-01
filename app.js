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
