// Exercice 1
// 1- ['bread', 'carrot', 'potato', 'chicken', 'apple', 'orange']
// 2- ['U', 'S', 'A']
// 3- ['', ['', '']] -> wrong [undefined, undefined]

// Exercice 2
const users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
             { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
             { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
             { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
             { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
             { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
             { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];

    //1-

    const welcomeStudents =[]
   users.map(user => welcomeStudents.push(`Hello ${user.firstName}`))

   //2- 
   const filter = users.filter(user => user.role === 'Full Stack Resident')

   //3-
   const lnFullstack = users.filter(user => user.role === 'Full Stack Resident').map(user => user.lastName)
  
   // Exercice 3
   const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];
   let sum = epic.reduce((accumulator, currentValue) => accumulator + ' ' + currentValue);

   // Exercice 4
   const students = [{name: "Ray", course: "Computer Science", isPassed: true}, 
               {name: "Liam", course: "Computer Science", isPassed: false}, 
               {name: "Jenner", course: "Information Technology", isPassed: true}, 
               {name: "Marco", course: "Robotics", isPassed: true}, 
               {name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
               {name: "Jamie", course: "Big Data", isPassed: false}];

//1- 
const passed = students.filter(student => student.isPassed === true)
//2- 
students.filter(student => student.isPassed === true).forEach(student => console.log(`Good job ${student.name}, you passed the course in ${student.course}`))