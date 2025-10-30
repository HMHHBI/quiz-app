// main.js
import { quizData } from "./questions.js";

let time = 300; // total time in seconds
let countdown;
let score = 0;
let userAnswers = {};
let currentTopic = "HMH Quiz App";

const timerDisplay = document.getElementById("timer");
const quizTopic = document.getElementById("quiz-topic");
const quizContent = document.querySelector(".quiz-quest");
const topicLinks = document.querySelectorAll(".topic-link");
const nextBtn = document.getElementById("submit");

// START TIMER
function startTimer() {
  clearInterval(countdown);
  countdown = setInterval(() => {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;

    seconds = seconds < 10 ? "0" + seconds : seconds;
    minutes = minutes < 10 ? "0" + minutes : minutes;

    timerDisplay.textContent = `⏳ Time: ${minutes}:${seconds}`;
    time--;

    if (time < 0) {
      clearInterval(countdown);
      showResult(true); // time out
    }
  }, 1000);
}

// RENDER QUIZ
function renderQuiz(topic) {
  const questions = quizData[topic];
  quizContent.innerHTML = "";
  score = 0;
  userAnswers = {};
  currentTopic = topic;
  nextBtn.style.display = "block";
  nextBtn.textContent = "Submit";

  questions.forEach((q, index) => {
    const qDiv = document.createElement("div");
    qDiv.classList.add("question-block");

    const questionText = document.createElement("p");
    questionText.classList.add("question");
    questionText.textContent = `${index + 1}. ${q.question}`;
    qDiv.appendChild(questionText);

    const optionsDiv = document.createElement("div");
    optionsDiv.classList.add("options");

    q.options.forEach((opt, i) => {
      const btn = document.createElement("button");
      btn.textContent = opt;
      btn.addEventListener("click", () =>
        selectAnswer(topic, index, i, btn, qDiv)
      );
      optionsDiv.appendChild(btn);
    });

    qDiv.appendChild(optionsDiv);
    quizContent.appendChild(qDiv);
  });
}

// HANDLE ANSWER SELECTION
function selectAnswer(topic, qIndex, optIndex, btn, qDiv) {
  const correct = quizData[topic][qIndex].answer;
  const allButtons = qDiv.querySelectorAll("button");

  allButtons.forEach((b) => (b.disabled = true));

  userAnswers[qIndex] = optIndex;

  if (optIndex === correct) {
    score++;
    btn.style.background = "green";
  } else {
    btn.style.background = "red";
  }
}

// SHOW RESULT / SCOREBOARD
function showResult(isTimeout) {
  clearInterval(countdown);
  nextBtn.style.display = "none";

  const questions = quizData[currentTopic];
  const correctNumbers = [];

  questions.forEach((q, i) => {
    if (userAnswers[i] === q.answer) {
      correctNumbers.push(i + 1);
    }
  });

  quizContent.innerHTML = `
    <div class="question-block timeout-msg">
      ${isTimeout ? "<h2>⏰ Time Out!</h2>" : ""}
      <h2 class="score">Your Score: ${score} / ${questions.length}</h2>
      <p>Correct Questions: ${
        correctNumbers.length > 0 ? correctNumbers.join(", ") : ""
      }</p>
      <button id="retry-btn" class="next-btn">🔄 Retake Quiz</button>
    </div>
  `;

  document
    .getElementById("retry-btn")
    .addEventListener("click", () => retakeQuiz());
}

// RETAKE QUIZ
function retakeQuiz() {
  time = 600;
  score = 0;
  userAnswers = {};
  renderQuiz(currentTopic);
  startTimer();
}

// SUBMIT QUIZ EARLY
nextBtn.addEventListener("click", () => {
  showResult(false);
});

// TOPIC SWITCH HANDLER
topicLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const selectedTopic = e.target.textContent.trim();
    quizTopic.textContent = selectedTopic;
    time = 600;
    renderQuiz(selectedTopic);
    startTimer();
  });
});

// INITIAL LOAD
renderQuiz(currentTopic);
startTimer();
