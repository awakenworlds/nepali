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
  const showRomanBtn = document.getElementById('show-roman-answer-btn');
  const showEnglishBtn = document.getElementById('show-english-answer-btn');
  const filterDropdown = document.getElementById('filter-dropdown');
  const randomizeToggle = document.getElementById('random-toggle');

  let quizData = [];
  let filteredQuizData = [];
  let currentCardIndex = 0;
  let isEnglishMode = false;
  let isRomanCorrect = false;
  let isEnglishCorrect = false;
  let readyForNext = false;

  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  function normalizeAnswer(ans) {
    return String(ans || '').toLowerCase().trim();
  }

  function isAnswerCorrect(userAnswer, cardAnswer) {
    userAnswer = normalizeAnswer(userAnswer).replace(/ā/g, 'a');
    cardAnswer = normalizeAnswer(cardAnswer).replace(/ā/g, 'a');

    const bracketIndex = cardAnswer.indexOf('(');
    if (bracketIndex !== -1) cardAnswer = cardAnswer.slice(0, bracketIndex).trim();

    const acceptableAnswers = cardAnswer.split('/').map(e => e.trim());
    return acceptableAnswers.includes(userAnswer);
  }

  function showFeedback(message, correct = true) {
    feedbackEl.innerHTML = message; // allow HTML for underlining
    feedbackEl.classList.remove('hidden');
    feedbackEl.classList.toggle('incorrect', !correct);
  }

  function displayCard() {
    if (!filteredQuizData || filteredQuizData.length === 0) {
      questionEl.textContent = 'No flashcards with current filters.';
      answerEl.classList.add('hidden');
      feedbackEl.classList.add('hidden');
      return;
    }

    if (currentCardIndex >= filteredQuizData.length) currentCardIndex = 0;
    if (currentCardIndex < 0) currentCardIndex = 0;

    const card = filteredQuizData[currentCardIndex];
    questionEl.textContent = isEnglishMode ? card.english : card.devanagari;

    answerEl.classList.add('hidden');
    answerEl.textContent = '';
    feedbackEl.classList.add('hidden');
    feedbackEl.innerHTML = '';

    romanizedInput.value = '';
    englishInput.value = '';
    isRomanCorrect = false;
    isEnglishCorrect = false;
    readyForNext = false;

    // Hide English answer box in English mode
    const englishFieldGroup = document.getElementById('english-field-group');
    if (isEnglishMode) {
      englishFieldGroup.style.display = "none";
    } else {
      englishFieldGroup.style.display = "flex";
    }

    romanizedInput.focus();
  }

  function updateFeedback() {
    const romanFilled = romanizedInput.value.trim() !== '';
    const englishFilled = englishInput.value.trim() !== '';

    const romanAnswer = `<u>${romanizedInput.value.trim()}</u>`;
    const englishAnswer = `<u>${englishInput.value.trim()}</u>`;

    if (isEnglishMode) {
      if (isRomanCorrect) {
        showFeedback(`${romanAnswer} is correct. Press Enter to continue.`);
        readyForNext = true;
      }
      return;
    }

    const cardHasEnglishInput = !document.getElementById('english-field-group').classList.contains('hidden');

    if (!cardHasEnglishInput) {
      if (isRomanCorrect) {
        showFeedback(`${romanAnswer} is correct. Press Enter to continue.`);
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

    if (isRomanCorrect && isEnglishCorrect) {
      showFeedback(`${romanAnswer} and ${englishAnswer} are correct. Press Enter to continue.`);
      readyForNext = true;
    } else if (isRomanCorrect && (!isEnglishCorrect && englishFilled)) {
      showFeedback(`${romanAnswer} is correct. English incorrect — try again.`, false);
      readyForNext = false;
    } else if (isRomanCorrect && !isEnglishCorrect) {
      showFeedback(`${romanAnswer} is correct. Enter English answer.`, true);
      readyForNext = false;
    } else if ((!isRomanCorrect && romanFilled) && isEnglishCorrect) {
      showFeedback(`${englishAnswer} is correct. Roman incorrect — try again.`, false);
      readyForNext = false;
    } else if ((!isRomanCorrect && romanFilled) && (!isEnglishCorrect && englishFilled)) {
      showFeedback("❌ Both answers incorrect — try again.", false);
      readyForNext = false;
    } else {
      feedbackEl.classList.add('hidden');
      readyForNext = false;
    }
  }

  function checkRomanizedAnswer() {
    const card = filteredQuizData[currentCardIndex];
    if (!card) return;

    const userAnswer = romanizedInput.value.trim();
    const underlined = `<u>${userAnswer}</u>`;

    if (userAnswer !== '' && isAnswerCorrect(userAnswer, card.roman)) {
      isRomanCorrect = true;
      if (isEnglishMode) {
        showFeedback(`${underlined} is correct. Press Enter to continue.`, true);
        readyForNext = true;
      } else {
        showFeedback(`${underlined} is correct. Enter English answer.`, true);
      }
    } else if (userAnswer !== '') {
      showFeedback("❌ Incorrect — try again.", false);
    }
    updateFeedback();
  }

  function checkEnglishAnswer() {
    if (document.getElementById('english-field-group').style.display === "none") return;
    const card = filteredQuizData[currentCardIndex];
    if (!card) return;

    const userAnswer = englishInput.value.trim();
    const underlined = `<u>${userAnswer}</u>`;
    if (userAnswer !== '' && isAnswerCorrect(userAnswer, card.english)) {
      isEnglishCorrect = true;
      showFeedback(`${underlined} is correct.`, true);
    } else if (userAnswer !== '') {
      showFeedback("❌ Incorrect — try again.", false);
    }
    updateFeedback();
  }

  function handleEnterKey(e) {
    if (e.key !== 'Enter') return;
    e.preventDefault();
    if (readyForNext) {
      currentCardIndex = (currentCardIndex + 1) % filteredQuizData.length;
      displayCard();
    } else {
      if (document.activeElement === romanizedInput) checkRomanizedAnswer();
      else if (document.activeElement === englishInput) checkEnglishAnswer();
    }
  }

  submitRomanizedBtn.addEventListener('click', checkRomanizedAnswer);
  submitEnglishBtn.addEventListener('click', checkEnglishAnswer);

  romanizedInput.addEventListener('keypress', handleEnterKey);
  englishInput.addEventListener('keypress', handleEnterKey);

  showRomanBtn.addEventListener('click', () => {
    const card = filteredQuizData[currentCardIndex];
    if (card) {
      answerEl.textContent = card.roman;
      answerEl.classList.remove('hidden');
    }
  });

  showEnglishBtn.addEventListener('click', () => {
    const card = filteredQuizData[currentCardIndex];
    if (card) {
      answerEl.textContent = card.english;
      answerEl.classList.remove('hidden');
    }
  });

  prevBtn.addEventListener('click', () => {
    currentCardIndex = (currentCardIndex - 1 + filteredQuizData.length) % filteredQuizData.length;
    displayCard();
  });

  nextBtn.addEventListener('click', () => {
    currentCardIndex = (currentCardIndex + 1) % filteredQuizData.length;
    displayCard();
  });

  englishModeBtn.addEventListener('click', () => {
    isEnglishMode = !isEnglishMode;
    englishModeBtn.textContent = isEnglishMode ? "Toggle to Devanagari" : "Toggle to English";
    displayCard();
  });

  filterDropdown.addEventListener('change', () => {
    const value = filterDropdown.value;
    if (value === "all") {
      filteredQuizData = quizData.slice();
    } else {
      filteredQuizData = quizData.filter(card => card.sort === value);
    }
    if (randomizeToggle.checked) shuffle(filteredQuizData);
    displayCard();
  });

  randomizeToggle.addEventListener('change', () => {
    if (randomizeToggle.checked) shuffle(filteredQuizData);
    displayCard();
  });

  async function initializeQuiz() {
    try {
      const response = await fetch('data.json');
      quizData = await response.json();
      filteredQuizData = quizData.slice();

      if (randomizeToggle.checked) shuffle(filteredQuizData);

      displayCard();
    } catch (err) {
      console.error(err);
      questionEl.textContent = "Error loading data.json";
    }
  }

  initializeQuiz();
});
