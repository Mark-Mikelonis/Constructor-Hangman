var Letter = require("./Letter.js");

function Word(arr){
    var letters = [];
    var currWord = "";
    for(var c in arr){
        letters.push(new Letter(arr[c]));
    }
   
    this.display = function(){
        for(var c in letters){
            currWord += " " + letters[c].display();
            

        }
        return currWord;
    }

    this.guessChar = function(char){
        for(var c in letters){
            letters[c].guessChar(char);
        }
        
    }
}



module.exports = Word;
