const flags = ["wales", "scotland", "ireland", "england", "france", "india", "germany", "usa", "argentina", "chile"];
let flagCount = 0;
let score = 0;
const countries = ["wales", "scotland", "ireland", "england", "france", "germany", "argentina", "usa", "chile", "india"];
// Takes an array of all the countries and shuffles
function shuffleArray(countries) {
    for (let i = countries.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        [countries[i], countries[j]] = [countries[j], countries[i]];
    }
}
// Shuffles countries array
function resetAnswers() {
    // Takes 3 answers from the shuffled countries array and keeps shuffling until it doesnt include the flag.
    do {
        shuffleArray(countries);
        shuffledArray = [countries[0], countries[1], countries[2]];
    } while (shuffledArray.includes(flags[flagCount]))
    shuffledArray.push(flags[flagCount]); // Adds current flag to array
    shuffleArray(shuffledArray); // Reshuffles array 
    $(".answer1").text(shuffledArray[0]); // Adds countries to the buttons text
    $(".answer2").text(shuffledArray[1]);
    $(".answer3").text(shuffledArray[2]);
    $(".answer4").text(shuffledArray[3]);
}

// if clicked button text matches flag it turns clicked button green if not turns clicked button red as well as the button containing the text from answer green.
function playGame() {
    $(".answer-button").attr("disabled", true);
    let answer = flags[flagCount];

    if ($(this).text().match(answer)) {
        $(this).css("background-color", "green");

        setTimeout(function () {
            flagCount++;
            score++;
            $('.flag-count').text("Flag: " + flagCount + "/10");
            $('.score').text("Score: " + score);
            resetAnswers();
            resetButtons();
            nextFlag();
        }, 2000);
    } else {
        console.log("incorrect");
        $(this).css("background-color", "red");
        $('.answer-button:contains("' + answer + '")').css("background-color", "green"); //turns correct answer button green
        setTimeout(function () {
            flagCount++;
            $('.flag-count').text("Flag: " + flagCount + "/10");
            resetAnswers();
            resetButtons();
            nextFlag();
        }, 2000);
    }
}

function nextFlag() {
    $(".flag").attr("src", "assets/images/" + flags[flagCount] + "-flag.jpg");
}

function resetButtons() {
    $('.answer-button').css("background-color", "#df9a57");
    $(".answer-button").attr("disabled", false);
}

// Modal pops up on start 
$(document).ready(function () {
    $("#startModal").modal('show');
    $('.answer-button').on('click', playGame);
    resetAnswers();
    resetButtons();
    nextFlag();
});