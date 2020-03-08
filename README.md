<!-- quizchallenge
Quiz Challenge using persistent local storage -->
<!-- First draft of game description,pseudocode -->
## Quiz Challenge

### What is Quiz Challenge?

Quiz Challenge is a single-player, timed, question and answer game. 

A series of ten multiple-choice questions is displayed on screen, one question at a time. 

Each question presents four choices, a, b, c, and d. 

There is only one correct choice for each answer. 

A point is added to the Player score for each correct answer. 

A point is deducted from Player score for each incorrect answer. 

Some time is taken off the countdown clock for each incorrect answer. 

The game is over when, either there is no time remaining on the clock, or, all ten questions have been answered. 

After game play ends, the Player is shown the score and can enter their initials on the webpage next to their score.

Player scores and initials are tracked and will persist to the next game.

### Pseudocode: Functional Requirements

Player is presented with a Start Button

When the player clicks the start button, a countdown timer is started. 

Immediately, the player is presented with multiple choice questions one at a time, as timer continues to count down.

- As questions are presented and answered, if the answer to a question is correct, the score is incremented by one and the countdown timer continues normally, however

- If the answer to a question is incorrect, the score is decremented by one and a certain amount of time is taken off the clock, as a penalty.

Questions continue to be displayed and answered, until the last question is answered, or until the countdown timer reaches zero, whichever happens first. Game play ends at that point in either case.

When the game is over, the score is displayed and User is presented with a text box for their initials.

### Technical Strategy to Meet Functional Requirements
<!-- // first draft
//declare initial global variables and reset variable values if needed -->

A array, dataArray, is declared to hold all Questions, and correctResponses for each question. Each Question in the dataArray has a nested array that holds the four possible responses for each question.

An array, scoreInitials is declared to store score and userInitials.

A variable named timeRemaining is set to zero

A function named askQuestion accepts six pieces of data as arguments (parameters);
- question, correctAnswer, choiceA, choiceB, choiceC, choiceD

A function call passes the same six pieces of data, in order.

<!-- ...to be continued -->

<!-- Display index.html -->
Index.html contains a button and a place for the score to display.

When button is clicked
An event listener, listening for a button click, fires up a function, startCountdown

Start Countdown sets starting time to an initial value.
