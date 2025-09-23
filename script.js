const questionEl = document.getElementById('question');
const answerEl = document.getElementById('answer');
const feedbackEl = document.getElementById('feedback');
const romanizedInput = document.getElementById('romanized-answer-input');
const englishInput = document.getElementById('english-answer-input');
const submitRomanizedBtn = document.getElementById('submit-romanized-btn');
const submitEnglishBtn = document.getElementById('submit-english-btn');
const prevBtn = document.getElementById('prev-card-btn');
const nextBtn = document.getElementById('next-card-btn');
const englishModeBtn = document.getElementById('english-mode-btn');
const filterCheckboxes = document.querySelectorAll('.filter-checkbox');
const englishFieldGroup = document.getElementById('english-field-group');
const showRomanBtn = document.getElementById('show-roman-answer-btn');
const showEnglishBtn = document.getElementById('show-english-answer-btn');

let quizData = [];
let filteredQuizData = [];
let currentCardIndex = 0;
let isEnglishMode = false;
let isRomanCorrect = false;
let isEnglishCorrect = false;
let readyForNext = false;

const letterCheckbox = document.querySelector('.filter-checkbox[value="letter"]');
const popularCheckbox = document.querySelector('.filter-checkbox[value="popular"]');

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function displayCard() {
  if (filteredQuizData.length === 0) {
    questionEl.textContent = 'No flashcards with current filters.';
    answerEl.classList.add('hidden');
    feedbackEl.classList.add('hidden');
    return;
  }

  const card = filteredQuizData[currentCardIndex];
  questionEl.textContent = isEnglishMode ? card.english : card.devanagari;

  answerEl.classList.add('hidden');
  answerEl.textContent = '';
  feedbackEl.classList.add('hidden');

  romanizedInput.value = '';
  englishInput.value = '';
  isRomanCorrect = false;
  isEnglishCorrect = false;
  readyForNext = false;

  englishFieldGroup.style.display =
    !isEnglishMode && card.roman.toLowerCase().trim() !== card.english.toLowerCase().trim()
      ? 'flex'
      : 'none';

  romanizedInput.focus();
  updateAnswerDisplay();
}

function updateAnswerDisplay() {
  const card = filteredQuizData[currentCardIndex];
  if (!card) return;
  let parts = [];
  if (isRomanCorrect) parts.push(card.roman);
  if (!isEnglishMode && isEnglishCorrect) parts.push(card.english);
  if (parts.length > 0) {
    answerEl.textContent = parts.join(' | ');
    answerEl.classList.remove('hidden');
  } else {
    answerEl.classList.add('hidden');
  }
}

function normalizeAnswer(ans) {
  return ans.toLowerCase().trim();
}

function isAnswerCorrect(userAnswer, cardAnswer) {
  userAnswer = normalizeAnswer(userAnswer);
  cardAnswer = normalizeAnswer(cardAnswer);
  const bracketIndex = cardAnswer.indexOf('(');
  if (bracketIndex !== -1) cardAnswer = cardAnswer.slice(0, bracketIndex).trim();
  const acceptableAnswers = cardAnswer.split('/').map(e => e.trim());
  return acceptableAnswers.includes(userAnswer);
}

function updateFeedback() {
  const cardHasEnglishInput = englishFieldGroup.style.display !== 'none';
  const romanFilled = romanizedInput.value.trim() !== '';
  const englishFilled = englishInput.value.trim() !== '';

  // Single input
  if (!cardHasEnglishInput) {
    if (isRomanCorrect) {
      showFeedback("✅ Correct! Press Enter to continue.", true);
      readyForNext = true;
    } else if (romanFilled) {
      showFeedback("❌ Incorrect — try again.", false);
      readyForNext = false;
    } else {
      feedbackEl.classList.add('hidden');
      readyForNext = false;
    }
    return;
  }

  // Dual input
  if (isRomanCorrect && isEnglishCorrect) {
    showFeedback("✅ Both answers correct! Press Enter to continue.", true);
    readyForNext = true;
  } else if (isRomanCorrect && !isEnglishCorrect) {
    if (englishFilled) {
      showFeedback("✅ Roman answer correct! English answer incorrect — try again.", false);
    } else {
      showFeedback("✅ Roman answer correct! Enter English answer.", true);
    }
    englishInput.focus();
    readyForNext = false;
  } else if (!isRomanCorrect && romanFilled && isEnglishCorrect) {
    showFeedback("✅ English answer correct! Roman answer incorrect — try again.", false);
    romanizedInput.focus();
    readyForNext = false;
  } else if (!isRomanCorrect && romanFilled) {
    showFeedback("❌ Roman answer incorrect — try again.", false);
    romanizedInput.focus();
    readyForNext = false;
  } else if (!isEnglishCorrect && englishFilled) {
    showFeedback("❌ English answer incorrect — try again.", false);
    englishInput.focus();
    readyForNext = false;
  } else {
    feedbackEl.classList.add('hidden');
    readyForNext = false;
  }
}

