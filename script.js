let quizData = [];
let currentCardIndex = 0;
let filteredQuizData = [];
let isEnglishToSpanish = true;
let lastAnswerCorrect = false;

const questionEl = document.getElementById('question');
const answerEl = document.getElementById('answer');
const spanishInput = document.getElementById('spanish-answer-input');
const submitBtn = document.getElementById('submit-btn');
const feedbackEl = document.getElementById('feedback');
const prevBtn = document.getElementById('prev-card-btn');
const showAnswerBtn = document.getElementById('show-answer-btn');
const resetBtn = document.getElementById('reset-btn');
const nextBtn = document.getElementById('next-card-btn');
const switchLanguageBtn = document.getElementById('switch-language-btn');
const categorySelect = document.getElementById('category-select');

// Disable autocomplete dropdown
spanishInput.setAttribute("autocomplete", "off");

// Load data from JSON
fetch('data.json')
  .then(response => response.json())
  .then(data => {
    quizData = data;
    applyFilterAndLoad();
  })
  .catch(error => {
    console.error("Error loading flashcards:", error);
    questionEl.textContent = "Could not load flashcards.";
  });

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function normalizeText(text) {
  return text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\.$/, "")
    .trim()
    .toLowerCase();
}

function stripBrackets(text) {
  return text.replace(/\s*\(.*?\)\s*/g, "").trim();
}

function getAnswerVariants(answer) {
  // Split by "/" and return normalized variants
  return answer
    .split("/")
    .map(a => normalizeText(stripBrackets(a)));
}

function displayCard() {
  if (!filteredQuizData.length) {
    questionEl.textContent = "No flashcards available.";
    answerEl.textContent = "";
    feedbackEl.textContent = "";
    return;
  }

  const card = filteredQuizData[currentCardIndex];
  if (isEnglishToSpanish) {
    questionEl.textContent = card.question;
    answerEl.textContent = card.answer;
    spanishInput.placeholder = "Spanish Answer";
  } else {
    questionEl.textContent = card.answer;
    answerEl.textContent = card.question;
    spanishInput.placeholder = "English Answer";
  }

  answerEl.classList.add('hidden');
  feedbackEl.textContent = '';
  spanishInput.value = '';
  lastAnswerCorrect = false;
}

function checkAnswer() {
  if (!filteredQuizData.length) return;

  const card = filteredQuizData[currentCardIndex];
  const userAnswer = normalizeText(spanishInput.value);

  let correctAnswer = isEnglishToSpanish ? card.answer : card.question;
  let correctVariants = getAnswerVariants(correctAnswer);

  // Also strip brackets and check variants without brackets
  let strippedCorrect = stripBrackets(correctAnswer);
  correctVariants.push(...getAnswerVariants(strippedCorrect));

  let reverseAnswer = isEnglishToSpanish ? card.question : card.answer;
  let reverseVariants = getAnswerVariants(reverseAnswer);
  let strippedReverse = stripBrackets(reverseAnswer);
  reverseVariants.push(...getAnswerVariants(strippedReverse));

  let allVariants = [...new Set([...correctVariants, ...reverseVariants])];

  if (allVariants.includes(userAnswer)) {
    feedbackEl.textContent = "✅ Correct!";
    feedbackEl.style.color = "green";
    lastAnswerCorrect = true;
    answerEl.classList.remove('hidden');
  } else {
    feedbackEl.textContent = "❌ Incorrect. Try again!";
    feedbackEl.style.color = "red";
    lastAnswerCorrect = false;
    answerEl.classList.add('hidden');
  }
}

function handleKeyPress(e) {
  if (e.key === 'Enter') {
    if (lastAnswerCorrect) {
      nextCard();
    } else {
      checkAnswer();
    }
  } else if (e.key === 'ArrowUp') {
    showAnswer();
  }
}

function showAnswer() {
  if (!filteredQuizData.length) return;
  answerEl.classList.remove('hidden');
}

function resetCard() {
  spanishInput.value = '';
  feedbackEl.textContent = '';
  answerEl.classList.add('hidden');
  lastAnswerCorrect = false;
}

function nextCard() {
  if (!filteredQuizData.length) return;
  currentCardIndex = (currentCardIndex + 1) % filteredQuizData.length;
  displayCard();
}

function prevCard() {
  if (!filteredQuizData.length) return;
  currentCardIndex = (currentCardIndex - 1 + filteredQuizData.length) % filteredQuizData.length;
  displayCard();
}

function switchLanguage() {
  isEnglishToSpanish = !isEnglishToSpanish;
  displayCard();
}

function applyFilterAndLoad() {
  const category = categorySelect.value;
  filteredQuizData = category === "all" ? [...quizData] : quizData.filter(card => card.sort === category);

  shuffle(filteredQuizData);
  currentCardIndex = 0;
  displayCard();
}

// Event listeners
submitBtn.addEventListener('click', checkAnswer);
spanishInput.addEventListener('keydown', handleKeyPress);
prevBtn.addEventListener('click', prevCard);
nextBtn.addEventListener('click', nextCard);
showAnswerBtn.addEventListener('click', showAnswer);
resetBtn.addEventListener('click', resetCard);
switchLanguageBtn.addEventListener('click', switchLanguage);
categorySelect.addEventListener('change', applyFilterAndLoad);
