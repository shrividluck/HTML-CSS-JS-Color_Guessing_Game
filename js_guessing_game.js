var target;
var guess_input;
var finished = false;
var guesses = 0;
var colors = ["blue", "cyan", "gold", "gray", "green", "magenta", "orange", "red", "white"];

function do_game()  {
    var random_number = Math.floor(Math.random() * colors.length);
    target = colors[random_number];
    alert(target);

    while (!finished)  {
    //while(guess_input != target)  {
        guess_input = prompt("I am thinking of one of these colors. \n "+
        "blue, cyan, gold, gray, green, magenta, orange, red, white.\n\n"+
        "What color am I thinking of ?");
                guesses += 1;
        finished = check_guess();
    }
}

function check_guess()  {
   if(colors[indexOf(guess_input)] === 'undefined') {
   //if (typeOf(guess_input) === 'undefined' || guess_input === null){
        alert("Sorry, I don’t recognize your color");
        return false;
    }

    if(guess_input > target) {
        alert("Sorry, your guess is wrong! \n"+
        "Hint : Your color is alphabetically higher than mine!");
        return false;
    }

    if(guess_input < target) {
        alert("Sorry, your guess is wrong! \n"+
        "Hint : Your color is alphabetically lower than mine!");
        return false;
    }
    document.body.style.backgroundColor = target;
    alert("Congratulations! You have guessed the color! \n" +
    "It took you " + guesses + " guesses to finish the game \n"+
    "You can see the color in the background");

    return true;//
}
