const flags = ["wales", "scotland", "ireland", "england", "france", "india", "germany", "usa", "argentina", "chile"];
let flagCount = 0;
let score = 0;
const countries = ["wales", "scotland", "ireland", "england", "france", "germany", "argentina", "usa", "chile", "india"];
/**
 * This function shuffles the countries array into a random order.
 * @param {Array} countries The countries that will be displayed as the buttons.
 */
function shuffleArray(countries) {
    for (let i = countries.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        [countries[i], countries[j]] = [countries[j], countries[i]];
    }
}
/**
 * This function adds the countries to the buttons text. 
 * @param {Array} countries Initial array of countries. 
 * @param {Array} flags Initial array of flags. 
 * @param {Array} shuffledArray Has 3 items from the countries array and gets 1 item from
 *  the flags array and is then re shuffled and displayed on the buttons.    
 */
function resetAnswers() {
    do {
        shuffleArray(countries);
        shuffledArray = [countries[0], countries[1], countries[2]];
    } while (shuffledArray.includes(flags[flagCount]))
    shuffledArray.push(flags[flagCount]); 
    shuffleArray(shuffledArray); 
    $(".answer1").text(shuffledArray[0]); 
    $(".answer2").text(shuffledArray[1]);
    $(".answer3").text(shuffledArray[2]);
    $(".answer4").text(shuffledArray[3]);
}
/**
 * This function renders the next question
 */
function renderNextQuestion() {
    resetAnswers();
    resetButtons();
    nextFlag();
    endGame();
}
/**
 * This function increases flag count and score and renders the next question.
 */
function correct() {
    flagCount++;
    score++;
    $(".flag-count").text("Flag: " + flagCount + "/" + flags.length);
    $(".score").text("Score: " + score);
    renderNextQuestion();
}
/**
 * This function increases flag count and renders the next question.
 */
function incorrect() {
    flagCount++;
    $(".flag-count").text("Flag: " + flagCount + "/" + flags.length);
    renderNextQuestion();
}
/**
 * This function changes the colour of the selected answer. 
 * @param {Object}  answer jQuery object containing the flag current name in the flags array.
 */
function playGame() {
    $(".answer-button").attr("disabled", true);
    let answer = flags[flagCount];
    if ($(this).text().match(answer)) {
        $(this).css("background-color", "green");
        setTimeout(correct, 2000);
    } else {
        $(this).css("background-color", "red");
        $(".answer-button:contains('" + answer + "')").css("background-color", "green");
        setTimeout(incorrect, 2000);
    }
}
/**
 * This function changes the flag to the next flag in the flags array.
 */
function nextFlag() {
    $(".flag").attr("src", "assets/images/" + flags[flagCount] + "-flag.jpg");
}
/**
 * This function changes the background colour of the buttons and enables the buttons.
 */
function resetButtons() {
    $(".answer-button").css("background-color", "#df9a57");
    $(".answer-button").attr("disabled", false);
}
/**
 * This function displays end modal'
 * @param {boolean} flagcount If flagCount is equal to number of flags in flags array then display endmodal.
 * @param {boolean} score When score is less than 50% display "Bad luck" on endmodal or else display "Well done!".
 */
function endGame() {
    if (flagCount === flags.length) {
        $(".flag").attr("src", "assets/images/" + flags[0] + "-flag.jpg");
        if (score < flags.length / 2) {
            $(".end-modal-title").text("Bad Luck!");
        } else {
            $(".end-modal-title").text("Well done!");
        }
        $(".end-modal-score").text("You scored " + score + " /" + flags.length)
        $("#endModal").modal("show");
    }
}
/**
 * This function resets the game.
 */
function resetGame() {
    flagCount = 0;
    score = 0;
    $(".flag-count").text("Flag: " + flagCount + "/" + flags.length);
    $(".score").text("Score: " + score);
    renderNextQuestion();
}
/**
 * This function on start up displays start modal, resets the game when the reset button is clicked,
 * changes the background colour of the selected answers when answer buttons are clicked and 
 * renders the next question. 
 */
$(document).ready(function () {
    $("#startModal").modal("show");
    $(".reset-button").on("click", resetGame);
    $(".answer-button").on("click", playGame);
    renderNextQuestion();
});