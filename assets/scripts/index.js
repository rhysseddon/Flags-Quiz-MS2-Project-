const flags = ["wales", "ireland", "india", "argentina", "chile"];
let flagCount = 0;
let score = 0;
const countries = ["wales", "ireland", "india", "argentina", "chile"];

/**
 * This function shuffles the countries array into a random order.
 * @param {Array} countries The countries that will be displayed 
 * as the buttons.
 */
function shuffleArray(countries) {
    for (let index = countries.length - 1; index > 0; index--) {
        let countryIndex = Math.floor(Math.random() * (index + 1));
        [countries[index], countries[countryIndex]] = [countries[countryIndex], countries[index]];
    }
}

/**
 * This function adds the countries to the buttons text. 
 * Takes countries array and shuffles it, adds 3 countries to shuffledArray,
 * and if the current flag is not one of those 3 counties  it adds the current
 * flag to the array. Then the array is shuffled again and added to the button 
 * text.     
 */
function resetAnswers() {
    let shuffledArray = [];
    do {
        shuffleArray(countries);
        shuffledArray = [countries[0], countries[1], countries[2]];
    } while (shuffledArray.includes(flags[flagCount]));
    shuffledArray.push(flags[flagCount]);
    shuffleArray(shuffledArray);
    $(".answer-top-left").text(shuffledArray[0]);
    $(".answer-top-right").text(shuffledArray[1]);
    $(".answer-bottom-left").text(shuffledArray[2]);
    $(".answer-bottom-right").text(shuffledArray[3]);
}

/**
 * Renders the next question.
 */
function renderNextQuestion() {
    resetAnswers();
    resetButtons();
    nextFlag();
    endGame();
}

/**
 * Evaluates the answer, if it is correct it increments the score and the flag 
 * count and renders the next question.
 * If it is incorrect it will increment only the flag count and render the 
 * next question.   
 * @param {boolean} incrementScore If correct answer is given increment score
 * will be true and the score will increment. 
 */
function evaluateAnswer(incrementScore) {
    setTimeout(function () {
        if (incrementScore === true) {
            score++;
        }
        flagCount++;
       changeCounters()
        renderNextQuestion();
    }, 2000);
}

/**
 * Changes the colour of the selected answer. 
 * If answer is correct turns clicked button green.
 * If answer is incorrect turns clicked button red and correct answer button 
 * green.
 * @param {Object}  answer jQuery object containing the flag current name in
 * the flags array.
 */
function playGame() {
    $(".answer-button").attr("disabled", true);
    let answer = flags[flagCount];
    if ($(this).text().match(answer)) {
        $(this).css("background-color", "green");
        evaluateAnswer(true);
    } else {
        $(this).css("background-color", "red");
        $(".answer-button:contains('" + answer + "')").css("background-color",
            "green");
        evaluateAnswer(false);
    }
}

/**
 * Displays the current flag count and score.
 */
function changeCounters(){
 $(".flag-count").text("Flag: " + flagCount + "/" + flags.length);
    $(".score").text("Score: " + score);
}

/**
 * Changes the flag to the next flag in the flags array.
 */
function nextFlag() {
    $(".flag").attr("src", "assets/images/" + flags[flagCount] + "-flag.jpg");
}

/**
 * Resets the background colour of the buttons and re-enables the buttons.
 */
function resetButtons() {
    $(".answer-button").css("background-color", "#df9a57");
    $(".answer-button").attr("disabled", false);
}

/**
 * Displays end modal
 * If flagCount is equal to number of flags in flags array then display 
 * endmodal.
 * When score is less than 50% display "Bad luck" on endmodal or else 
 * display "Well done!".
 */
function endGame() {
    if (flagCount === flags.length) {
        $(".flag").attr("src", "assets/images/" + flags[0] + "-flag.jpg");
        if (score < flags.length / 2) {
            $(".end-modal-title").text("Bad Luck!");
        } else {
            $(".end-modal-title").text("Well done!");
        }
        $(".end-modal-score").text("You scored: " + score + " /" +
            flags.length);
        $("#endModal").modal("show");
    }
}

/**
 * Resets the game.
 */
function resetGame() {
    flagCount = 0;
    score = 0;
    changeCounters()
    renderNextQuestion();
}

/**
 * Displays start modal. Resets the game when the reset button is clicked.
 * Listens for clicked events for answer buttons and renders the next question. 
 */
function initializeGame() {
   changeCounters()
    $("#startModal").modal("show");
    $(".reset-button").on("click", resetGame);
    $(".answer-button").on("click", playGame);
    renderNextQuestion();
}

/**
 * Initializes game when document is loaded.
 */
$(document).ready(initializeGame);