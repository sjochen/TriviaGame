var score = 0;
var clockRunning = false;
var time = 90;
var answer = '';
var questions = [{
    question: "Who is the Regional Manager of Dunder Mifflin in season one?",

    answers: [
        "Michael Scott",
        "Jim Halpert",
        "Dwight Shrut",
        "David Wallace"
    ],

    rightAnswer: 0
},
{
    question: "How many minutes did Michael work for Dunder Mifflin?",

    answers: [
        "5,624,100 min",
        "9,986,000 min",
        "11,975,245 min",
        "8,774,268 min"
    ],
    rightAnswer: 1
},

{
    question: "What is Holly's middle name?",

    answers: [
        "Morgan",
        "Tina",
        "Molly",
        "Partridge"
    ],

    rightAnswer: 3
},
{
    question: "Who is the only character to appear in every episode",

    answers: [
        "Pam",
        "Michael",
        "Kelly",
        "Dwight"
    ],

    rightAnswer: 3
},
{
    question: "How many seasons of The Office are there?",

    answers: [
        "10",
        "9",
        "8",
        "7"
    ],

    rightAnswer: 1
},
{
    question: "How many boxes of cookies did Kevin say he wanted to buy?",

    answers: [
        "50",
        "40",
        "triple digits",
        "he doesn't say"
    ],

    rightAnswer: 2
},
{
    question: "What is the firt prank Jim pulls on Dwight?",

    answers: [
        "He puts Dwight's stapler in jell-o",
        "He gift wraps Dwight's desk",
        "He moves Dwight's desk to the bathroom",
        "He sends Dwight on a secret FBI mission",
    ],

    rightAnswer: 0
},
{
    question: "What was Andy's nickname at Cornell?",

    answers: [
        "Nard Dog",
        "B-Dog",
        "Boner Champ",
        "He didn't have a nickname"
    ],

    rightAnswer: 2
},
{
    question: "What disease is Michael trying to raise awareness for with the fun run?",

    answers: [
        "AIDS",
        "Measles",
        "Herpes",
        "Rabies"
    ],

    rightAnswer: 3
},
{
    question: "What is the name of Angela's cat that she throws through the ceiling?",

    answers: [
        "Bandit",
        "Garbage",
        "Sprikles",
        "Mr. Whiskers"
    ],

    rightAnswer: 0
},

];
var userScore = {
    correct: 0,
    incorrect: 0, 
    };


$('#submit').hide();

$('#restart').hide();


function gameStart() {
    
    $('#timer').show();
    
    resetTimer();
    
    $('#trivia').show();
    
    $('#submit').show();
    
    $('#trivia').empty();
    
    for (var i = 0; i < questions.length; i++) {

        var divMaker = $('<div class="quesHold">');

        var pMaker = $('<p>').text(questions[i].question);

        divMaker.append(pMaker);

        $('#trivia').append(divMaker);

        var ans = $('<ol type="a">');

        for (var j = 0; j < 4; j++) {
           
            var li = $('<li>');
            
            var label = $('<label>');
            
            var input = $('<input type="radio">').attr({'id': 'gues' + i + '-' + j, 'name': 'gues' + i, 'value': j });

            
            label.text(questions[i].answers[j]);
            
            label.prepend(input);
            
            li.append(label);
            
            ans.append(li);

        }
        divMaker.append(ans);
    }
}


$('#start').on('click', function () {
    
    $('#start').hide();
    
    $('#audio')[0].play();
    
    gameStart();

});



$('#submit').on('click', function () {
    
    $('#restart').show();
    
    $('#trivia').hide();
    
    $('#submit').hide();

    $('#timer').hide();


for(var i=0; i<questions.length; i++){
        
        //var userAnswer='';
        //userAnswer= $('#gues0-0').attr('value');
       // console.log(userAnswer);
        answer=$('input[type=radio]:checked').next().html();{
        if(answer===questions[i].rightAnswer){
            userScore.correct++;
        }else{
            userScore.incorrect++;
        }
        console.log(userScore);
        /*if(userAnswer===0 && questions[i].rightAnswer==='a' || userAnswer===1 && questions[i].rightAnswer==='b' || userAnswer===2 && questions[i].rightAnswer==='c' || userAnswer===3 && questions[i].rightAnswer==='d'){
    
        }*/

        console.log(questions[i].rightAnswer)
    }

}
}); 



$('#restart').on('click', function () {
    
    $('#start').show();
    
    $('#restart').hide();
    
    $('#timer').hide();


});


function resetTimer() {

    $("#timer").text("01:30");
    
    start();
    
    function start() {
        
        time = 90;

        if (!clockRunning) {
            
            intervalId = setInterval(count, 1000);
            
            clockRunning = true;
        }
    }

    function count() {

        time--;

        var converted = timeConverter(time);
        
        if (time === 0) {
            clearInterval(intervalId);
            clockRunning = false;
            $('#trivia').hide();
            $('#timer').hide();

        }

        $("#timer").text(converted);
    }

    function timeConverter(t) {

        var minutes = Math.floor(t / 60);
        var seconds = t - (minutes * 60);

        if (seconds < 10) {
            seconds = "0" + seconds;
        }

        if (minutes === 0) {
            minutes = "00";
        }
        else if (minutes < 10) {
            minutes = "0" + minutes;
        }

        return minutes + ":" + seconds;
    }
}

