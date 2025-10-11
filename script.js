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
    const searchInput = document.getElementById('search-input');
    const searchResultsContainer = document.getElementById('search-results-container');
    const searchResultsList = document.getElementById('search-results-list');
    const quizContent = document.getElementById('quiz-content'); 
    const backToQuizBtn = document.getElementById('back-to-quiz-btn'); 
    const multipleChoiceContainer = document.getElementById('multiple-choice-container');

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
        feedbackEl.innerHTML = message;
        feedbackEl.classList.remove('hidden');
        feedbackEl.classList.toggle('incorrect', !correct);
    }

    function clearFeedbackOnInput() {
        feedbackEl.classList.add('hidden');
    }

    function displayCard() {
        searchResultsContainer.classList.add('hidden');
        quizContent.style.display = 'block'; 

        if (!filteredQuizData || filteredQuizData.length === 0) {
            questionEl.textContent = 'No flashcards with current filters.';
            answerEl.classList.add('hidden');
            feedbackEl.classList.add('hidden');
            return;
        }
        if (currentCardIndex >= filteredQuizData.length) currentCardIndex = 0;
        if (currentCardIndex < 0) currentCardIndex = filteredQuizData.length - 1; 

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

        const englishActionRow = document.getElementById('english-action-row');
        const romanActionRow = document.getElementById('romanized-action-row');

        // Letter in English mode -> multiple choice grid
        if (isEnglishMode && card.sort === 'letter') {
            multipleChoiceContainer.classList.remove('hidden');
            romanActionRow.style.display = 'none';
            englishActionRow.style.display = 'none';
            generateMultipleChoice(card);
        } else {
            multipleChoiceContainer.classList.add('hidden');
            romanActionRow.style.display = 'flex';
            englishActionRow.style.display = (isEnglishMode || card.sort === "letter") ? "none" : "flex";

            // Number type changes placeholder
            if (card.sort === "number") {
                englishInput.placeholder = "Numerical Answer";
            } else {
                englishInput.placeholder = "English Answer";
            }
        }

        romanizedInput.focus();
    }

    function generateMultipleChoice(card) {
        multipleChoiceContainer.innerHTML = '';
        const correctAnswer = card.devanagari;
        let options = [correctAnswer];

        // Pick 3 random wrong answers
        let letters = filteredQuizData.filter(c => c.sort === 'letter' && c.devanagari !== correctAnswer);
        shuffle(letters);
        for (let i = 0; i < 3 && i < letters.length; i++) {
            options.push(letters[i].devanagari);
        }
        shuffle(options);

        options.forEach(opt => {
            const btn = document.createElement('button');
            btn.textContent = opt;
            btn.addEventListener('click', () => {
                if (opt === correctAnswer) {
                    showFeedback(`✅ Correct!`);
                } else {
                    showFeedback(`❌ Incorrect — try again.`, false);
                }
            });
            multipleChoiceContainer.appendChild(btn);
        });
    }

    function updateFeedback() {
        const romanFilled = romanizedInput.value.trim() !== '';
        const englishFilled = englishInput.value.trim() !== '';
        const romanAnswer = `<u>${romanizedInput.value.trim()}</u>`;
        const englishAnswer = `<u>${englishInput.value.trim()}</u>`;
        const englishActionRow = document.getElementById('english-action-row');
        const englishFieldVisible = englishActionRow.style.display !== "none";

        if (!englishFieldVisible) {
            if (isRomanCorrect) {
                showFeedback(`${romanAnswer} is correct. Press Enter to continue.`);
                readyForNext = true;
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
        const englishActionRow = document.getElementById('english-action-row');
        const englishFieldVisible = englishActionRow.style.display !== "none";

        if (userAnswer !== '' && isAnswerCorrect(userAnswer, card.roman)) {
            isRomanCorrect = true;
            if (!englishFieldVisible) {
                showFeedback(`${underlined} is correct. Press Enter to continue.`, true);
                readyForNext = true;
            } else {
                showFeedback(`${underlined} is correct. Enter English answer.`, true);
                setTimeout(() => { englishInput.focus(); }, 100);
            }
        } else if (userAnswer !== '') {
            showFeedback("❌ Incorrect — try again.", false);
        }
        updateFeedback();
    }

    function checkEnglishAnswer() {
        const englishActionRow = document.getElementById('english-action-row');
        if (englishActionRow.style.display === "none") return;
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

    function handleArrowUp(e) {
        if (e.key !== "ArrowUp") return;
        e.preventDefault();
        const card = filteredQuizData[currentCardIndex];
        if (!card) return;
        if (document.activeElement === romanizedInput) {
            romanizedInput.value = card.roman;
            checkRomanizedAnswer();
        } else if (document.activeElement === englishInput) {
            englishInput.value = card.english;
            checkEnglishAnswer();
        }
    }

    function searchFlashcards() {
        const searchTerm = normalizeAnswer(searchInput.value);

        if (searchTerm.length > 0) {
            quizContent.style.display = 'none';
            searchResultsContainer.classList.remove('hidden');
        } else {
            quizContent.style.display = 'block';
            searchResultsContainer.classList.add('hidden');
            return;
        }

        const results = quizData.filter(card => {
            return normalizeAnswer(card.roman).includes(searchTerm) ||
                   normalizeAnswer(card.english).includes(searchTerm) ||
                   normalizeAnswer(card.devanagari).includes(searchTerm);
        });

        displaySearchResults(results);
    }

    function displaySearchResults(results) {
        searchResultsList.innerHTML = '';

        if (results.length === 0 && searchInput.value.length > 0) {
            searchResultsList.innerHTML = '<li>No matches found.</li>';
        } else {
            results.forEach(card => {
                const li = document.createElement('li');
                li.innerHTML = `<span class="result-nepali">${card.devanagari}</span> <span class="result-english">(${card.roman} / ${card.english})</span>`;
                li.addEventListener('click', () => {
                    const newIndex = filteredQuizData.findIndex(item => item.devanagari === card.devanagari);
                    if (newIndex !== -1) currentCardIndex = newIndex;
                    resetSearchAndGoToQuiz();
                    displayCard();
                });
                searchResultsList.appendChild(li);
            });
        }
    }

    function resetSearchAndGoToQuiz() {
        searchInput.value = '';
        searchResultsContainer.classList.add('hidden');
        quizContent.style.display = 'block';
        romanizedInput.focus(); 
    }

    searchInput.addEventListener('input', searchFlashcards);
    backToQuizBtn.addEventListener('click', resetSearchAndGoToQuiz);
    submitRomanizedBtn.addEventListener('click', checkRomanizedAnswer);
    submitEnglishBtn.addEventListener('click', checkEnglishAnswer);
    romanizedInput.addEventListener('input', clearFeedbackOnInput);
    englishInput.addEventListener('input', clearFeedbackOnInput);
    romanizedInput.addEventListener('keypress', handleEnterKey);
    englishInput.addEventListener('keypress', handleEnterKey);
    document.addEventListener('keydown', handleArrowUp);

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
        englishModeBtn.textContent = isEnglishMode ? "Devanagari" : "English"; 
        displayCard();
    });

    filterDropdown.addEventListener('change', () => {
        const value = filterDropdown.value;
        if (value === "all") filteredQuizData = quizData.slice();
        else filteredQuizData = quizData.filter(card => card.sort === value);
        if (randomizeToggle.checked) shuffle(filteredQuizData);
        currentCardIndex = 0;
        displayCard();
    });

    randomizeToggle.addEventListener('change', () => {
        if (randomizeToggle.checked) shuffle(filteredQuizData);
        displayCard();
    });

    function initializeQuiz() {
        fetch("./data.json")
            .then(res => res.json())
            .then(data => {
                quizData = data;
                filteredQuizData = quizData.slice();
                if (randomizeToggle.checked) shuffle(filteredQuizData);
                displayCard();
            })
            .catch(err => {
                console.error("Error loading data.json:", err);
                questionEl.textContent = "Failed to load flashcards.";
            });
    }

    initializeQuiz();
});
