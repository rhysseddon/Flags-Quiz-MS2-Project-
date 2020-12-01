
// This code is for start pop up modal
$(document).ready(function() {
$("#startModal").modal('show');
 });

// Below code shuffles answers 
 let answers = ["Wales", "Scotland", "Ireland", "England"];
  function shuffleArray(answers) {
      
      for (let i = answers.length -1; i > 0; i--) {
         j = Math.floor(Math.random() * (i + 1));
         [answers[i], answers[j]] = [answers[j], answers[i]];
     }
 }
 
shuffleArray(answers);
$(".answer1").text(answers[0]);
$(".answer2").text(answers[1]);
$(".answer3").text(answers[2]);
$(".answer4").text(answers[3]);

 //first question

 $('.answer-button').on('click', function() {
if ($(this).text() === "Wales") {
$(this).css("background-color", "green");
setTimeout( function() {
$(".flag").attr("src", "assets/images/england-flag.jpg")
}, 2000);
} else {
   $(this).css("background-color", "red");
}
});



