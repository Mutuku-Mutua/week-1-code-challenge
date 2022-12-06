//speed-Detector
//loading the prompt-sync module in our code and exports it to prompt variable
const promptSpeed = require(`prompt-sync`)();
//ask the user to enter speed of car
let speed = promptSpeed(`Enter speed of car: `)


console.log(`Car's speed is :  ${speed} Kmph`);
//declare function to decide whether speed is ok or not
function speedDetector (speed){
    //declare an unassigned function using let for storing points of the car
    let points;
//if-else statement to determine if speed is greater than 70 or not and assign result to points variable
    if(speed <=70){
        points = 0;
    }
    else{
        //math.floor- will round off our points the closest point
        points = Math.floor((speed - 70)/5);
    }
//another if-else to determine points value and determine what points is 
    if(points <=12 && points > 0){
        console.log(`Points: ${points}` );
    }
    else if(points >12){
        console.log('License suspended');
    }
    else{
        console.log('Your points are Ok');
    }
}

speedDetector(speed);


//student-Grader

//loading the prompt-sync module in our code and exports it to prompt variable
const prompt = require('prompt-sync')();
//below is where we get input from the user and store what is inputed in studentMarks variable
let studentMarks = prompt("Enter student's marks ? ");
console.log(`Student's marks is :  ${studentMarks}`);

//grading function that uses else-if statements to determine students grade
  function grading(studentMarks){
    
    if(studentMarks >= 0 && studentMarks < 40){
        console.log("Grade is E")
    }else if(studentMarks >= 40 && studentMarks < 49   ){
        console.log("Grade is D")
    }else if(studentMarks >= 49 && studentMarks < 59  ){
        console.log("Grade is C")
    }else if( studentMarks >= 60 && studentMarks < 79 ){
        console.log("Grade is B")
    }else if(studentMarks >= 79 && studentMarks < 100 ){
        console.log("Grade is A")
    }else {
        console.log("Student's marks is not valid");
    }
}

//call the garding function

  grading(studentMarks)



  //netSalaryCalculator
  const prompt = require("prompt-sync")();
let basic_salary = parseInt(basic_salary);
basic_salary = prompt("Enter your basic salary");
let benefits = parseInt(benefits);
benefits = prompt("Enter your benefits")
  benefits = parseInt(benefits);
  let gross_salary = parseINt(basic_salary) + parseInt(benefits);
let payee = parseInt(payee);
//To get payee
//for the first 24,000 tax rate is 10% which is equal to 0.1
if(gross_salary <= 24000){
  payee === gross_salary * 0.1;
}
//for 24,000-32,333 tax rate is 25% which is 0.25
else if(gross_salary>24000 && gross_salary <= 32333){
payee === gross_salary * 0.25;
}
// for anything above 32333 tax rate is 30% which is 0.3
else{
  payee === gross_salary * 0.3;
}
let NSSF = parseInt(NSSF);
NSSF === (gross_salary * 0.6);
let NHIF = parseInt(NHIF);
if(gross_salary >= 0 && 5,999){
  NHIF === 150;
}
else if (gross_salary >= 6000 && gross_salary <= 7999){
  NHIF === 300;
}
else if (gross_salary >= 8000 && gross_salary <= 11999){
  NHIF === 400;
}
else if (gross_salary >= 12000 && gross_salary <= 14999){
  NHIF === 500;
}
else if (gross_salary >= 15000 && gross_salary <= 19999){
NHIF === 600;
}
else if (gross_salary >= 20000 && gross_salary <= 24999){
  NHIF === 750;
}
else if (gross_salary >= 25000 && gross_salary <= 29999){
  NHIF === 850;
}
else if (gross_salary >= 30000 && gross_salary <= 34999){
  NHIF === 900;
}
else if (gross_salary >= 35000 && gross_salary <= 39999){
  NHIF === 950;
}
else if (gross_salary >= 40000 && gross_salary <= 44999){
  NHIF === 1000;
}
else if (gross_salary >= 45000 && gross_salary <= 49999){
  NHIF === 1100;
}
else if (gross_salary >= 50000 && gross_salary <= 59999){
  NHIF === 1200;
}
else if (gross_salary >= 60000&& gross_salary <= 69999){
  NHIF === 1300;
}
else if (gross_salary >= 70000 && gross_salary <= 79999){
  NHIF === 1400;
}
else if (gross_salary >= 80000 && gross_salary <= 89999){
  NHIF === 1500;
}
else if (gross_salary >= 90000 && gross_salary <= 99999){
  NHIF === 1600;
}
else {
  NHIF === 1700;
}
var Total_deduction = parseInt(Total_deduction);
Total_deduction = payee + NSSF + NHIF;
var net_income = parseInt(net_income)
net_income === parseInt(gross_salary - Total_deduction);
console.log("Your gross salary is " + gross_salary);
console.log("Total amount to be deducted is" + Total_deduction);
console.log("Your net income is " + net_income);