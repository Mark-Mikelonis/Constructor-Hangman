function Letter(char){
    this.char = char;
    this.isGuessed = false;

    this.display = function(){
        if(this.isGuessed){
            return this.char;
        } else {
            return "_";
        }
    }
    
    this.guessChar = function(char){
        if(this.char === char){
            this.isGuessed = true;
           
        }
    }
    
}
module.exports = Letter;