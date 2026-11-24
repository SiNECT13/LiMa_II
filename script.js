const quizData = [
    {
        question: "1. 대한민국의 수도는?",
        options: ["부산", "서울", "인천", "대구"],
        answer: 1 // 0부터 시작하므로 1은 '서울'
    },
    {
        question: "2. 웹 페이지의 뼈대를 만드는 언어는?",
        options: ["Python", "HTML", "C++", "Java"],
        answer: 1
    }
];

let currentQuiz = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const resultEl = document.getElementById("result");

function loadQuiz() {
    nextBtn.style.display = "none";
    resultEl.innerText = "";
    const currentData = quizData[currentQuiz];
    questionEl.innerText = currentData.question;
    optionsEl.innerHTML = "";

    currentData.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.innerText = option;
        button.onclick = () => checkAnswer(index);
        optionsEl.appendChild(button);
    });
}

function checkAnswer(selected) {
    const correct = quizData[currentQuiz].answer;
    if (selected === correct) {
        score++;
        resultEl.innerText = "정답입니다!";
        resultEl.style.color = "green";
    } else {
        resultEl.innerText = `오답입니다. 정답은 '${quizData[currentQuiz].options[correct]}'입니다.`;
        resultEl.style.color = "red";
    }
    nextBtn.style.display = "block";
}

nextBtn.onclick = () => {
    currentQuiz++;
    if (currentQuiz < quizData.length) {
        loadQuiz();
    } else {
        questionEl.innerText = `퀴즈 종료! 총 ${quizData.length}문제 중 ${score}개를 맞혔습니다.`;
        optionsEl.innerHTML = "";
        nextBtn.style.display = "none";
        resultEl.innerText = "";
    }
};

loadQuiz();
