


var score = 0;






var questions = [{
        question: "Who is the Regional Manager of Dunder Mifflin in season one?",

        answers: [
             "Michael Scott",
             "Jim Halpert",
             "Dwight Shrut",
             "David Wallace"
        ],

        rightAnswer: "a"
    },
    {
        question: "How many minutes did Michael work for Dunder Mifflin?",
        
        answers: [
             "5,624,100 min",
             "9,986,000 min",
             "11,975,245 min",
             "8,774,268 min"
        ],
        rightAnswer: "b"
    },

    {
        question: "What is Holly's middle name?",

        answers: [
             "Morgan",
             "Tina",
             "Molly",
             "Partridge"
        ],

        rightAnswer: "d"
    },
    {
        question: "Who is the only character to appear in every episode",

        answers: [
             "Pam",
             "Michael",
             "Kelly",
             "Dwight"
        ],

        rightAnswer: "d"
    },
    {
        question: "How many seasons of The Office are there?",

        answers: [
             "10",
             "9",
             "8",
             "7"
        ],

        rightAnswer: "b"
    },
    {
        question: "How many boxes of cookies did Kevin say he wanted to buy?",

        answers: [
             "50",
             "40",
             "triple digits",
             "he doesn't say"
        ],

        rightAnswer: "c"
    },
    {
        question: "What is the firt prank Jim pulls on Dwight?",

        answers: [
             "He puts Dwight's stapler in jell-o",
             "He gift wraps Dwight's desk",
             "He moves Dwight's desk to the bathroom",
             "He sends Dwight on a secret FBI mission",
        ],

        rightAnswer: "a"
    },
    {
        question: "What was Andy's nickname at Cornell?",

        answers: [
             "Nard Dog",
             "B-Dog",
             "Boner Champ",
             "He didn't have a nickname"
        ],

        rightAnswer: "c"
    },
    {
        question: "What disease is Michael trying to raise awareness for with the fun run?",

        answers: [
             "AIDS",
             "Measles",
             "Herpes",
             "Rabies"
        ],

        rightAnswer: "d"
    },
    {
        question: "What is the name of Angela's cat that she throws through the ceiling?",

        answers: [
             "Bandit",
             "Garbage",
             "Sprikles",
             "Mr. Whiskers"
        ],

        rightAnswer: "a"
    },
    
];
gameStart();
console.log(questions);
function gameStart (){
for(var i = 0; i < questions.length; i++) {
    
    var divMaker = $('<div class="quesHold">');
    
    var pMaker = $('<p>').text(questions[i].question);
    
    divMaker.append(pMaker);
    
    $('#trivia').append(divMaker);
    
    var ans = $('<ol type="a">');
    
    for(var j = 0; j < 4; j++){
     var li = $('<li>');
     var label = $('<label>');
     var input = $('<input type="radio">').attr({name:'gues' + i, value: j});

     label.text(questions[i].answers[j]);
     label.prepend(input);
     li.append(label);
     ans.append(li);
        
    }
    divMaker.append(ans);
    }
}











