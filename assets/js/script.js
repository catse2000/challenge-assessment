var main = document.querySelector("#page-content");
var contentContainer = document.querySelector(".main-wrapper"); //div.challenge-wrapper
var content = document.querySelector(".main-interactions"); //div.challenge-interactions
var buttonContainer = document.querySelector(".buttons");//div.buttons
var challengeTitle = document.querySelector("#title");//h1#title 
var challengeDesc = document.querySelector("#desc");//p#desc
var startButton = document.createElement("button");
var questionButton = document.createElement("button");
var initialsInput = document.createElement("input");
var result = document.querySelector("#result");
var timerEl = document.querySelector("#timer"); //span that holds timer
var score = 0;
var num = 0; //used to store which question is currently being displayed
var questions = [
    {
        question: "Inside which HTML element do we put the Javascript",
        choices: ["<javascript>", "<scripting>", "<js>", "<script>"],
        answer: 3 
    },
    {
        question: "What is the correct JavaScript syntax to change the content of this HTML element: <p id='demo'>This is a demonstration.</p>",
        choices:["document.getElement('p').innerHTML = 'Hello World!';", "document.getElementById('demo').innerHTML = 'Hello World!';", "document.getElementByName('p').innerHTML = 'Hello World'!;", "#demo.innerHTML = 'Hello World!';"],
        answer: 1
    },
    {
        question: "Where is the correct place to insert a JavaScript?", 
        choices: ["Both the <head> section and the <body> section are correct", "The <body> section", "The <head> section"],
        answer: 0
    },
    {
        question: "What is the correct syntax for referring to an external script called 'xxx.js'?",
        choices: ["<script href='xxx.js'>", "<script src='xxx.js'>", "<script name='xxx.js'>"],
        answer: 1
    },
    {
        question: "The external JavaScript file must contain the <script> tag.",
        choices: ["False", "True"],
        answer: 0
    },
    {
        question: "How do you write 'Hello World' in an alert box?",
        choices: ["alertBox('Hello World');", "msgBox('Hello World');", "alert('Hello World');", "msg('Hello World');"],
        answer: 2
    },
    {
        question: "How do you create a function in JavaScript?",
        choices: ["function:myFunction()", "function myFunction()", "function = myFunction()"],
        answer: 1
    },
    {
        question: "How do you call a function named 'myFunction'?",
        choices: ["call myFunction()", "myFunction()", "call function myFunction()"],
        answer: 1 
    },
    {
        question: "How to write an IF statement in JavaScript?",
        choices: ["if i = 5 then", "if i == 5 then", "if i = 5", "if(i == 5)"],
        answer: 3
    },
    {
        question: "How to write an IF statement for executing some code if 'i' is NOT equal to 5?",
        choices: ["if i =! 5 then", "if i <> 5", "if (i <> 5)", "if (i != 5)"],
        answer: 3
    },
    {
        question: "How does a WHILE loop start?", 
        choices:["while i = 1 to 10", "while (i <= 10)", "while (i <= 10; i++)"],
        answer: 1
    },
    {
        question: "How does a FOR loop start?", 
        choices:["for (i <= 5; i++)", "for (i = 0; i <= 5)", "for i = 1 to 5", "for (i = 0; i <= 5; i++)"],
        answer: 3
    },
    {
        question: "How can you add a comment in a JavaScript?", 
        choices:["'This is a comment", "//This is a comment", "<!--This is a comment-->"],
        answer: 1
    },
    {
        question: "How to insert a comment that has more than one line?", 
        choices:["//This comment has more than one line//", "<!--This comment has more than one line-->", "/*This comment has more than one line*/  "],
        answer: 2
    },
    {
        question: "What is the correct way to write a JavaScript array?", 
        choices:["var colors = 1 = ('red'), 2 = ('green'), 3 = ('blue')", "var colors = 'red', 'green', 'blue'", "var colors = ['red', 'green', 'blue']", "var colors = (1:'red', 2:'green', 3:'blue')"],
        answer: 2
    },
    {
        question: "How do you round the number 7.25, to the nearest integer?", 
        choices:["Math.round(7.25)", "round(7.25)", "rnd(7.25)", "Math.rnd(7.25)"],
        answer: 0
    },
    {
        question: "How do you find the number with the highest value of x and y?", 
        choices:["ceil(x, y)", "Math.ceil(x, y)", "top(x, y)", "Math.max(x, y)"],
        answer: 3
    },
    {
        question: "What is the correct JavaScript syntax for opening a new window called 'w2' ?", 
        choices:["w2 = window.new('http://www.w3schools.com');", "w2 = window.open('http://www.w3schools.com');"],
        answer: 1
    },
    {
        question: "JavaScript is the same as Java.", 
        choices:["False", "True"],
        answer: 0
    },
    {
        question: "How can you detect the client's browser name?", 
        choices:["navigator.appName", "client.navName", "browser.name"],
        answer: 2
    },
    {
        question: "Which event occurs when the user clicks on an HTML element?", 
        choices:["onmouseclick", "onclick", "onchange", "onmouseover"],
        answer: 1
    },
    {
        question: "How do you declare a JavaScript variable?", 
        choices:["var carName;", "variable carName;", "v carName;"],
        answer: 0
    },
    {
        question: "Which operator is used to assign a value to a variable?", 
        choices:["X", "-", "=", "*"],
        answer: 2
    },
    {
        question: "What will the following code return: Boolean(10 > 9)", 
        choices:["false", "NaN", "true"],
        answer: 2
    },
    {
        question: "Is JavaScript case-sensitive?", 
        choices:["Yes", "No"],
        answer: 0
    }
];

