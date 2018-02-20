var Word = require("./Word.js");
// var inquirer = require("inquirer");
var prompt = require("prompt");
var chalk = require("chalk");
var fs = require("fs");
var guessesLeft = 10;
var currentGuess = "";
var wordArr = [];
var currWord = "";


var words = fs.readFileSync("words.txt", "utf8", function(err){
    if(err){
        console.log("error: " + err);
    }
    
});

wordsArr = words.split("\n");

function Game(){
    var random = Math.floor(Math.random()* (wordsArr.length -1));
    var str = wordsArr[random];
    var charArray = str.split("");
    currWord = new Word(charArray);
    // console.log(chalk.blue(str));
    askUser();
} 



prompt.start();

function askUser(){
    prompt.get([
        {
            name:'guess',
            message: "Guess a letter"
    
        }], function(err, response){
        if (err){
            throw err;
        } else {
            if(!isAlphaChar(response.guess)){
                console.log("Only Letters Allowed!\n Try Again.");
                askUser();
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
                    } else {
                        console.log("");
                        console.log(guessesLeft + " Guesses left");
                        console.log("");
                        askUser();
                    }
                    
                } else {
                    console.log("");
                    console.log("Out of guesses!");
                    console.log("");
                    
                }
            }        
        }
    
    });
}
    

function isAlphaChar(char){
    var regExp = /^[a-zA-Z]+$/;
    return regExp.test(char);
}

module.exports = Game;