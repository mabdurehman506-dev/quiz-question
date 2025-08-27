// step 1

const quizData = [
    {
        question: "What is the capital of Australia?",
        options: [
            "Sydney",
            "Melbourne",
            "Canberra",
            "Brisbane",
        ],
        correct: 2,
    },
    {
        question: "What is the largest ocean in the world?",
        options: [
            "Atlantic Ocean",
            "Indian Ocean",
            "Arctic Ocean",
            "Pacific Ocean",
        ],
        correct: 3,
    },
    {
        question: "In what year did World War II end?",
        options: [
            "1943",
            "1945",
            "1947",
            "1950",
        ],
        correct: 1,
    },
    {
        question: "Who wrote Romeo and Juliet?",
        options: [
            "William Shakespeare",
            "Charles Dickens",
            "Jane Austen",
            "Mark Twain",
        ],
        correct: 0,
    },
    {
        question: "How many continents are there on Earth?",
        options: [
            "5",
            "6",
            "7",
            "8",
        ],
        correct: 2,
    },
    {
        question: "Which famous scientist developed the theory of relativity?",
        options: [
            "Isaac Newton",
            "Nikola Tesla",
            "Albert Einstein",
            "Stephen Hawking",
        ],
        correct: 2,
    },
    {
        question: "In which city is the Eiffel Tower located?",
        options: [
            "London",
            "Rome",
            "Berlin",
            "Paris",
        ],
        correct: 3,
    },
    {
        question: "Who is the author of the Harry Potter series?",
        options: [
            "Suzanne Collins",
            "Stephen King",
            "J.K. Rowling",
            "Rick Riordan",
        ],
        correct: 2,
    },
    {
        question: "Which language has the most native speakers in the world?",
        options: [
            "Mandarin Chinese",
            "English",
            "Spanish",
            "Hindi",
        ],
        correct: 0,
    },
    {
        question: "In which year did the Titanic sink?",
        options: [
            "1905",
            "1912",
            "1920",
            "1898",
        ],
        correct: 1,
    },
];



// step 2: 

const quiz = document.querySelector(".quiz");
const answerElm = document.querySelectorAll(".answer");
const [questionElm, option_1, option_2, option_3, option_4] =
    document.querySelectorAll(
        "#question, .option_1, .option_2, .option_3, .option_4 "
    );
const submitBtn = document.querySelector("#submit");

let currentQuiz = 0;
let score = 0;

// step 3

const loadQuiz = () => {
    const { question, options } = quizData[currentQuiz];
    console.log(options);

    questionElm.innerText = `${currentQuiz + 1}:${question}`;

    options.forEach(
        (curOption, index) => (window[`option_${index + 1}`].innerText = curOption)
    );
};

loadQuiz();

// step 4

const getSelectedOption = () => {
    // let ans_index;
    // answerElm.forEach((curOption, index) => {
    //     if (curOption.checked) {
    //         ans_index = index;
    //     }
    // });
    // return ans_index;
    let answerElement = Array.from(answerElm)
    return answerElement.findIndex((curElem) => curElem.checked);
};
const deselectedAnswers = () => {
    answerElm.forEach((curElem) => curElem.checked = false);
};

submitBtn.addEventListener("click", () => {
    const selectedOptionIndex = getSelectedOption();
    console.log(selectedOptionIndex);

    if (selectedOptionIndex === quizData[currentQuiz].correct) {
        score = score + 1;
    }

    currentQuiz++;

    if (currentQuiz < quizData.length) {
        deselectedAnswers();
        loadQuiz();
    } else {
        quiz.innerHTML = `
        <div class="result">
        <h2> 🏆 Your Score: ${score}/${quizData.length} Corrent Answer </h2><br>
        <p> Congretulation on completing the quiz! 🎉</p><br>
        <button class="reload-button" onclick="location.reload()">Play Again </button>
        </div>
        `;
    }
});