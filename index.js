var Word = require("./Word.js");
// var inquirer = require("inquirer");
var prompt = require("prompt");
var chalk = require("chalk");
var fs = require("fs");
var guessesLeft = 10;
var currentGuess = "";
var wordArr = [];
var words = fs.readFileSync("words.txt", "utf8", function(err, data){
    if(err){
        console.log("error: " + err);
    }
    
});
wordsArr = words.split("\n");
var random = Math.floor(Math.random()* (wordsArr.length -1));
var str = wordsArr[random];
console.log(chalk.blue(str));
var charArray = str.split("");
// var letters = [];
var currWord = new Word(charArray);

askUser();


// var showWord = currWord.display();


// console.log(chalk.blue(showWord));


prompt.start();
function askUser(){
    prompt.get([
        {
            name:'guess',
            message: "? Guess a letter"
    
        }], function (err, response){
        if (err){
            throw err;
        } else {
            console.log(response.guess);
            currWord.guessChar(response.guess);
           
            var showWord = currWord.display();
            console.log("");
            console.log(chalk.blue(showWord));
            console.log("");
            guessesLeft--;
            if(guessesLeft > 0){
                if(showWord.indexOf("_") === -1){
                    console.log("You won!");
                } else{
                    console.log("");
                    console.log(guessesLeft + " Guesses left");
                    console.log("");
                    askUser();
                }
                
            } else {
                console.log("");
                console.log("Out of guesses!");
                console.log("");
                console.log("Play Again?");
                console.log("");
            }
        }
    
    });
}
    

