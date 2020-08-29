//Global variables that are used throughout the program
var content = document.querySelector(".main-interactions"); //div.challenge-interactions
var navHighScoreBtn = document.querySelector("#high-scores");
var headerTitleEl = document.createElement("h1"); //create "h1" element for menu title, question #, highScore titles
headerTitleEl.id = "title"; //assign h1 classname "title" for styling
var descEl = document.createElement("p"); //create "p" element for menu description, questions, high score results, and scores
descEl.id = "desc"; //assign id of "desc" to "p" element for styling
var changeContainer = document.createElement("div"); //create div that will handle changing content like buttons and paragraphs
changeContainer.className = "change-container"; //give changeContainer class of "change-container"
var startBtn = document.createElement("button"); //create "button" element to be used as startBtn, question buttons, submit button, and clear and try buttons
startBtn.className = "choiceBtn startBtn"; // give startBtn class of "choiceBtn startBtn"
startBtn.id = "startBtn"; //give startBtn id of "startBtn"
startBtn.textContent = "Start Quiz"; //assign text to button //give startBtn textContent of "Start Quiz"
var result = document.createElement("p"); //create p element to house "result" info
result.id = "result"; //give result element id of "result"
var scoreInput = document.createElement("input"); //creates element for input that will be used to enter high score initials
var time = 75; //keep track of default time
var timer = time; //timer to maintain the document
var timerEl = document.querySelector("#timer"); //span that holds timer text info
var score = 0; //score that keeps track of users correct answers
var questionNum = 0; //used to store which question is currently being displayed
var questions = [
    {
        question: "Inside which HTML element do we put the Javascript?",
        options: ["<javascript>", "<scripting>", "<js>", "<script>"],
        answer: 3 
    },
    {
        question: "What is the correct JavaScript syntax to change the content of this HTML element: <p id='demo'>This is a demonstration.</p>",
        options:["document.getElement('p').innerHTML = 'Hello World!';", "document.getElementById('demo').innerHTML = 'Hello World!';", "document.getElementByName('p').innerHTML = 'Hello World'!;", "#demo.innerHTML = 'Hello World!';"],
        answer: 1
    },
    {
        question: "Where is the correct place to insert a JavaScript?", 
        options: ["Both the <head> section and the <body> section are correct", "The <body> section", "The <head> section"],
        answer: 0
    },
    {
        question: "What is the correct syntax for referring to an external script called 'xxx.js'?",
        options: ["<script href='xxx.js'>", "<script src='xxx.js'>", "<script name='xxx.js'>"],
        answer: 1
    },
    {
        question: "The external JavaScript file must contain the <script> tag.",
        options: ["False", "True"],
        answer: 0
    },
    {
        question: "How do you write 'Hello World' in an alert box?",
        options: ["alertBox('Hello World');", "msgBox('Hello World');", "alert('Hello World');", "msg('Hello World');"],
        answer: 2
    },
    {
        question: "How do you create a function in JavaScript?",
        options: ["function:myFunction()", "function myFunction()", "function = myFunction()"],
        answer: 1
    },
    {
        question: "How do you call a function named 'myFunction'?",
        options: ["call myFunction()", "myFunction()", "call function myFunction()"],
        answer: 1 
    },
    {
        question: "How to write an IF statement in JavaScript?",
        options: ["if i = 5 then", "if i == 5 then", "if i = 5", "if(i == 5)"],
        answer: 3
    },
    {
        question: "How to write an IF statement for executing some code if 'i' is NOT equal to 5?",
        options: ["if i =! 5 then", "if i <> 5", "if (i <> 5)", "if (i != 5)"],
        answer: 3
    },
    {
        question: "How does a WHILE loop start?", 
        options:["while i = 1 to 10", "while (i <= 10)", "while (i <= 10; i++)"],
        answer: 1
    },
    {
        question: "How does a FOR loop start?", 
        options:["for (i <= 5; i++)", "for (i = 0; i <= 5)", "for i = 1 to 5", "for (i = 0; i <= 5; i++)"],
        answer: 3
    },
    {
        question: "How can you add a comment in a JavaScript?", 
        options:["'This is a comment", "//This is a comment", "<!--This is a comment-->"],
        answer: 1
    },
    {
        question: "How to insert a comment that has more than one line?", 
        options:["//This comment has more than one line//", "<!--This comment has more than one line-->", "/*This comment has more than one line*/  "],
        answer: 2
    },
    {
        question: "What is the correct way to write a JavaScript array?", 
        options:["var colors = 1 = ('red'), 2 = ('green'), 3 = ('blue')", "var colors = 'red', 'green', 'blue'", "var colors = ['red', 'green', 'blue']", "var colors = (1:'red', 2:'green', 3:'blue')"],
        answer: 2
    },
    {
        question: "How do you round the number 7.25, to the nearest integer?", 
        options:["Math.round(7.25)", "round(7.25)", "rnd(7.25)", "Math.rnd(7.25)"],
        answer: 0
    },
    {
        question: "How do you find the number with the highest value of x and y?", 
        options:["ceil(x, y)", "Math.ceil(x, y)", "top(x, y)", "Math.max(x, y)"],
        answer: 3
    },
    {
        question: "What is the correct JavaScript syntax for opening a new window called 'w2' ?", 
        options:["w2 = window.new('http://www.w3schools.com');", "w2 = window.open('http://www.w3schools.com');"],
        answer: 1
    },
    {
        question: "JavaScript is the same as Java.", 
        options:["False", "True"],
        answer: 0
    },
    {
        question: "How can you detect the client's browser name?", 
        options:["navigator.appName", "client.navName", "browser.name"],
        answer: 2
    },
    {
        question: "Which event occurs when the user clicks on an HTML element?", 
        options:["onmouseclick", "onclick", "onchange", "onmouseover"],
        answer: 1
    },
    {
        question: "How do you declare a JavaScript variable?", 
        options:["var carName;", "variable carName;", "v carName;"],
        answer: 0
    },
    {
        question: "Which operator is used to assign a value to a variable?", 
        options:["X", "-", "=", "*"],
        answer: 2
    },
    {
        question: "What will the following code return: Boolean(10 > 9)", 
        options:["false", "NaN", "true"],
        answer: 2
    },
    {
        question: "Is JavaScript case-sensitive?", 
        options:["Yes", "No"],
        answer: 0
    }
]; //array that holds all of the quiz quesitions


 var loadMenu = function(){ //used to load Menu at start, and also when user selects "tryAgain"
    // set program for start
    timer = time; //resets timer to number stored in "time"
    questionNum = 0; //clear questionNum to restart quiz
    score = 0; //clear previous score to restart quiz
    timerEl.textContent = timer; //stores value of "timer" on the timerEl element the user sees
    clearChangeContainer(); //refreshes the changeContainer and allows new elements to be loaded
    headerTitleEl.textContent = "Coding Quiz Challenge"; 
    content.appendChild(headerTitleEl); 
    descEl.textContent = "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds!";
    
    //add elements to page
    content.appendChild(descEl); //add "p" to mainInteractions "div"
    content.appendChild(changeContainer); //add "div" for buttons to mainInteractions "div"
    changeContainer.appendChild(startBtn); //add "button" to "buttons" div
    content.appendChild(result);
}

