// DECISION MAKING EXERCISE

//1a)
let randomNum = Math.floor(Math.random() * 5) + 1;
    console.log(randomNum);

//1b)
if (randomNum >= 4) {
    console.log("Greater than or equal to 4");  
} else if (randomNum == 2, 3) {                 
    console.log("Equal to 2 or 3");             
} else {
    console.log("Equal to 1");
}

//1c)
if (randomNum !== 3) {
    console.log("Not equal to 3");
} 

//1d)
if (randomNum !== 3)
if (randomNum !== 5) {
    console.log("Not equal to 3 and also NOT equal to 5");
}

//1e)
if (randomNum == 2) {
    console.log("Equal to 2 OR equal to 4");
} else if (randomNum == 4) {
    console.log("Equal to 2 OR equal to 4");
}

//BONUS

//2)
randomNum = (randomNum >= 4) ? "Greater than or equal to 4" : "Less than 4" ;
    console.log(randomNum);

//3)

// I give up. 
switch(randomNum)  {
    case "1": 
        text = "One";
    case "2": 
        text = "Two";
    case "3":
        text = "Three";
    case "4":
        text = "Four";
    case "5":
        text = "Five";
}