// Check answers independently
function checkRomanizedAnswer() {
  const card = filteredQuizData[currentCardIndex];
  if (!card) return;
  const userAnswer = romanizedInput.value.trim();
  if (!userAnswer) return;

  if (isAnswerCorrect(userAnswer, card.roman)) {
    isRomanCorrect = true;
    updateAnswerDisplay();
  } else {
    isRomanCorrect = false;
  }
  updateFeedback();
}

function checkEnglishAnswer() {
  if (englishFieldGroup.style.display === 'none') return;
  const card = filteredQuizData[currentCardIndex];
  const userAnswer = englishInput.value.trim();
  if (!userAnswer) return;

  if (isAnswerCorrect(userAnswer, card.english)) {
    isEnglishCorrect = true;
    updateAnswerDisplay();
  } else {
    isEnglishCorrect = false;
  }
  updateFeedback();
}

// Enter key handler
function handleEnterKey(e) {
  if (e.key !== 'Enter') return;
  e.preventDefault();
  const active = document.activeElement;
  if (readyForNext) {
    currentCardIndex = (currentCardIndex + 1) % filteredQuizData.length;
    displayCard();
  } else {
    if (active === romanizedInput) checkRomanizedAnswer();
    else if (active === englishInput) checkEnglishAnswer();
  }
}

// Submit buttons
submitRomanizedBtn.addEventListener('click', checkRomanizedAnswer);
submitEnglishBtn.addEventListener('click', checkEnglishAnswer);

// Enter key triggers only active input
romanizedInput.addEventListener('keypress', handleEnterKey);
englishInput.addEventListener('keypress', handleEnterKey);

// Reveal buttons
showRomanBtn.addEventListener('click', () => {
  const card = filteredQuizData[currentCardIndex];
  if (card) { answerEl.textContent = card.roman; answerEl.classList.remove('hidden'); feedbackEl.classList.add('hidden'); }
});
showEnglishBtn.addEventListener('click', () => {
  const card = filteredQuizData[currentCardIndex];
  if (card) { answerEl.textContent = card.english; answerEl.classList.remove('hidden'); feedbackEl.classList.add('hidden'); }
});

// Navigation
prevBtn.addEventListener('click', () => { currentCardIndex = (currentCardIndex - 1 + filteredQuizData.length) % filteredQuizData.length; displayCard(); });
nextBtn.addEventListener('click', () => { currentCardIndex = (currentCardIndex + 1) % filteredQuizData.length; displayCard(); });

// Filters
function applyFilters() {
  const activeFilters = Array.from(filterCheckboxes).filter(cb => cb.checked).map(cb => cb.value);
  filteredQuizData = quizData.filter(card => {
    if (activeFilters.includes('popular') && card.popular) return true;
    return activeFilters.includes(card.sort);
  });
  shuffle(filteredQuizData);
  currentCardIndex = 0;
  displayCard();
}

function setDefaultFilters() {
  if (isEnglishMode) { filterCheckboxes.forEach(cb => cb.checked = (cb.value === 'popular')); }
  else { filterCheckboxes.forEach(cb => cb.checked = (cb.value === 'letter')); }
}

function updateLetterCheckboxVisibility() {
  if (isEnglishMode) { letterCheckbox.parentElement.style.display = 'none'; letterCheckbox.checked = false; }
  else { letterCheckbox.parentElement.style.display = 'flex'; }
}

// Toggle language
englishModeBtn.addEventListener('click', () => {
  isEnglishMode = !isEnglishMode;
  englishModeBtn.textContent = isEnglishMode ? "Toggle to Devanagari" : "Toggle to English";
  updateLetterCheckboxVisibility();
  setDefaultFilters();
  applyFilters();
});

updateLetterCheckboxVisibility();
setDefaultFilters();
filterCheckboxes.forEach(cb => cb.addEventListener('change', applyFilters));

// Load quiz data
async function initializeQuiz() {
  try {
    const response = await fetch('data.json');
    quizData = await response.json();
    applyFilters();
  } catch (err) {
    questionEl.textContent = 'Error loading data.json';
    console.error(err);
  }
}

initializeQuiz();

function showFeedback(message, correct = true) {
  feedbackEl.textContent = message;
  feedbackEl.classList.remove('hidden');
  feedbackEl.classList.toggle('incorrect', !correct);
}
