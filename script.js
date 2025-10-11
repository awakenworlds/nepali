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
    const showEnglishBtn = document = document.getElementById('show-english-answer-btn');
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
    let readyForNext = false;
    
    // Swipe feature variables
    let startX = 0;
    let endX = 0;
    const threshold = 75; // Minimum distance (in pixels) for a valid swipe

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

    // New function to handle animation and display
    function animateAndDisplayCard(direction) {
        // 'direction' is 'next' (slide left) or 'prev' (slide right)
        
        const isNext = direction === 'next';
        const slideOutClass = isNext ? 'slide-out-left' : 'slide-out-right';
        const slideInClass = isNext ? 'slide-in-right' : 'slide-in-left';
        
        // 1. Apply slide-out animation
        quizContent.classList.add(slideOutClass);

        // 2. Wait for the animation (300ms) before loading the new content
        setTimeout(() => {
            // Remove the slide-out class to reset the transition property
            quizContent.classList.remove(slideOutClass); 
            
            // Calculate and display the new card
            if (isNext) {
                currentCardIndex = (currentCardIndex + 1) % filteredQuizData.length;
            } else {
                currentCardIndex = (currentCardIndex - 1 + filteredQuizData.length) % filteredQuizData.length;
            }
            displayCard(slideInClass); // Pass slideInClass to displayCard

        }, 300); // Must match the CSS transition duration
    }

    // displayCard now takes an optional animation class
    function displayCard(animationClass = '') {
        searchResultsContainer.classList.add('hidden');
        quizContent.style.display = 'block';
        
        // Remove any existing animation classes
        quizContent.classList.remove('slide-in-right', 'slide-in-left', 'slide-out-left', 'slide-out-right');

        if (!filteredQuizData || filteredQuizData.length === 0) {
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
        feedbackEl.innerHTML = '';

        romanizedInput.value = '';
        englishInput.value = '';
        isRomanCorrect = false;
        isEnglishCorrect = false;
        readyForNext = false;

        // Apply temporary slide-in class
        if (animationClass) {
            quizContent.classList.add(animationClass);
        }

        // Use a slight delay to allow the browser to render the initial (off-screen) state 
        // before transitioning back to the center (translateX(0)).
        setTimeout(() => {
             // 3. Trigger the slide-in animation by removing the slide-in class 
             // and allowing the transition to default (translateX(0))
            quizContent.classList.remove(animationClass);
            quizContent.style.transform = 'translateX(0)';
            quizContent.style.opacity = '1';

            // --- UI logic ---
            if (isEnglishMode) {
                multipleChoiceContainer.classList.remove('hidden');
                englishActionRow.style.display = 'none';
                
                if (card.sort === "letter") {
                    romanActionRow.style.display = 'none';
                } else {
                    romanActionRow.style.display = 'flex';
                    romanizedInput.focus();
                }
                
                generateMultipleChoice(card);
            } else {
                multipleChoiceContainer.classList.add('hidden');
                romanActionRow.style.display = 'flex';
                englishActionRow.style.display = (card.sort === "letter") ? "none" : "flex";

                if (card.sort === "number") {
                    englishInput.placeholder = "Numerical Answer";
                } else {
                    englishInput.placeholder = "English Answer";
                }
                romanizedInput.focus();
            }
        }, animationClass ? 50 : 0); // 50ms delay if animating, 0 otherwise (initial load)
    }

    function generateMultipleChoice(card) {
        multipleChoiceContainer.innerHTML = '';
        romanizedInput.value = '';    
        const correctAnswer = card.devanagari;    
        let options = [correctAnswer];
        
        const categoryPool = filteredQuizData.filter(
            c => c.sort === card.sort && c.devanagari !== correctAnswer
        );

        shuffle(categoryPool);
        for (let i = 0; i < 3 && i < categoryPool.length; i++) {
            options.push(categoryPool[i].devanagari);
        }
        
        while (options.length < 4) {
            const generalPool = quizData.filter(c => c.devanagari !== correctAnswer && !options.includes(c.devanagari));
            shuffle(generalPool);
            if (generalPool.length > 0) {
                options.push(generalPool[0].devanagari);
            } else {
                break;
            }
        }
        
        shuffle(options);

        options.forEach(opt => {
            const btn = document.createElement('button');
            btn.textContent = opt;
            btn.addEventListener('click', () => {
                if (opt === correctAnswer) {
                    showFeedback(`✅ Correct! Press 'Next' to continue.`, true);
                    readyForNext = true;
                    // Note: If you have a variable for your correct/submit green color, use it here
                    btn.style.backgroundColor = 'green'; 
                    Array.from(multipleChoiceContainer.querySelectorAll('button')).forEach(b => b.disabled = true);
                    if (romanActionRow.style.display !== 'none' && isAnswerCorrect(romanizedInput.value, card.roman)) {
                        isRomanCorrect = true;
                    }
                } else {
                    showFeedback(`❌ Incorrect — try again.`, false);
                    // Note: If you have a variable for your error red color, use it here
                    btn.style.backgroundColor = 'red';    
                    btn.disabled = true;
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
        const englishFieldVisible = englishActionRow.style.display !== "none";
        const romanFieldVisible = romanActionRow.style.display !== "none";

        if (isEnglishMode) {
            if (romanFieldVisible && isRomanCorrect) {
                showFeedback(`${romanAnswer} is correct. Select the Devanagari answer via the options below.`);
            } else if (romanFieldVisible && romanFilled && !isRomanCorrect) {
                showFeedback(`Romanization: ${romanAnswer} is incorrect.`, false);
            } else {
                feedbackEl.classList.add('hidden');
            }
            return;
        }

        if (englishFieldVisible) {
            if (isRomanCorrect && isEnglishCorrect) {
                showFeedback(`${romanAnswer} and ${englishAnswer} are correct. Press Enter to continue.`);
                readyForNext = true;
            } else if (isRomanCorrect && englishFilled && !isEnglishCorrect) {
                showFeedback(`${romanAnswer} is correct. English incorrect — try again.`, false);
                readyForNext = false;
            } else if (isRomanCorrect) {
                showFeedback(`${romanAnswer} is correct. Enter English answer.`, true);
                readyForNext = false;
            } else if (romanFilled) {
                showFeedback(`❌ Romanization incorrect — try again.`, false);
                readyForNext = false;
            } else {
                feedbackEl.classList.add('hidden');
                readyForNext = false;
            }
            return;
        }

        if (isRomanCorrect) {
            showFeedback(`${romanAnswer} is correct. Press Enter to continue.`);
            readyForNext = true;
        } else if (romanFilled) {
            showFeedback(`❌ Incorrect — try again.`, false);
        }
        readyForNext = isRomanCorrect;
    }

    function checkRomanizedAnswer() {
        const card = filteredQuizData[currentCardIndex];
        if (!card) return;
        const userAnswer = romanizedInput.value.trim();
        const underlined = `<u>${userAnswer}</u>`;
        const englishFieldVisible = englishActionRow.style.display !== "none";

        if (userAnswer !== '' && isAnswerCorrect(userAnswer, card.roman)) {
            isRomanCorrect = true;
            if (isEnglishMode) {
                showFeedback(`${underlined} is correct. Now choose the Devanagari option.`, true);
            } else if (!englishFieldVisible) {
                showFeedback(`${underlined} is correct. Press Enter to continue.`, true);
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
            // Trigger animation for NEXT card
            animateAndDisplayCard('next');
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

    // UPDATED BUTTON LISTENERS TO USE ANIMATION FUNCTION
    prevBtn.addEventListener('click', () => {
        animateAndDisplayCard('prev');
    });
    nextBtn.addEventListener('click', () => {
        animateAndDisplayCard('next');
    });

    englishModeBtn.addEventListener('click', () => {
        isEnglishMode = !isEnglishMode;
        englishModeBtn.textContent = isEnglishMode ? "दे" : "En";    
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
    
    // --- SAFE SWIPE LOGIC (Excludes Inputs, Buttons, and Hint Box) ---
    quizContent.addEventListener('touchstart', (e) => {
        const target = e.target;
        const targetTagName = target.tagName;

        // Ignore touches on inputs, buttons, and the hint box
        if (targetTagName === 'INPUT' || targetTagName === 'BUTTON' || target === answerEl) {
            startX = 0; 
            endX = 0;
            return;
        }

        startX = e.touches[0].clientX;
    });

    quizContent.addEventListener('touchmove', (e) => {
        if (startX !== 0) {
            endX = e.touches[0].clientX;
        }
    });

    quizContent.addEventListener('touchend', () => {
        if (startX === 0) return;

        const deltaX = endX - startX;

        if (Math.abs(deltaX) > threshold) {
            if (deltaX > 0) {
                // Swipe Right: Go to Previous Card
                animateAndDisplayCard('prev');
            } else {
                // Swipe Left: Go to Next Card
                animateAndDisplayCard('next');
            }
        }
        
        startX = 0;
        endX = 0;
    });
    // -------------------

    function initializeQuiz() {
        fetch("./data.json")
            .then(res => res.json())
            .then(data => {
                quizData = data;
                filteredQuizData = quizData.slice();
                if (randomizeToggle.checked) shuffle(filteredQuizData);
                // Initial load: no animation class passed
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
