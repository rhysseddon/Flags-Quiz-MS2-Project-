
// This code is for start pop up modal
$(document).ready(function() {
$("#startModal").modal('show');
 });

// Below code shuffles answers array
 let answers = ["Wales", "Scotland", "Ireland", "England"];
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


 //first question
 // The code below changes the colours of the buttons when clicked
$('.answer-button').on('click', function() {
if ($(this).text().match("Wales")) {
$(this).css("background-color", "green");
// The code below changes the flag after 2 seconds
setTimeout( function() {
$(".flag").attr("src", "assets/images/england-flag.jpg")
}, 2000);
} else {
    $(this).css("background-color", "red");
    $("button:contains('Wales')").css("background-color", "green");
// The code below changes the flag after 2 seconds
    setTimeout( function() {
$(".flag").attr("src", "assets/images/england-flag.jpg")
}, 3000); 
}
});