var loadMenu = function(){ //used to load Menu at start, and also when user selects "tryAgain"
    challengeTitle.textContent = "Coding Quiz Challenge";
    challengeDesc.textContent = "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds!"
    startButton.className = "choiceBtn";
    startButton.id = "startBtn";
    buttonContainer.appendChild(startButton);
    startButton.textContent = "Start Quiz";
    num = 0;
    score = 0;
}

var clearMenu = function(){
     if (challengeDesc || startButton){
        challengeDesc.remove();
        startButton.remove();
    }
    setQuestions();
    countDown();
}

var countDown = function(){
    timer = 5;
    var countInterval = setInterval(function(){
        if (timer > 0){
            timer--;
            timerEl.textContent = timer;
        }
        else{
            alert("You ran out of time! Let's see how you did:");
            clearQuestions();
            endGame();
            clearInterval(countInterval);
        }
    }, 1000)
    
};

var setQuestions = function(){
    if(num < questions.length){
        for (var i = 0; i < questions[num].choices.length; i++){
            challengeTitle.textContent = questions[num].question;
            var answerChoice = questions[num].choices[i];
            var answerBtn = document.createElement("button");
            answerBtn.className = "choiceBtn";
            answerBtn.textContent = answerChoice.toString();
            answerBtn.setAttribute("question-num", i);
            buttonContainer.appendChild(answerBtn);
            answerBtn.addEventListener('click', checkAnswer);
        }
    }
    else{
        alert("You completed all of the questions! Let's see how you did:");
    }
    
};

var checkAnswer = function(){
    var selectedAnswer = event.target.getAttribute("question-num");
    var correctAnswer = questions[num].answer;

        if (selectedAnswer == correctAnswer){
            result.textContent = "Correct!"; 
            score++;
            var resultTimer = setInterval(function(){
                result.textContent = '';
                clearInterval(resultTimer);
            }, 1500);
        }
        else{
            result.textContent = "Wrong!";
            var resultTimer = setInterval(function(){
                result.textContent = '';
                clearInterval(resultTimer);
            }, 1500);
        };
    
    clearQuestions();
    num++;
    setQuestions();
}; 



var clearQuestions = function(){
    for (var i = 0; i < questions[num].choices.length; i++){
        var answers = document.querySelector(".choiceBtn");
        answers.remove();
    }

}

var endGame = function(){
    result.remove();
    challengeTitle.textContent = "All done!";
    challengeDesc.textContent = "Your final score is " + score + "!";
    content.appendChild(challengeDesc);
    var initialsWrapper = document.createElement("div");
    //var initialsInput = document.createElement("input");
    initialsInput.id = "scoreInitials";
    initialsInput.type = "text";
    var submitBtn = document.createElement("button");
    submitBtn.id = "submit";
    submitBtn.className = "choiceBtn";
    submitBtn.textContent = "Submit";
    content.appendChild(initialsWrapper);
    initialsWrapper.textContent = "Enter Initials: ";
    initialsWrapper.appendChild(initialsInput);
    initialsWrapper.appendChild(submitBtn);
    console.log(submitBtn);
    submitBtn.addEventListener("click", storeHighScore);

};

var storeHighScore = function(){
    var initials = initialsInput.value;
    console.log(initials);
    if (initials === ''){
        alert("Please add your initials. We can't log your high score without them!");
    }
    else{
        alert("You're High Score was successfully added!");
        localStorage.setItem('Initials', initials);
        localStorage.setItem('Score', score);
    }

    showHighScore();
};

var showHighScore = function(){
    console.log("test");
}

window.addEventListener('load', loadMenu);
startButton.addEventListener('click', clearMenu);

