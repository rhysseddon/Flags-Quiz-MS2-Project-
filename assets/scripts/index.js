
// This code is for start pop up modal
$(document).ready(function() {
$("#startModal").modal('show');
resetAnswers();
question1();
 });
// Below code shuffles answers array

var answers = ["wales", "scotland", "ireland", "england"];
function resetAnswers(){
function shuffleArray(answers) {
      for (let i = answers.length -1; i > 0; i--) {
         j = Math.floor(Math.random() * (i + 1));
         [answers[i], answers[j]] = [answers[j], answers[i]];
        }
 }
 // Below code changes answer button text to random answer
shuffleArray(answers);
$(".answer1").text(answers[0]);
$(".answer2").text(answers[1]);
$(".answer3").text(answers[2]);
$(".answer4").text(answers[3]);
}

function resetButtons() {
    $('.answer-button').css("background-color", "#df9a57");
}

function question1(){
 //first question
 // The code below changes the colours of the buttons when clicked
 var shuffledAnswers = [answers[0],answers[1],answers[2],answers[3]];
 console.log(shuffledAnswers)
 $(".flag").attr("src", "assets/images/" + shuffledAnswers[0] + "-flag.jpg");
$('.answer-button').one('click', function() {
if ($(this).text().match(shuffledAnswers[0])) {
$(this).css("background-color", "green");
question2();
} else {
    $(this).css("background-color", "red");
   
}


return;
});
}
function question2(){
// The code below changes the flag after 2 seconds
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
// The code below changes the flag after 2 seconds
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










