# Testing

## Buttons

- All buttons should have the background colour of #df9a57 and font Cinzel.
- When clicked all non answer buttons background colour should flash #5abcb9.

![Image](screenshot)

## Background Image
- The background image should be displayed at all times.

![Image](screenshot)

## Start Modal
- On load a central popup modal should appear over the game.
- The modal should have background colour of #df9a57 and the font Cinzel.
- The modal should display the centralised text "Welcome!, Match the correct country to the flag" and below a "Begin" button.
- When the begin button is clicked the start modal should disappear. 

![Image](screenshot)


## Header
- The reset button should display on left hand side, with the background colour of #df9a57 and the font Cinzel.
- When clicked the reset button should reset the game flags, flag count and score. 
- The title of the game "Flags quiz" should display in the centre in the font Cinzel.
- On the right side the flag count "Flag: 0/*Number of flags*" and below it the score "Score: 0". All in the Cinzel font.

![Image](screenshot)

## Start
 - A central container should display the country flag from the first flag in the `flags` array.
 - There should be 4 buttons displaying below the flag - containing the text of 3 random countries from the `countries` array and the
  first country from the `flags` array. 
- The text within the 4 buttons should display in a different order every time the page is refreshed and when the reset button is clicked.
- The flag count should display "Flag: 0/*Number of flags*" and below it the score "Score: 0". 
 
 ![Image](screenshot)

## Playing the Game

### Correct Input
- A correct input should be when the button clicked matches the country of the flag displayed in the central container.   
 - When a correct input is given the button that was clicked background colour should turn green, 
 the flag count should display "Flag: *current flag/Number of flags*" and below it the score "Score: *number of times correct answer given* ". 

 ![Image](screenshot)

### Incorrect Input
 - An incorrect input should be when the button clicked does not match the country of the flag displayed in the central container. 
 - When a correct input is given the button that was clicked background colour should turn red, the button that matches
  the country of the flag displayed in the central container should turn green.
 -  The flag count should display "Flag: *current flag/Number of flags*" and below it the score "Score: *number of times correct answer given* ".

 ![Image](screenshot)

 ### Next Flag Displayed

## End Modal