//clears menu and starts the quiz
var clearMenu = function(){ //used to clear the startMenu and start questions
    clearChangeContainer(); //refresh change container for new elements
    setQuestions(); //start function that will compile questions
    countDown(); //starts timer
}

//updates menu to include questions and adds answer choices
var setQuestions = function(){ 
    if(questionNum < questions.length){
        for (var i = 0; i < questions[questionNum].options.length; i++){
            //compile questions and update existing elements
            headerTitleEl.textContent = "Question # " + (questionNum + 1);
            descEl.textContent = questions[questionNum].question;
            var answerChoice = questions[questionNum].options[i];
            var answerOptionBtn = document.createElement("button");
            answerOptionBtn.className = "choiceBtn optionBtn";
            answerOptionBtn.textContent = (i+1) + ". " + answerChoice.toString();
            answerOptionBtn.setAttribute("question-num", i);
            changeContainer.appendChild(answerOptionBtn);

            //wait until answerOptionBtn is clicked to check if answer is correct and log score
            answerOptionBtn.addEventListener('click', checkAnswer);
        }
    }
    else{ 
        alert("You completed all of the questions! Let's see how you did:");
        timer = time; //reset timer
    }
};

//starts timer
var countDown = function(){
    var countInterval = setInterval(function(){
        if (timer > 0 && questionNum != questions.length){
            timer--;
            timerEl.textContent = timer;
        }
        else if(questionNum == questions.length){
            clearChangeContainer(); //resets change container for new elements
            clearInterval(countInterval); //stops timer
            endGame(); //start endGame function

        }
        else{
            alert("You ran out of time! Let's see how you did:");
            timer = time;
            clearChangeContainer();
            endGame();
            clearInterval(countInterval);
        }
    }, 1000)
    
};

