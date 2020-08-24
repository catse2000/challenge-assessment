var challengeContainer = document.querySelector(".challenge-wrapper");
var answersContainer = document.querySelector(".challenge-interactions")
var challengeTitle = document.createElement("h1");
challengeTitle.textContent = "Coding Quiz Challenge";
var challengeDesc = document.createElement("p");
challengeDesc.textContent = "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds!"
var startButton = document.createElement("button");
startButton.className = "startBtn";
startButton.textContent = "Start Quiz";
var answers = createElement("ol");
var timer = 75;
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

var startMenu = function(){
    challengeContainer.insertBefore(challengeTitle, answersContainer);
    challengeContainer.insertBefore(challengeDesc, answersContainer);
    answersContainer.appendChild(startButton);
}

var setQuestions = function(){
    challengeTitle.textContent = questions[num].question;
    if (challengeDesc || startButton){
        challengeDesc.remove();
        startButton.remove();
    }
    
    for (var i = 0; questions[num].choices.length; i++){
        var answerChoices = questions[num].choices[i];
        
        questionButtonEl.textContent = answer;
        questionButtonEl.setAttribute("answer-num", i);
        challengeQuestions.appendChild(questionButtonEl.cloneNode(true));
        
    }

}

window.addEventListener('load', startMenu);
startButton.addEventListener('click', setQuestions);