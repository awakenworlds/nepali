const questionEl = document.getElementById('question');
const answerEl = document.getElementById('answer');
const romanizedInput = document.getElementById('romanized-answer-input');
const englishInput = document.getElementById('english-answer-input');
const submitRomanizedBtn = document.getElementById('submit-romanized-btn');
const submitEnglishBtn = document.getElementById('submit-english-btn');
const prevBtn = document.getElementById('prev-card-btn');
const showAnswerBtn = document.getElementById('show-answer-btn');
const resetBtn = document.getElementById('reset-btn');
const nextBtn = document.getElementById('next-card-btn');
const categorySelect = document.getElementById('category-select');
const englishFieldGroup = document.getElementById('english-field-group');
const englishModeBtn = document.getElementById('english-mode-btn');

let quizData = []; // This will be populated from the JSON file
let currentCardIndex = 0;
let filteredQuizData = [];
let isRomanCorrect = false;
let isEnglishCorrect = false;
let isEnglishMode = false;

// --- Helper Functions (same as before) ---
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function displayCard() {
    if (filteredQuizData.length === 0) {
        questionEl.textContent = 'Oops! No flashcards found for this category. Please choose a different one.';
        answerEl.textContent = '';
        answerEl.classList.add('hidden');
        romanizedInput.value = '';
        englishInput.value = '';
        englishFieldGroup.style.display = 'none';
        return;
    }

    const currentCard = filteredQuizData[currentCardIndex];
    answerEl.classList.add('hidden');
    answerEl.classList.remove('correct', 'both-correct', 'incorrect');
    answerEl.textContent = '';
    romanizedInput.value = '';
    englishInput.value = '';
    
    if (isEnglishMode) {
        questionEl.textContent = currentCard.english;
        questionEl.classList.add('english-mode-text');
        englishFieldGroup.style.display = 'none';
        romanizedInput.placeholder = "Enter Romanized Answer";
        englishModeBtn.textContent = 'Toggle to Nepali';
    } else {
        questionEl.textContent = currentCard.devanagari;
        questionEl.classList.remove('english-mode-text');
        const isSingleAnswer = currentCard.roman.toLowerCase().trim() === currentCard.english.toLowerCase().trim();
        if (isSingleAnswer) {
            englishFieldGroup.style.display = 'none';
            romanizedInput.placeholder = "Enter the answer";
        } else {
            englishFieldGroup.style.display = 'flex';
            romanizedInput.placeholder = "Romanized Answer";
        }
        englishModeBtn.textContent = 'Toggle to English';
    }

    isRomanCorrect = false;
    isEnglishCorrect = false;
    romanizedInput.focus();
}

function normalizeRomanized(text) {
    return text.toLowerCase().trim()
        .replace(/oo/g, 'u')
        .replace(/ch/g, 'k')
        .replace(/h/g, '');
}

function checkRomanizedAnswer() {
    const userAnswer = romanizedInput.value.toLowerCase().trim();
    const currentCard = filteredQuizData[currentCardIndex];
    const correctAnswer = currentCard.roman.toLowerCase().trim();
    const isSingleAnswer = currentCard.roman.toLowerCase().trim() === currentCard.english.toLowerCase().trim();

    const isCorrect = normalizeRomanized(userAnswer) === normalizeRomanized(correctAnswer);
    
    answerEl.classList.remove('correct', 'both-correct', 'incorrect');

    if (isCorrect) {
        isRomanCorrect = true;
        answerEl.classList.remove('hidden');

        if (isEnglishMode || isSingleAnswer || isEnglishCorrect) {
            answerEl.classList.add('both-correct');
            answerEl.textContent = `Correct! Great job! 🎉 ${currentCard.roman} ${isEnglishMode ? '' : `| ${currentCard.english}`}`;
        } else {
            answerEl.classList.add('correct');
            answerEl.textContent = `Correct! Now, please enter the English translation.`;
            englishInput.focus();
        }
    } else {
        isRomanCorrect = false;
        answerEl.classList.remove('hidden');
        answerEl.classList.add('incorrect');
        answerEl.textContent = "Not quite. Please try again.";
    }
}

