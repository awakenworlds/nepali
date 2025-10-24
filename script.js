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
    const multipleChoiceToggle = document.getElementById('multiple-choice-toggle');
    const searchInput = document.getElementById('search-input');
    const searchResultsContainer = document.getElementById('search-results-container');
    const searchResultsList = document.getElementById('search-results-list');
    const quizContent = document.getElementById('quiz-content');
    const backToQuizBtn = document.getElementById('back-to-quiz-btn');
    const multipleChoiceContainer = document.getElementById('multiple-choice-container');
    const secondaryMCContainer = document.getElementById('secondary-mc-container');
    const romanActionRow = document.getElementById('romanized-action-row');
    const englishActionRow = document.getElementById('english-action-row');

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
        return String(ans || '').toLowerCase().trim().replace(/[āīūṛṭḍñ]/g, match => {
            if (match === 'ā') return 'a';
            if (match === 'ī') return 'i';
            if (match === 'ū') return 'u';
            if (match === 'ṛ') return 'r';
            if (match === 'ṭ') return 't';
            if (match === 'ḍ') return 'd';
            if (match === 'ñ') return 'n';
            return match;
        });
    }

    function isAnswerCorrect(userAnswer, cardAnswer) {
        userAnswer = normalizeAnswer(userAnswer);
        cardAnswer = normalizeAnswer(cardAnswer);
        const bracketIndex = cardAnswer.indexOf('(');
        if (bracketIndex !== -1) cardAnswer = cardAnswer.slice(0, bracketIndex).trim();
        return cardAnswer.split('/').map(e => e.trim()).includes(userAnswer);
    }

    function displayCard() {
        const card = filteredQuizData[currentCardIndex];
        if (!card) {
            questionEl.textContent = "No flashcards with current filters.";
            answerEl.classList.add('hidden');
            romanActionRow.style.display = 'none';
            englishActionRow.style.display = 'none';
            multipleChoiceContainer.classList.add('hidden');
            secondaryMCContainer.classList.add('hidden');
            return;
        }

        questionEl.textContent = isEnglishMode ? card.english : card.devanagari;
        answerEl.textContent = '';
        answerEl.classList.add('hidden');

        // Reset all rows/containers
        romanActionRow.style.display = 'none';
        englishActionRow.style.display = 'none';
        multipleChoiceContainer.classList.add('hidden');
        secondaryMCContainer.classList.add('hidden');
        multipleChoiceContainer.innerHTML = '';
        secondaryMCContainer.innerHTML = '';
        romanizedInput.value = '';
        englishInput.value = '';
        englishInput.placeholder = "English Answer"; // default

        const useMC = multipleChoiceToggle.checked;

        if (card.sort === 'letter') {
            if (useMC) {
                if (isEnglishMode) {
                    generateMC(card, 'devanagari', multipleChoiceContainer);
                } else {
                    generateMC(card, 'roman', multipleChoiceContainer);
                }
            } else {
                if (isEnglishMode) {
                    generateMC(card, 'devanagari', multipleChoiceContainer);
                } else {
                    romanActionRow.style.display = 'flex';
                }
            }
        } else if (card.sort === 'number') {
            if (useMC) {
                if (isEnglishMode) {
                    generateMC(card, 'roman', multipleChoiceContainer);
                    generateMC(card, 'devanagari', secondaryMCContainer);
                } else {
                    generateMC(card, 'roman', multipleChoiceContainer);
                    generateMC(card, 'english', secondaryMCContainer);
                }
            } else {
                if (isEnglishMode) {
                    // NEW: number card, English main, non-MC
                    romanActionRow.style.display = 'flex';
                    generateMC(card, 'devanagari', secondaryMCContainer); // show Devanagari MC instead of English/Numerical input
                } else {
                    // Non-English main (Devanagari) non-MC
                    romanActionRow.style.display = 'flex';
                    englishActionRow.style.display = 'flex';
                    englishInput.placeholder = "Numerical Answer";
                }
            }
        } else {
            if (useMC) {
                if (isEnglishMode) {
                    generateMC(card, 'roman', multipleChoiceContainer);
                    generateMC(card, 'devanagari', secondaryMCContainer);
                } else {
                    generateMC(card, 'roman', multipleChoiceContainer);
                    generateMC(card, 'english', secondaryMCContainer);
                }
            } else {
                if (isEnglishMode) {
                    romanActionRow.style.display = 'flex';
                    generateMC(card, 'devanagari', secondaryMCContainer);
                } else {
                    romanActionRow.style.display = 'flex';
                    englishActionRow.style.display = 'flex';
                }
            }
        }
    }

    function generateMC(card, key, container) {
        container.innerHTML = '';
        container.classList.remove('hidden');

        const correctAnswer = card[key];
        let options = [correctAnswer];

        const pool = quizData
            .filter(c => c[key] !== correctAnswer && c.sort === card.sort)
            .map(c => c[key]);

        shuffle(pool);
        while (options.length < 4 && pool.length > 0) options.push(pool.pop());
        shuffle(options);

        options.forEach(opt => {
            const btn = document.createElement('button');
            btn.textContent = opt;
            btn.addEventListener('click', () => {
                if (opt === correctAnswer) {
                    btn.style.backgroundColor = 'green';
                    Array.from(container.querySelectorAll('button')).forEach(b => b.disabled = true);
                } else {
                    btn.style.backgroundColor = 'red';
                    btn.disabled = true;
                }
            });
            container.appendChild(btn);
        });
    }

    function checkRomanizedAnswer() {
        const card = filteredQuizData[currentCardIndex];
        if (!card) return;
        const userAnswer = romanizedInput.value.replace(/[✅❌]/g, '').trim();
        if (!userAnswer) return;

        if (isAnswerCorrect(userAnswer, card.roman)) {
            romanizedInput.value = userAnswer + ' ✅';
        } else {
            romanizedInput.value = userAnswer + ' ❌';
        }
    }

    function checkEnglishAnswer() {
        const card = filteredQuizData[currentCardIndex];
        if (!card) return;
        const userAnswer = englishInput.value.replace(/[✅❌]/g, '').trim();
        if (!userAnswer) return;

        if (isAnswerCorrect(userAnswer, card.english)) {
            englishInput.value = userAnswer + ' ✅';
        } else {
            englishInput.value = userAnswer + ' ❌';
        }
    }

    submitRomanizedBtn.addEventListener('click', checkRomanizedAnswer);
    submitEnglishBtn.addEventListener('click', checkEnglishAnswer);

    romanizedInput.addEventListener('keypress', (e) => { if (e.key === 'Enter') checkRomanizedAnswer(); });
    englishInput.addEventListener('keypress', (e) => { if (e.key === 'Enter') checkEnglishAnswer(); });

    romanizedInput.addEventListener('input', () => { romanizedInput.value = romanizedInput.value.replace(/[✅❌]/g, ''); });
    englishInput.addEventListener('input', () => { englishInput.value = englishInput.value.replace(/[✅❌]/g, ''); });

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
        englishModeBtn.textContent = isEnglishMode ? "दे" : "En";
        displayCard();
    });

    multipleChoiceToggle.addEventListener('change', displayCard);

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

    searchInput.addEventListener('input', () => {
        const term = normalizeAnswer(searchInput.value);
        if (!term) {
            searchResultsContainer.classList.add('hidden');
            quizContent.style.display = 'block';
            return;
        }
        quizContent.style.display = 'none';
        searchResultsContainer.classList.remove('hidden');
        const results = quizData.filter(card =>
            normalizeAnswer(card.roman).includes(term) ||
            normalizeAnswer(card.english).includes(term) ||
            card.devanagari.includes(term)
        );
        searchResultsList.innerHTML = '';
        if (results.length === 0) {
            searchResultsList.innerHTML = '<li>No matches found.</li>';
        } else {
            results.forEach(card => {
                const li = document.createElement('li');
                li.innerHTML = `<span class="result-nepali">${card.devanagari}</span> <span class="result-english">(${card.roman} / ${card.english})</span>`;
                li.addEventListener('click', () => {
                    filterDropdown.value = card.sort;
                    filteredQuizData = filterDropdown.value === 'all' ? quizData.slice() : quizData.filter(c => c.sort === card.sort);
                    currentCardIndex = filteredQuizData.findIndex(c => c.devanagari === card.devanagari);
                    resetSearch();
                    displayCard();
                });
                searchResultsList.appendChild(li);
            });
        }
    });

    backToQuizBtn.addEventListener('click', resetSearch);

    function resetSearch() {
        searchInput.value = '';
        searchResultsContainer.classList.add('hidden');
        quizContent.style.display = 'block';
        displayCard();
    }

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

    function initializeQuiz() {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => {
                quizData = data;
                filteredQuizData = quizData.slice();
                displayCard();
            })
            .catch(err => {
                console.error('Error loading data.json:', err);
                questionEl.textContent = 'Failed to load flashcards.';
            });
    }

    initializeQuiz();
});
