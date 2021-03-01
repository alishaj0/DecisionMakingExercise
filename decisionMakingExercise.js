// DECISION MAKING EXERCISE

//1a)
let randomNum = Math.floor(Math.random() * 5) + 1;
    console.log(randomNum);

//1b)
if (randomNum >= 4) {
    console.log("Greater than or equal to 4");  
} else if (randomNum === 2 || randomNum === 3) {                 
    console.log("Equal to 2 or 3");             
} else {
    console.log("Equal to 1");
}

//ALSO

//1b)
// if (randomNum >= 4) {
//     console.log("Greater than or equal to 4");
// } else if (randomNum >= 2) (randomNum == 3 || randomNum == 4) {
//     console.log("Equal to 2 or 3");
// } else {
//     console.log("Equal to 1");
// }


//1c)
if (randomNum !== 3) {
//if (randomNum < 3 || randomNum > 3) {
    console.log("Not equal to 3");
} 

//1d)
if (randomNum !== (3 && 5)) {
    console.log("Not equal to 3 and also NOT equal to 5");
        // can shorten (randomNum !== 3 && randomNum !== 5) to (randomNum !== (3 && 5)).
}

//1e)
if (randomNum == 2 || randomNum == 4) {
    console.log("Equal to 2 OR equal to 4");
        //if (randomNum == (2 || 4)) {}  --- did not work
        //if (randomNum === (2 || 4)) {}  --- also did not work
        
        //for || (OR) only 1 side needs to be true for it to return a true value
}

//BONUS

//2)
//Ternaries are good to use in place of a simple IF ELSE statement
//Syntax Example (Condition ? code : code;)
randomNum = (randomNum >= 4) ? console.log("Greater than or equal to 4") : console.log("Less than 4") ;

//randomNum >= 4 ? "Greater than or equal to 4" : "Less than 4" ;
//randomNum >= 4 ? console.log("") : console.log() ;

//3)

//JavaScript Switch statement
//Switch statement takes in a parameter and returns something based on the case (Or the match) that the parameter goes with

// switch(variable) {
    //case x:
        //console.log("terminal code");
        //break;
    //case y:
        //console.log("terminal code");
        //break;
    //default:
        //console.log("terminal code")
//}

//Switch statement must have a break; between each case. 
//Last case must be default: 

switch(randomNum) {
    case 1: 
      console.log("One");
      break;
    case 2: 
       console.log("Two");
       break;
    case 3: 
        console.log("Three");
        break;
    case 4: 
        console.log("Four");
        break;
    default: 
        console.log("Five");
}

//Why is the switch defaulting to "Five" ???????