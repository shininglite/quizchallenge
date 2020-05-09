<!-- quizchallenge
Quiz Challenge uses persistent local storage -->
<!-- Updated game play explanation and updated functional requirements-->

## Quiz Challenge

### Purpose of This Project

The purpose of Quiz Challenge is to demonstrate:

how to use a timer to control events in a JavaScript application.

how to store information in arrays of objects, and how to control the display of that information.

how to dynamically manipulate the Document Object Model using JavaScript or jQuery.

how to use Local Storage to store data in the browser, persistently, meaning data will be available to the application even after the browser window is closed.

### How to Use this Project

Anyone with a computer and internet access can either play the quiz, or view the project. 

Play this quiz is at:
 https://shininglite.github.io/quizchallenge 
 
View the source code for this quiz at https://github.com/shininglite/quizchallenge/

### Animation Demonstration
The following animation demonstrates the application functionality:

![code quiz](./Assets/04-web-apis-homework-demo.gif)


### What is Quiz Challenge?

Quiz Challenge is a single-player, timed, question and answer game.

When the web page loads, Player is presented with a Start button and is asked for their initials.

When the player clicks the button, the first of several questions, and its four multiple-choice answers, appears on the screen, and a countdown timer starts.

For each of the multiple choice questions displayed:

The player chooses one of the four answers, only one of which is correct. 

If answer is correct, a point is added to the Player score.

Otherwise, a point is deducted from Player score for each incorrect answer, and some time is taken off the clock.

The game is over when, either there is no time remaining on the clock, or, all of questions have been answered.

After game play ends, the Player is shown the score and their initials.

Player scores and their initials are tracked and will persist to the next game.

### Functional Requirements

<!-- Declare variables and initial values. -->

A variable, timeRemaining, is declared and is set to an initial value, in milliseconds.

An array of objects, questionsAndChoices is declared. Each object in the array holds questions, and four choices. Each choice has boolean value of true or false.

A variable, playerInitials, is declared and set to an empty string.

A variable, score, is declared and is set to zero.

<!-- Or, an array of objects, scoreAndInitials is declared. It stores playerScore and playerInitials. -->

Index.html contains a start button and a place for the score to display, and a place for the playerInitials to display

Before game play begins, a prompt asks for player's initials and stores that in a variable called playerInitials.

When the Start button is clicked, an event listener, listening for a button click, fires up a function named countdown, 

While timeRemaining is greater than 0 milliseconds && a counter is less than the length of the questionsAndChoices array:

    A For Loop iterates through the array of questionsAndChoices.

    If the answer to a question is correct, call the correctChoice function.

    Else call the incorrectChoice function.

<!-- End of While Loop -->

    Store playerScore and playerInitials in local storage.
    Write playerScore to document.
    Write playerInitials to document.
    Hid start button.
    Display document showing score and initials.

Functions:

A function, countdown, 
    hides the start button.
    displays playerScore.
    displays userInitials.
    sets timeRemaining to 180000 milliseconds, which is three minutes. 
    decrements 1000 milliseconds every second.
    updates the display in the document every second.

A function, correctChoice, 
    increments playerScore
    updates the document display of that score.

A function, incorrectChoice, 
    decrements playerScore, 
    updates playerScore in document display, and 
    reduces timeRemaining by 10000 milliseconds, which is 10 seconds.
    writes timeRemaining, in seconds, to the document.

### Author

Tom van Deusen