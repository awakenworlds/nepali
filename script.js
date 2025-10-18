document.addEventListener('DOMContentLoaded', () => {
    const questionEl = document.getElementById('question');
    const answerEl = document.getElementById('answer');
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
    const romanActionRow = document.getElementById('romanized-action-row');
    const englishActionRow = document.getElementById('english-action-row');

    let quizData = [];
    let filteredQuizData = [];
    let currentCardIndex = 0;
    let isEnglishMode = false;    
    let isRomanCorrect = false;
    let isEnglishCorrect = false;
    let isMultipleChoiceCorrect = false;
    let readyForNext = false;

    let startX = 0;
    let endX = 0;
    const threshold = 75;

    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    // Function to normalize strings for comparison (search and answer checking)
    function normalizeAnswer(ans) {
        // 1. Convert to string, lowercase, trim.
        let normalized = String(ans || '').toLowerCase().trim();

        // 2. Replace accented Roman characters with simple English equivalents
        normalized = normalized.replace(/[āīūṛṭḍñ]/g, match => {
            if (match === 'ā') return 'a';
            if (match === 'ī') return 'i';
            if (match === 'ū') return 'u';
            if (match === 'ṛ') return 'r';
            if (match === 'ṭ') return 't';
            if (match === 'ḍ') return 'd';
            if (match === 'ñ') return 'n';
            return match;
        });

        return normalized;
    }

    // Updated function for checking answer correctness
    function isAnswerCorrect(userAnswer, cardAnswer) {
        // normalizeAnswer now handles all lowercasing, trimming, and accented character conversion
        userAnswer = normalizeAnswer(userAnswer);
        cardAnswer = normalizeAnswer(cardAnswer);
        
        // Keep logic for handling multiple/bracketed answers
        const bracketIndex = cardAnswer.indexOf('(');
        if (bracketIndex !== -1) cardAnswer = cardAnswer.slice(0, bracketIndex).trim();
        const acceptableAnswers = cardAnswer.split('/').map(e => e.trim());
        
        return acceptableAnswers.includes(userAnswer);
    }

    function animateAndDisplayCard(direction) {
        const isNext = direction === 'next';
        const slideOutClass = isNext ? 'slide-out-left' : 'slide-out-right';
        const slideInClass = isNext ? 'slide-in-right' : 'slide-in-left';
        
        quizContent.classList.add(slideOutClass);

        setTimeout(() => {
            quizContent.classList.remove(slideOutClass); 
            currentCardIndex = isNext
                ? (currentCardIndex + 1) % filteredQuizData.length
                : (currentCardIndex - 1 + filteredQuizData.length) % filteredQuizData.length;
            displayCard(slideInClass);
        }, 300);
    }

    function displayCard(animationClass = '') {
        searchResultsContainer.classList.add('hidden');
        quizContent.style.display = 'block';
        quizContent.classList.remove('slide-in-right', 'slide-in-left', 'slide-out-left', 'slide-out-right');

        if (!filteredQuizData || filteredQuizData.length === 0) {
            questionEl.textContent = 'No flashcards with current filters.';
            answerEl.classList.add('hidden');
            return;
        }

        const card = filteredQuizData[currentCardIndex];

        questionEl.textContent = isEnglishMode ? card.english : card.devanagari;
        answerEl.classList.add('hidden');
        answerEl.textContent = '';
        romanizedInput.value = '';
        englishInput.value = '';
        isRomanCorrect = false;
        isEnglishCorrect = false;
        isMultipleChoiceCorrect = false;
        readyForNext = false;

        romanActionRow.style.display = 'flex';
        multipleChoiceContainer.classList.add('hidden');
        englishActionRow.style.display = 'none';

        if (isEnglishMode) {
            if (card.sort !== 'letter') {
                multipleChoiceContainer.classList.remove('hidden');
                generateMultipleChoice(card);
            }
        } else {
            if (card.sort !== 'letter') englishActionRow.style.display = 'flex';
            if (card.sort !== 'letter') multipleChoiceContainer.classList.add('hidden');
        }

        if (animationClass) quizContent.classList.add(animationClass);
        setTimeout(() => {
            quizContent.classList.remove(animationClass);
            quizContent.style.transform = 'translateX(0)';
            quizContent.style.opacity = '1';
        }, animationClass ? 50 : 0);
    }

    function generateMultipleChoice(card) {
        multipleChoiceContainer.innerHTML = '';
        isMultipleChoiceCorrect = false;
        const correctAnswer = card.devanagari;
        let options = [correctAnswer];

        const categoryPool = filteredQuizData.filter(c => c.sort === card.sort && c.devanagari !== correctAnswer);
        shuffle(categoryPool);
        for (let i = 0; i < 3 && i < categoryPool.length; i++) options.push(categoryPool[i].devanagari);
        while (options.length < 4) {
            const generalPool = quizData.filter(c => c.devanagari !== correctAnswer && !options.includes(c.devanagari));
            shuffle(generalPool);
            if (generalPool.length > 0) options.push(generalPool[0].devanagari);
            else break;
        }

        shuffle(options);
        options.forEach(opt => {
            const btn = document.createElement('button');
            btn.textContent = opt;
            btn.addEventListener('click', () => {
                if (opt === correctAnswer) {
                    isMultipleChoiceCorrect = true;
                    btn.style.backgroundColor = 'green';
                    Array.from(multipleChoiceContainer.querySelectorAll('button')).forEach(b => b.disabled = true);
                    checkReadyForNext();
                } else {
                    btn.style.backgroundColor = 'red';
                    btn.disabled = true;
                }
            });
            multipleChoiceContainer.appendChild(btn);
        });
    }

    function checkReadyForNext() {
        const card = filteredQuizData[currentCardIndex];
        readyForNext = isRomanCorrect && ((card.sort !== 'letter' && isMultipleChoiceCorrect) || card.sort === 'letter');
    }

    function checkRomanizedAnswer() {
        const card = filteredQuizData[currentCardIndex];
        if (!card) return;

        let userAnswer = romanizedInput.value.replace(/[✅❌]/g, '').trim();
        if (userAnswer === '') return;

        if (isAnswerCorrect(userAnswer, card.roman)) {
            romanizedInput.value = userAnswer + ' ✅';
            isRomanCorrect = true;
        } else {
            romanizedInput.value = userAnswer + ' ❌';
            isRomanCorrect = false;
        }
        checkReadyForNext();
    }

    function checkEnglishAnswer() {
        const card = filteredQuizData[currentCardIndex];
        if (!card) return;

        let userAnswer = englishInput.value.replace(/[✅❌]/g, '').trim();
        if (userAnswer === '') return;

        if (isAnswerCorrect(userAnswer, card.english)) {
            englishInput.value = userAnswer + ' ✅';
            isEnglishCorrect = true;
        } else {
            englishInput.value = userAnswer + ' ❌';
            isEnglishCorrect = false;
        }
        checkReadyForNext();
    }

    function handleEnterKey(e) {
        if (e.key !== 'Enter') return;
        e.preventDefault();
        if (readyForNext) animateAndDisplayCard('next');
        else {
            if (document.activeElement === romanizedInput) checkRomanizedAnswer();
            else if (document.activeElement === englishInput) checkEnglishAnswer();
        }
    }

    function handleArrowUp(e) {
        if (e.key !== 'ArrowUp') return;
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

    // Revised searchFlashcards function for flexible and cross-field searching
    function searchFlashcards() {
        // Use the comprehensive normalizeAnswer for the search term
        const searchTerm = normalizeAnswer(searchInput.value);

        if (searchTerm.length > 0) {
            quizContent.style.display = 'none';
            searchResultsContainer.classList.remove('hidden');
        } else {
            quizContent.style.display = 'block';
            searchResultsContainer.classList.add('hidden');
            return;
        }

        // Filter logic: apply normalization to card fields for reliable substring matching
        const results = quizData.filter(card => {
            return normalizeAnswer(card.roman).includes(searchTerm) ||
                   normalizeAnswer(card.english).includes(searchTerm) ||
                   card.devanagari.includes(searchTerm);
        });

        displaySearchResults(results);
    }

    // Revised displaySearchResults to ensure clicked results load regardless of filter
    function displaySearchResults(results) {
        searchResultsList.innerHTML = '';
        if (results.length === 0 && searchInput.value.length > 0) {
            searchResultsList.innerHTML = '<li>No matches found.</li>';
        } else {
            results.forEach(card => {
                const li = document.createElement('li');
                li.innerHTML = `<span class="result-nepali">${card.devanagari}</span> <span class="result-english">(${card.roman} / ${card.english})</span>`;
                li.addEventListener('click', () => {
                    // 1. Update the filter based on the clicked card's category
                    filterDropdown.value = card.sort; 
                    const value = filterDropdown.value;
                    
                    // 2. Re-filter the array to the selected category (or 'all')
                    filteredQuizData = value === "all" ? quizData.slice() : quizData.filter(item => item.sort === value);
                    
                    // 3. Re-shuffle if the toggle is on
                    if (randomizeToggle.checked) shuffle(filteredQuizData);

                    // 4. Find the card's index within the newly filtered/shuffled array
                    const newIndex = filteredQuizData.findIndex(item => item.devanagari === card.devanagari);
                    
                    if (newIndex !== -1) {
                        currentCardIndex = newIndex;
                    } else {
                        // Fallback, though should not be hit if logic is correct
                        currentCardIndex = 0; 
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
        quizContent.style.display = 'block';
        romanizedInput.focus();    
    }

    searchInput.addEventListener('input', searchFlashcards);
    backToQuizBtn.addEventListener('click', resetSearchAndGoToQuiz);
    submitRomanizedBtn.addEventListener('click', checkRomanizedAnswer);
    submitEnglishBtn.addEventListener('click', checkEnglishAnswer);
    romanizedInput.addEventListener('input', () => { romanizedInput.value = romanizedInput.value.replace(/[✅❌]/g, ''); });
    englishInput.addEventListener('input', () => { englishInput.value = englishInput.value.replace(/[✅❌]/g, ''); });
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

    prevBtn.addEventListener('click', () => { animateAndDisplayCard('prev'); });
    nextBtn.addEventListener('click', () => { animateAndDisplayCard('next'); });

    englishModeBtn.addEventListener('click', () => {
        isEnglishMode = !isEnglishMode;
        englishModeBtn.textContent = isEnglishMode ? "दे" : "En";    
        displayCard(); 
    });

    filterDropdown.addEventListener('change', () => {
        const value = filterDropdown.value;
        filteredQuizData = value === "all" ? quizData.slice() : quizData.filter(card => card.sort === value);
        if (randomizeToggle.checked) shuffle(filteredQuizData);
        currentCardIndex = 0;
        displayCard(); 
    });

    randomizeToggle.addEventListener('change', () => {
        if (randomizeToggle.checked) shuffle(filteredQuizData);
        displayCard(); 
    });

    quizContent.addEventListener('touchstart', (e) => {
        const target = e.target;
        const targetTagName = target.tagName;
        if (targetTagName === 'INPUT' || targetTagName === 'BUTTON' || target === answerEl) { startX = 0; endX = 0; return; }
        startX = e.touches[0].clientX;
    });
    quizContent.addEventListener('touchmove', (e) => { if (startX !== 0) endX = e.touches[0].clientX; });
    quizContent.addEventListener('touchend', () => {
        if (startX === 0) return;
        const deltaX = endX - startX;
        if (Math.abs(deltaX) > threshold) deltaX > 0 ? animateAndDisplayCard('prev') : animateAndDisplayCard('next');
        startX = 0; endX = 0;
    });

    function initializeQuiz() {
        fetch("./data.json")
            .then(res => res.json())
            .then(data => {
                quizData = data;
                filteredQuizData = quizData.slice();
                if (randomizeToggle.checked) shuffle(filteredQuizData);
                displayCard(); 
                englishModeBtn.textContent = 'En';    
            })
            .catch(err => {
                console.error("Error loading data.json:", err);
                questionEl.textContent = "Failed to load flashcards.";
            });
    }

    initializeQuiz();
});
