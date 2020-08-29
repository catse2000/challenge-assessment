var content = document.querySelector(".main-interactions"); //div.challenge-interactions
//var buttonContainer = document.querySelector(".buttons");//div.buttons
var headerTitleEl = document.createElement("h1"); //create "h1" element for menu title, question #, highScore titles
headerTitleEl.id = "title"; //assign h1 classname "title" for styling
//var headerTitle = document.querySelector("#title");//h1#title
var descEl = document.createElement("p"); //create "p" element for menu description, questions, high score results, and scores
descEl.id = "desc"; //assign id of "desc" to "p" element for styling
//var Desc = document.querySelector("#desc");//p#desc
var startBtn = document.createElement("button"); //create "button" element to be used as startBtn, question buttons, submit button, and clear and try buttons
startBtn.className = "choiceBtn";
startBtn.id = "startBtn";
startBtn.textContent = "Start Quiz"; //assign text to button
var buttonContainer = document.createElement("div"); //create "div" to house and style all buttons
buttonContainer.className = "buttons"; //assign className "buttons" to "div" for styling
var result = document.createElement("p");
result.id = "result";
// var startButton = document.createElement("button");
// var questionButton = document.createElement("button");



var scoreInput = document.createElement("input");
//var result = document.querySelector("#result");
var timerEl = document.querySelector("#timer"); //span that holds timer
var score = 0;
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
];

 var loadMenu = function(){ //used to load Menu at start, and also when user selects "tryAgain"
    headerTitleEl.textContent = "Coding Quiz Challenge"; //assign text to "h1"
    content.appendChild(headerTitleEl); //add "h1" mainInteractions "div"
    descEl.textContent = "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds!";
    content.appendChild(descEl); //add "p" to mainInteractions "div"
    content.appendChild(buttonContainer); //add "div" for buttons to mainInteractions "div"
    buttonContainer.appendChild(startBtn); //add "button" to "buttons" div
    content.appendChild(result);
    questionNum = 0; //clear questionNum to restart quiz
    score = 0; //clear previous score to restart quiz

//     headerTitle.textContent = "Coding Quiz Challenge";
//     Desc.textContent = "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds!"
//     startButton.className = "choiceBtn";
//     startButton.id = "startBtn";
//     buttonContainer.appendChild(startButton);
//     startButton.textContent = "Start Quiz";
//     num = 0;
//     score = 0;
}

var clearMenu = function(){ //used to clear the startMenu and start questions
    if (descEl || startBtn) //if descEl is true or startBtn is true, 
    {
        startBtn.remove(); //remove startBtn
    }
    setQuestions(); //start function that will compile questions
    countDown(); //starts timer
    //      if (Desc || startButton){
//         Desc.remove();
//         startButton.remove();
//     }
//     setQuestions();
//     countDown();
}

var setQuestions = function(){ //set up questions
    if(questionNum < questions.length){
        for (var i = 0; i < questions[questionNum].options.length; i++){
            headerTitleEl.textContent = "Question # " + (questionNum + 1);
            descEl.textContent = questions[questionNum].question;
            var answerChoice = questions[questionNum].options[i];
            var answerOptionBtn = document.createElement("button");
            answerOptionBtn.className = "choiceBtn";
            answerOptionBtn.textContent = answerChoice.toString();
            answerOptionBtn.setAttribute("question-num", i);
            buttonContainer.appendChild(answerOptionBtn);
            answerOptionBtn.addEventListener('click', checkAnswer);
        

//             headerTitle.textContent = questions[num].question;
//             var answerChoice = questions[num].choices[i];
//             var answerBtn = document.createElement("button");
//             answerBtn.className = "choiceBtn";
//             answerBtn.textContent = answerChoice.toString();
//             answerBtn.setAttribute("question-num", i);
//             buttonContainer.appendChild(answerBtn);
//             answerBtn.addEventListener('click', checkAnswer);
        }
    }
    else{
        alert("You completed all of the questions! Let's see how you did:");
    }
//     else{
//         alert("You completed all of the questions! Let's see how you did:");
//     }
    
};

