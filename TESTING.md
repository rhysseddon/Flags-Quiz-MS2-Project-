# Testing

![Image](screenshot)

## Background Image
- The background image should be displayed at all times.

![Image](screenshot)

## Start Modal
- On load a central popup modal should appear over the game.
- The modal should have background colour of `#df9a57` and the font Cinzel.
- The modal should display the centralised text "Welcome!, Match the correct country to the flag" and below a "Begin" button.
- When the begin button is clicked the background colour should flash #5abcb9 and start modal should disappear. 

![Image](screenshot)


## Header
- The reset button should display on left hand side, with the background colour of `#df9a57` and the font Cinzel.
- When clicked the reset button background colour should flash #5abcb9 and should reset the game flags, flag count and score. 
- The title of the game "Flags quiz" should display in the centre in the font Cinzel.
- On the right side the flag count should display "Flag: *current flag/Number of flags*" In the font Cinzel.
- Below the flag count the score "Score: *number of times correct answer given* ". In the font Cinzel.

![Image](screenshot)

## Start
 - A central container should display a country flag.
 - Below the flag should be 4 buttons they should have the background colour of `#df9a57` and font Cinzel.
 - The buttons should contain the text of 3 random countries and 1 country that matches the flag above. 
 - The text within the 4 buttons should display in a different order every time the page is refreshed and when the reset button is clicked.
 - The flag count should display "Flag: 0/*Number of flags*" and below it the score "Score: 0". 
 
 ![Image](screenshot)

## Playing the Game

### Correct Input
- A correct input should be when the button clicked matches the country of the flag displayed in the central container.   
 - When a correct input is given the button that was clicked background colour should turn green.
 - After a 2 second delay, the flag count should increase by 1, the score should increase by 1 and a new flag should appear.

 ![Image](screenshot)

### Incorrect Input
 - An incorrect input should be when the button clicked does not match the country of the flag displayed in the central container. 
 - When a correct input is given the button that was clicked background colour should turn red, the button that matches
  the country of the flag displayed in the central container should turn green.
 - After a 2 second delay, the flag count should increase by 1 and a new flag should appear.
 

 ![Image](screenshot)

 ## End Modal 

 - Once the flag count has reached the maxiumum number of flags available, the end modal should appear.
- The modal should have background colour of `#df9a57` and the font Cinzel.
- If the users score is less than 50% of the flag count the modal should display the centralised text "Bad Luck!, and below that "You Scored: *Their score*/*Number of flags* "
- If the users score is more than 50% of the flag count the modal should display the centralised text "Well Done!, and below that "You Scored: *Their score*/*Number of flags* "
- Below the text should be a central restart button. 
- When the restart button is clicked the background colour should flash `#5abcb9`, the modal should disappear 
 and the flag count and score should reset to 0 and the first flag should be displayed again. 

![Image](screenshot)

