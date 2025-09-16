// Fetch the data from the JSON file
fetch('data.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        // The `quizData` variable is now defined and ready to use
        const quizData = data; 
        
        // All of your application's logic goes here
        const questionEl = document.getElementById('question');
        const answerEl = document.getElementById('answer');
        const romanizedInput = document.getElementById('romanized-answer-input');
        const englishInput = document.getElementById('english-answer-input');
        const submitRomanizedBtn = document.getElementById('submit-romanized-btn');
        const submitEnglishBtn = document.getElementById('submit-english-btn');
        const feedbackEl = document.getElementById('feedback');
        const prevBtn = document.getElementById('prev-card-btn');
        const showAnswerBtn = document.getElementById('show-answer-btn');
        const resetBtn = document.getElementById('reset-btn');
        const nextBtn = document.getElementById('next-card-btn');
        const categorySelect = document.getElementById('category-select');

        let currentCardIndex = 0;
        let filteredQuizData = [];

        function shuffle(array) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
        }

        function displayCard() {
            if (filteredQuizData.length === 0) {
                questionEl.textContent = 'No cards found for this category.';
                answerEl.textContent = '';
                answerEl.classList.add('hidden');
                return;
            }

            const currentCard = filteredQuizData[currentCardIndex];
            questionEl.textContent = currentCard.devanagari;
            answerEl.textContent = `Romanized: ${currentCard.roman} | English: ${currentCard.english}`;
            answerEl.classList.add('hidden');
            feedbackEl.textContent = '';
            romanizedInput.value = '';
            englishInput.value = '';
        }

        function checkRomanizedAnswer() {
            const userAnswer = romanizedInput.value.toLowerCase().trim();
            const correctAnswer = filteredQuizData[currentCardIndex].roman.toLowerCase().trim();
            if (userAnswer === correctAnswer) {
                feedbackEl.textContent = "Correct! ✅";
                feedbackEl.classList.remove('incorrect', 'partial');
                feedbackEl.classList.add('correct');
                answerEl.classList.remove('hidden');
            } else {
                feedbackEl.textContent = "Incorrect Romanized. Try again.";
                feedbackEl.classList.remove('correct', 'partial');
                feedbackEl.classList.add('incorrect');
            }
        }

        function checkEnglishAnswer() {
            const userAnswer = englishInput.value.toLowerCase().trim();
            const correctAnswer = filteredQuizData[currentCardIndex].english.toLowerCase().trim();
            if (userAnswer === correctAnswer) {
                feedbackEl.textContent = "Correct! ✅";
                feedbackEl.classList.remove('incorrect', 'partial');
                feedbackEl.classList.add('correct');
                answerEl.classList.remove('hidden');
            } else {
                feedbackEl.textContent = "Incorrect English. Try again.";
                feedbackEl.classList.remove('correct', 'partial');
                feedbackEl.classList.add('incorrect');
            }
        }

        function applyFilterAndLoad() {
            const selectedCategory = categorySelect.value;
            if (selectedCategory === 'all') {
                filteredQuizData = [...quizData];
            } else if (selectedCategory === 'popular') {
                filteredQuizData = quizData.filter(card => card.popular === true);
            } else {
                filteredQuizData = quizData.filter(card => card.sort === selectedCategory);
            }
            shuffle(filteredQuizData);
            currentCardIndex = 0;
            displayCard();
        }

        submitRomanizedBtn.addEventListener('click', checkRomanizedAnswer);
        submitEnglishBtn.addEventListener('click', checkEnglishAnswer);

        // Enter key event listeners
        romanizedInput.addEventListener('keypress', (event) => {
            if (event.key === 'Enter') {
                checkRomanizedAnswer();
            }
        });
        englishInput.addEventListener('keypress', (event) => {
            if (event.key === 'Enter') {
                checkEnglishAnswer();
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

        showAnswerBtn.addEventListener('click', () => {
            answerEl.classList.remove('hidden');
        });

        resetBtn.addEventListener('click', () => {
            displayCard();
        });

        categorySelect.addEventListener('change', applyFilterAndLoad);

        // Initial load
        applyFilterAndLoad();
    })
    .catch(error => {
        console.error('Error fetching quiz data:', error);
        questionEl.textContent = 'Failed to load flashcard data.';
    });