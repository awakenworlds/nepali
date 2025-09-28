document.addEventListener('DOMContentLoaded', () => {
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
  const randomizeToggle = document.getElementById('random-toggle');
  const filterDropdown = document.getElementById('filter-dropdown');

  let quizData = [];
  let filteredQuizData = [];
  let currentCardIndex = 0;
  let isEnglishMode = false;

  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  function normalizeAnswer(ans) {
    return String(ans || '').toLowerCase().trim().replace(/ā/g, 'a');
  }

  function isAnswerCorrect(userAnswer, cardAnswer) {
    const answers = normalizeAnswer(cardAnswer).split('/').map(a => a.trim());
    return answers.includes(normalizeAnswer(userAnswer));
  }

  function showFeedback(message, correct = true) {
    feedbackEl.textContent = message;
    feedbackEl.classList.toggle('incorrect', !correct);
    feedbackEl.classList.remove('hidden');
  }

  function displayCard() {
    if (!filteredQuizData.length) {
      questionEl.textContent = 'No flashcards with current filter.';
      return;
    }
    currentCardIndex = Math.min(currentCardIndex, filteredQuizData.length - 1);
    const card = filteredQuizData[currentCardIndex];
    questionEl.textContent = isEnglishMode ? card.english : card.devanagari;
    answerEl.classList.add('hidden');
    romanizedInput.value = '';
    englishInput.value = '';
    feedbackEl.classList.add('hidden');
  }

  function applyFilters() {
    const selectedFilter = filterDropdown.value;
    filteredQuizData = selectedFilter === 'all'
      ? [...quizData]
      : quizData.filter(card => card.sort === selectedFilter || (selectedFilter === 'popular' && card.popular));
    if (randomizeToggle.checked) shuffle(filteredQuizData);
    currentCardIndex = 0;
    displayCard();
  }

  submitRomanizedBtn.onclick = () => {
    const card = filteredQuizData[currentCardIndex];
    if (isAnswerCorrect(romanizedInput.value, card.roman)) {
      showFeedback("Roman correct!", true);
    } else {
      showFeedback("Incorrect — try again.", false);
    }
  };

  submitEnglishBtn.onclick = () => {
    const card = filteredQuizData[currentCardIndex];
    if (isAnswerCorrect(englishInput.value, card.english)) {
      showFeedback("English correct!", true);
    } else {
      showFeedback("Incorrect — try again.", false);
    }
  };

  prevBtn.onclick = () => { currentCardIndex = (currentCardIndex - 1 + filteredQuizData.length) % filteredQuizData.length; displayCard(); };
  nextBtn.onclick = () => { currentCardIndex = (currentCardIndex + 1) % filteredQuizData.length; displayCard(); };
  englishModeBtn.onclick = () => { isEnglishMode = !isEnglishMode; displayCard(); };
  filterDropdown.addEventListener('change', applyFilters);
  randomizeToggle.addEventListener('change', applyFilters);

  async function initializeQuiz() {
    const res = await fetch('data.json');
    quizData = await res.json();
    applyFilters();
  }

  initializeQuiz();
});