var countDown = function(){ //timer for quiz
    timer = 75;
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



var checkAnswer = function(){ //check to see if the user response is correct
    var selectedAnswer = event.target.getAttribute("question-num"); //store the answer selected
    var correctAnswer = questions[questionNum].answer; //store correct answer from questions array for comparison with selectedAnswer
    
    var time = 1000;

    if (selectedAnswer == correctAnswer){
        result.textContent = "Correct!";
        score++;
        var myVar = setInterval(resultTimer, time);
    }
    else{
        result.textContent = "Wrong!";
        timer = timer - 5;
        var myVar = setInterval(resultTimer, time);
    }

    function resultTimer(){
        result.textContent = '';
        clearInterval(myVar);
    };

    clearQuestions();
    questionNum++;
    setQuestions();
    
//     var selectedAnswer = event.target.getAttribute("question-num");
//     var correctAnswer = questions[num].answer;

//         if (selectedAnswer == correctAnswer){
//             result.textContent = "Correct!"; 
//             score++;
//             var resultTimer = setInterval(function(){
//                 result.textContent = '';
//                 clearInterval(resultTimer);
//             }, 1500);
//         }
//         else{
//             result.textContent = "Wrong!";
//             var resultTimer = setInterval(function(){
//                 result.textContent = '';
//                 clearInterval(resultTimer);
//             }, 1500);
//         };
    
//     clearQuestions();
//     num++;
//     setQuestions();
}; 



var clearQuestions = function(){
    for (var i = 0; i < questions[questionNum].options.length; i++){
        var answers = document.querySelector(".choiceBtn");
        answers.remove();
    }
//     for (var i = 0; i < questions[num].choices.length; i++){
//         var answers = document.querySelector(".choiceBtn");
//         answers.remove();
//     }

};

var endGame = function(){
    result.remove();
    headerTitleEl.textContent = "All done!";
    descEl.textContent = "Your final score is " + score + "!";
    content.appendChild(descEl);
    var scoreInputWrapper = document.createElement("div");
    scoreInput.id = "scoreIntials";
    scoreInput.type = "text";
    var submitBtn = document.createElement("button");
    submitBtn.id = "submit";
    submitBtn.className = "choiceBtn";
    submitBtn.textContent = "Submit";
    content.appendChild(scoreInputWrapper);
    scoreInputWrapper.textContent = "Enter Initials: ";
    scoreInputWrapper.appendChild(scoreInput);
    scoreInputWrapper.appendChild(submitBtn);
    submitBtn.addEventListener("click", storeHighScore);

//     result.remove();
//     headerTitle.textContent = "All done!";
//     Desc.textContent = "Your final score is " + score + "!";
//     content.appendChild(Desc);
//     var initialsWrapper = document.createElement("div");
//     //var initialsInput = document.createElement("input");
//     initialsInput.id = "scoreInitials";
//     initialsInput.type = "text";
//     var submitBtn = document.createElement("button");
//     submitBtn.id = "submit";
//     submitBtn.className = "choiceBtn";
//     submitBtn.textContent = "Submit";
//     content.appendChild(initialsWrapper);
//     initialsWrapper.textContent = "Enter Initials: ";
//     initialsWrapper.appendChild(initialsInput);
//     initialsWrapper.appendChild(submitBtn);
//     console.log(submitBtn);
//     submitBtn.addEventListener("click", storeHighScore);

};

var storeHighScore = function(){
    var initials = scoreInput.value;
    if (initials === ''){
        alert("Please add your initials. We can't log your high score without them!");
    }
    else{
        alert("You're High Score was successfully added!");
        localStorage.setItem('Initials', initials);
        localStorage.setItem('Score', score);
    }

    showHighScore();
//     var initials = initialsInput.value;
//     console.log(initials);
//     if (initials === ''){
//         alert("Please add your initials. We can't log your high score without them!");
//     }
//     else{
//         alert("You're High Score was successfully added!");
//         localStorage.setItem('Initials', initials);
//         localStorage.setItem('Score', score);
//     }

//     showHighScore();
};

var showHighScore = function(){

    
}

window.addEventListener('load', loadMenu);
startBtn.addEventListener('click', clearMenu);