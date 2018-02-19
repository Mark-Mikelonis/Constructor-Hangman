var Word = require("./Word.js");
var inquirer = require("inquirer");
var chalk = require("chalk");
var fs = require("fs");
var wordArr = [];
var words = fs.readFileSync("words.txt", "utf8", function(err, data){
    if(err){
        console.log("error: " + err);
    }
    
});
wordsArr = words.split("\n");
var random = Math.floor(Math.random()* wordsArr.length -1);
var str = wordsArr[random];
console.log(chalk.blue(str));
var charArray = str.split("");
// var letters = [];
var currWord = new Word(charArray);

currWord.guessChar("n");
var showWord = currWord.display();


console.log(chalk.blue(showWord));


