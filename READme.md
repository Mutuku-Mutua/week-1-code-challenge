# Challenge 1: Student Grade Generator

  ## Instructions
   
   * Write a javascript program that prompts the user to input student marks
   * The input should be between 0 and 100.
   * Then output the correct grade according to the criteria below: 
        A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40.

  ## Procedure

 ### step 1
 To get user input in nodeJs we use prompt() function
 but we need to install the prompt sync module in our terminal using the below code
  `npm install prompt-sync`

  Then load the module in our .js file using the below code

  ```js
  const prompt = require('prompt-sync')();
  ```
This line below will prompt user to enter a mark and store our input in studentMarks variable 
   ```javascript
       let studentMarks = prompt("Enter student's marks ? ");
       //This line below will display the entered marks back to the user.
        console.log(`Student's marks is :  ${studentMarks}`);

   ```

  ### step 3
  to run the .js file we use the following command in our terminal
    
`node nameOfYourJsFile.js`

   enter any kind of input to see if the code runs successfull