function checkEnglishAnswer() {
    const userAnswer = englishInput.value.toLowerCase().trim();
    const currentCard = filteredQuizData[currentCardIndex];
    
    const rawEnglish = currentCard.english.toLowerCase().trim();
    const noBrackets = rawEnglish.replace(/\s*\(.*\)/, '');
    const acceptableAnswers = noBrackets.split('/').map(ans => ans.trim());
    
    const isCorrect = acceptableAnswers.includes(userAnswer);

    answerEl.classList.remove('correct', 'both-correct', 'incorrect');

    if (isCorrect) {
        isEnglishCorrect = true;
        answerEl.classList.remove('hidden');

        if (isRomanCorrect) {
            answerEl.classList.add('both-correct');
            answerEl.textContent = `Fantastic! Both answers are spot-on! 🎉 ${currentCard.roman} | ${currentCard.english}.`;
        } else {
            answerEl.classList.add('correct');
            answerEl.textContent = `Correct! Now, what about the Romanized spelling?`;
        }
    } else {
        isEnglishCorrect = false;
        answerEl.classList.remove('hidden');
        answerEl.classList.add('incorrect');
        answerEl.textContent = "That's not the correct English translation. Give it another shot!";
    }
}

function advanceQuiz() {
    nextBtn.click();
}

function showFullAnswer() {
    const currentCard = filteredQuizData[currentCardIndex];
    answerEl.classList.remove('hidden');
    answerEl.classList.remove('incorrect', 'both-correct');
    answerEl.classList.add('correct');
    
    if (isEnglishMode) {
        answerEl.textContent = `${currentCard.roman}.`;
    } else {
        answerEl.textContent = `${currentCard.roman} | ${currentCard.english}.`;
    }
}

function applyFilterAndLoad() {
    const selectedCategory = categorySelect.value;
    let tempQuizData;

    if (selectedCategory === 'all') {
        tempQuizData = [...quizData];
    } else if (selectedCategory === 'popular') {
        tempQuizData = quizData.filter(card => card.popular === true);
    } else {
        tempQuizData = quizData.filter(card => card.sort === selectedCategory);
    }
    
    if (isEnglishMode) {
        filteredQuizData = tempQuizData.filter(card => card.roman.toLowerCase().trim() !== card.english.toLowerCase().trim());
    } else {
        filteredQuizData = tempQuizData;
    }
    
    shuffle(filteredQuizData);
    currentCardIndex = 0;
    displayCard();
}

// --- Event Listeners (same as before) ---
submitRomanizedBtn.addEventListener('click', checkRomanizedAnswer);
submitEnglishBtn.addEventListener('click', checkEnglishAnswer);
englishModeBtn.addEventListener('click', () => {
    isEnglishMode = !isEnglishMode;
    applyFilterAndLoad();
});

romanizedInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        const currentCard = filteredQuizData[currentCardIndex];
        const isSingleAnswer = currentCard.roman.toLowerCase().trim() === currentCard.english.toLowerCase().trim();
        
        if ((isEnglishMode && isRomanCorrect) || (!isEnglishMode && isRomanCorrect && isEnglishCorrect) || (!isEnglishMode && isRomanCorrect && isSingleAnswer)) {
            advanceQuiz();
        } else {
            checkRomanizedAnswer();
        }
    }
});

englishInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        if (isRomanCorrect && isEnglishCorrect) {
            advanceQuiz();
        } else {
            checkEnglishAnswer();
        }
    }
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowUp') {
        showFullAnswer();
    }
    if (event.key === 'ArrowLeft') {
        prevBtn.click();
    }
});

nextBtn.addEventListener('click', () => {
    currentCardIndex = (currentCardIndex + 1) % filteredQuizData.length;
    displayCard();
});

prevBtn.addEventListener('click', () => {
    currentCardIndex = (currentCardIndex - 1 + filteredQuizData.length) % filteredQuizData.length;
    displayCard();
});

showAnswerBtn.addEventListener('click', showFullAnswer);

resetBtn.addEventListener('click', () => {
    shuffle(filteredQuizData);
    currentCardIndex = 0;
    displayCard();
});

categorySelect.addEventListener('change', applyFilterAndLoad);

// --- New Logic to Fetch and Initialize the Quiz ---
async function initializeQuiz() {
    try {
        const response = await fetch('/nepali/data.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        // This is the key step: The quizData variable is assigned the parsed JSON data.
        quizData = await response.json();
        applyFilterAndLoad();
    } catch (error) {
        // This will display an error message on the page if the JSON file cannot be fetched.
        questionEl.textContent = 'Error loading flashcards. Please check the data.json file.';
        console.error('Could not fetch the quiz data:', error);
    }
}

// Start the quiz by fetching the data
initializeQuiz();


