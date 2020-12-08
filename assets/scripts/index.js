$(document).ready(function() {
$("#startModal").modal('show');
resetAnswers();
resetButtons();
nextFlag(); 
});

// Takes an array of all the countries and shuffles
var countries = ["wales", "scotland", "ireland", "england", "france", "germany", "argentina", "nepal", "peru"];
function resetAnswers(){
function shuffleArray(countries) {
      for (let i = countries.length -1; i > 0; i--) {
         j = Math.floor(Math.random() * (i + 1));
         [countries[i], countries[j]] = [countries[j], countries[i]];
        }
 }
 // Takes 3 answers from the shuffled array and keeps shuffling if the answers
do {
    shuffleArray(countries);
shuffledArray = [countries[0],countries[1], countries[2]];
console.log("shuffling" + shuffledArray );
} while (shuffledArray.includes(flags[flagCount]))
console.log(shuffledArray);
shuffledArray.push(flags[flagCount]);
console.log(shuffledArray);
shuffleArray(shuffledArray); // Reshuffle array 
console.log(shuffledArray);
$(".answer1").text(shuffledArray[0]);
$(".answer2").text(shuffledArray[1]);
$(".answer3").text(shuffledArray[2]);
$(".answer4").text(shuffledArray[3]);
}

var flags = ["wales", "scotland", "ireland", "england", "ireland", "france"];
var flagCount = 0;
var answer;

$('.answer-button').on('click', function(answer) {
 answer = flags[flagCount];
    if ($(this).text().match(answer)) {
     console.log(answer + " correct");
     flagCount ++;
     resetAnswers();
     resetButtons();
     nextFlag();
 } else {
     console.log("incorrect")
 }
});

function nextFlag() {
    $(".flag").attr("src", "assets/images/" + flags[flagCount] + "-flag.jpg");
}

function resetButtons() {
    $('.answer-button').css("background-color", "#df9a57");
}











/*function question2(){

var answer = answers[0];
    setTimeout( function() {
$(".flag").attr("src", "assets/images/england-flag.jpg");
resetAnswers();
resetButtons();
}, 2000);
$('.answer-button').one('click', function() {
if ($(this).text().match("england")) {
$(this).css("background-color", "green");
question3();
} else {
    $(this).css("background-color", "red");
    
}
return;
});
}


function question3(){
var answer = answers[0];
    setTimeout(function() {
$(".flag").attr("src", "assets/images/scotland-flag.jpg");
resetAnswers();
resetButtons();
}, 2000);
$('.answer-button').one('click', function() {
if ($(this).text().match("scotland")) {
$(this).css("background-color", "green");
question4();
} else {
    $(this).css("background-color", "red");
    
}
return;
});
}

function question4(){
var answer = answers[0];
    setTimeout(function() {
$(".flag").attr("src", "assets/images/ireland-flag.jpg");
resetAnswers();
resetButtons();
}, 2000);
$('.answer-button').one('click', function() {
if ($(this).text().match("ireland")) {
$(this).css("background-color", "green");
question4();
} else {
    $(this).css("background-color", "red");
    
}
return;
});
}
*/







