document.addEventListener('DOMContentLoaded', () => {
    // --- EMBEDDED FLASHCARD DATA (Replaces data.json) ---
    const flashcardData = [
        { devanagari: "नमस्ते", roman: "namaste", english: "hello / greetings", sort: "popular" },
        { devanagari: "पानी", roman: "paani", english: "water", sort: "noun" },
        { devanagari: "खानु", roman: "khanu", english: "to eat", sort: "verb" },
        { devanagari: "ठूलो", roman: "thulo", english: "big", sort: "adjective" },
        { devanagari: "सानी", roman: "saani", english: "small (feminine)", sort: "adjective" },
        { devanagari: "म", roman: "ma", english: "I", sort: "letter" },
        { devanagari: "तपाईं", roman: "tapai(n)", english: "you (formal)", sort: "popular" },
        { devanagari: "आउनु", roman: "aaunu", english: "to come", sort: "verb" },
        { devanagari: "एक", roman: "ek", english: "one", sort: "number" },
        { devanagari: "दुई", roman: "dui", english: "two", sort: "number" }
    ];
    // -----------------------------------------------------

    // Existing Elements
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

    // SEARCH & LAYOUT ELEMENTS
    const searchInput = document.getElementById('search-input');
    const searchResultsContainer = document.getElementById('search-results-container');
    const searchResultsList = document.getElementById('search-results-list');
    const quizContent = document.getElementById('quiz-content'); 
    const backToQuizBtn = document.getElementById('back-to-quiz-btn'); 

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
    
    // NEW: Function to clear feedback on input
    function clearFeedbackOnInput() {
        if (!feedbackEl.classList.contains('hidden')) {
            feedbackEl.classList.add('hidden');
        }
    }

    function displayCard() {
        // Only hide search results if quiz content is active
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
        
        // Use the opposite language of the mode for the question 
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
        
        // Use 'none' for hidden, 'flex' for visible (matching CSS display property)
        if (isEnglishMode || filterDropdown.value === "letter") {
            englishActionRow.style.display = "none";
        } else {
            englishActionRow.style.display = "flex";
        }

        romanizedInput.focus();
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
            // Only hide if neither is correct, otherwise feedback should persist until new input
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
                setTimeout(() => {
                    englishInput.focus();
                }, 100);
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

    // --- SEARCH FUNCTIONS ---

    function searchFlashcards() {
        searchInput.focus(); 
        
        const searchTerm = normalizeAnswer(searchInput.value);
        
        // Show/Hide search results and quiz content based on search term
        if (searchTerm.length > 0) {
            quizContent.style.display = 'none';
            searchResultsContainer.classList.remove('hidden'); // Show results container
        } else {
            quizContent.style.display = 'block';
            searchResultsContainer.classList.add('hidden'); // Hide results container
            return;
        }

        const results = quizData.filter(card => {
            const romanMatch = normalizeAnswer(card.roman).includes(searchTerm);
            const englishMatch = normalizeAnswer(card.english).includes(searchTerm);
            return romanMatch || englishMatch;
        });

        displaySearchResults(results);
    }

    function displaySearchResults(results) {
        searchResultsList.innerHTML = '';

        if (results.length === 0 && searchInput.value.length > 0) {
            searchResultsList.innerHTML = '<li>No matches found.</li>';
        } else if (results.length > 0) {
            results.forEach((card) => {
                const li = document.createElement('li');
                li.innerHTML = `<span class="result-nepali">${card.devanagari}</span> <span class="result-english">(${card.roman} / ${card.english})</span>`;
                
                li.addEventListener('click', () => {
                    filterDropdown.dispatchEvent(new Event('change'));
                    
                    const newIndex = filteredQuizData.findIndex(item => item.devanagari === card.devanagari);
                    
                    if (newIndex !== -1) {
                         currentCardIndex = newIndex;
                    } else {
                        filterDropdown.value = 'all';
                        filterDropdown.dispatchEvent(new Event('change')); 
                        const allIndex = filteredQuizData.findIndex(item => item.devanagari === card.devanagari);
                        if (allIndex !== -1) {
                            currentCardIndex = allIndex;
                        }
                    }
                    
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
        quizContent.style.display = 'block'; // Show quiz content
        romanizedInput.focus(); 
    }

    // --- EVENT LISTENERS ---
    
    searchInput.addEventListener('input', searchFlashcards);
    backToQuizBtn.addEventListener('click', resetSearchAndGoToQuiz);

    submitRomanizedBtn.addEventListener('click', checkRomanizedAnswer);
    submitEnglishBtn.addEventListener('click', checkEnglishAnswer);
    
    // NEW: Clear feedback when typing starts
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
        if (value === "all") {
            filteredQuizData = quizData.slice();
        } else {
            filteredQuizData = quizData.filter(card => card.sort === value);
        }
        if (randomizeToggle.checked) shuffle(filteredQuizData);
        currentCardIndex = 0; 
        displayCard();
    });

    randomizeToggle.addEventListener('change', () => {
        if (randomizeToggle.checked) shuffle(filteredQuizData);
        displayCard();
    });

    // --- INITIALIZATION FUNCTION ---
    function initializeQuiz() {
        // Load data from the embedded array instead of fetching
        quizData = flashcardData.slice();
        filteredQuizData = quizData.slice();
        if (randomizeToggle.checked) shuffle(filteredQuizData);
        displayCard();
    }

    initializeQuiz();
});