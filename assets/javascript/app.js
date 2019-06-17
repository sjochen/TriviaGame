var container = $('#trivia');
var ansContainer = $('#answers');
var resultsButton = $('#submit');




//$('#submit').on('click' , myAnswers);


const questions = [{
        question: "Who is the Regional Manager of Dunder Mifflin in season one?",

        answers: {
            a: "Michael Scott",
            b: "Jim Halpert",
            c: "Dwight Shrut",
            d: "David Wallace"
      },

        rightAnswer: "a"
    },
    {
        question: "How many minutes did Michael work for Dunder Mifflin?",
        
        answers: {
            a: "5,624,100 min",
            b: "9,986,000 min",
            c: "11,975,245 min",
            d: "8,774,268 min"
        },
        rightAnswer: "b"
    },

    {
        question: "What is Holly's middle name?",

        answers: {
            a: "Morgan",
            b: "Tina",
            c: "Molly",
            d: "Partridge"
        },

        rightAnswer: "d"
    },
    {
        question: "Who is the only character to appear in every episode",

        answers: {
            a: "Pam",
            b: "Michael",
            c: "Kelly",
            d: "Dwight"
        },

        rightAnswer: "d"
    },
    {
        question: "How many seasons of The Office are there?",

        answers: {
            a: "10",
            b: "9",
            c: "8",
            d: "7"
        },

        rightAnswer: "b"
    },
    {
        question: "How many boxes of cookies did Kevin say he wanted to buy?",

        answers: {
            a: "50",
            b: "40",
            c: "triple digits",
            d: "he doesn't say"
        },

        rightAnswer: "c"
    },
    {
        question: "What is the firt prank Jim pulls on Dwight?",

        answers: {
            a: "He puts Dwight's stapler in jell-o",
            b: "He gift wraps Dwight's desk",
            c: "He moves Dwight's desk to the bathroom",
            d: "He sends Dwight on a secret FBI mission",
    },

        rightAnswer: "a"
    },
    {
        question: "What was Andy's nickname at Cornell?",

        answers: {
            a: "Nard Dog",
            b: "B-Dog",
            c: "Boner Champ",
            d: "He didn't have a nickname"
        },

        rightAnswer: "c"
    },
    {
        question: "What disease is Michael trying to raise awareness for with the fun run?",

        answers: {
            a: "AIDS",
            b: "Measles",
            c: "Herpes",
            d: "Rabies"
        },

        rightAnswer: "d"
    },
    {
        question: "What is the name of Angela's cat that she throws through the ceiling?",

        answers: {
            a: "Bandit",
            b: "Garbage",
            c: "Sprikles",
            d: "Mr. Whiskers"
        },

        rightAnswer: "a"
    },
    
];



function displayQuestions() {
    $('#trivia').text(questions);
}


$(document).ready(function () {
    displayQuestions();
});



