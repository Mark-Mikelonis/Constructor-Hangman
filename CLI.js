var Game = require("./index.js");
var prompt = require("prompt");

prompt.start();

prompt.get([
    {
        name: "newGame",
        message: "Would you like to start a new game?"
    }
]), function(err, response){
    if (err) {
        throw err;
    } else {
        if(response.newGame === "y"){
            var newGame = new Game();
        }
    }
}