//checks if answer is correct or incorrect and logs score or penalizes
var checkAnswer = function(){ 
    var selectedAnswer = event.target.getAttribute("question-num"); //store the answer selected
    var correctAnswer = questions[questionNum].answer; //store correct answer from questions array for comparison with selectedAnswer
    
    var time = 1000; 

    if (selectedAnswer == correctAnswer){
        score++;
        result.textContent = "Correct! Your Score is: " + score;
        var myVar = setInterval(resultTimer, time); //determines how long message will show for
    }
    else{
        timer = timer - 5;
        result.textContent = "Wrong! Lose 5 seconds";
        var myVar = setInterval(resultTimer, time);//determines how long message will show for
    }

    //determins what is shown after myVar
    function resultTimer(){
        result.textContent = '';
        clearInterval(myVar);
    };

    clearChangeContainer(); //clear changeContainer for new elements
    questionNum++; //add to question number that array provides
    setQuestions(); //go to setQuestions function to set new question
}; 

//handles end of quiz
var endGame = function(){
    //prepare for new elements
    clearChangeContainer();
    result.remove();

    //add new elements
    headerTitleEl.textContent = "All done!";
    descEl.textContent = "Your final score is " + score + "!";
    content.appendChild(descEl);
    scoreInput.id = "scoreIntials";
    scoreInput.type = "text";
    var submitBtn = document.createElement("button");
    submitBtn.id = "submit";
    submitBtn.className = "choiceBtn";
    submitBtn.textContent = "Submit";
    changeContainer.textContent = "Enter Initials: ";
    changeContainer.appendChild(scoreInput);
    changeContainer.appendChild(submitBtn);

    //when submitBtn is clicked go to storeHighScore function
    submitBtn.addEventListener("click", storeHighScore);

};

// stores HighScore in local memory in browser
var storeHighScore = function(){
    var initialName = []; //store values entered in input
    var initialScore = []; //stores score at end of quiz
    var initials = scoreInput.value; //stores value of scoreInput into variable initials
    initialName.push([initials]); //push to array initialName
    initialScore.push([score]); //push to array initialScore

    //error handling
    if (initials === ''){
        alert("Please add your initials. We can't log your high score without them!");
    }
    else{
        alert("You're High Score was successfully added!");
        localStorage.setItem('Initials', JSON.stringify(initialName)); //combines array as string and stores in local storage
        localStorage.setItem('Score', JSON.stringify(initialScore)); //combines array as string and stores in local storage
    }

    showHighScore(); //start function showHighScore()
};

//displays high score
var showHighScore = function(){
    if (timer == time){//error handling: to prevent user from getting to highScore menu during a quiz
        if (localStorage.length > 0){ //error handling: to prevent user from going to highscore when there are no values to show
            //prepare for new elements
            clearChangeContainer();
            descEl.remove();

            // add new elements
            var test = document.createElement("div");
            headerTitleEl.textContent = "High Scores";
            var scoreListEl = document.createElement("ol");
            scoreListEl.className = "scoreList";
            changeContainer.appendChild(scoreListEl);
            var tryAgainBtn = document.createElement("button");
            tryAgainBtn.className = "choiceBtn quizEndBtn";
            tryAgainBtn.id = "tryAgainBtn";
            tryAgainBtn.textContent = "Try Again?"
            var clearBtn = document.createElement("button");
            clearBtn.className = "choiceBtn quizEndBtn";
            clearBtn.id = "clearBtn";
            clearBtn.textContent = "Clear Scores";
            changeContainer.appendChild(tryAgainBtn);
            changeContainer.appendChild(clearBtn);

            //retrieve values from local storage
            var arrName = JSON.parse(localStorage.getItem('Initials'));
            var arrScore = JSON.parse(localStorage.getItem('Score'));

            //display values 
            for (var i = 0; i < arrName.length; i++){
                var scoreListItemEl = document.createElement("li");
                scoreListItemEl.textContent = arrName[i] + " - " + arrScore[i];
                scoreListEl.appendChild(scoreListItemEl);
            }
            
            //event listners
            tryAgainBtn.addEventListener('click', loadMenu); //start loadMenu() when tryAgainBtn is clicked
            clearBtn.addEventListener('click', clearScores); //start clearScores() when clearBtn is clicked
        }
        
        else{ //error handling when highscores button is clicked before there are scores to see
            alert("There are no scores to show right now. Try taking the quiz first.");
        }
    }
    else{ //error handling when highscores button is clicked while in a quiz
        alert("Finish the quiz first");
    }
}

//clear scores from local storage
var clearScores = function(){
    localStorage.clear();
    alert("These scores have been cleared!");
    loadMenu(); //restart start menu
};

//used to clear changeContainer to add new elements
var clearChangeContainer = function(){
    while(changeContainer.firstChild){
        changeContainer.removeChild(changeContainer.firstChild);
    };
}

//primary event listeners
window.addEventListener('load', loadMenu);
startBtn.addEventListener('click', clearMenu);
navHighScoreBtn.addEventListener('click', showHighScore);