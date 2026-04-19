// public/script.js

// Function to fetch vocabulary lessons
async function fetchVocabularyLessons() {
    const response = await fetch('https://api.example.com/vocabulary'); // replace with actual API endpoint
    const lessons = await response.json();
    displayLessons(lessons);
}

// Function to fetch grammar lessons
async function fetchGrammarLessons() {
    const response = await fetch('https://api.example.com/grammar'); // replace with actual API endpoint
    const lessons = await response.json();
    displayLessons(lessons);
}

// Function to display lessons in interactive cards
function displayLessons(lessons) {
    const container = document.getElementById('lessons-container');
    lessons.forEach(lesson => {
        const card = document.createElement('div');
        card.className = 'lesson-card';
        card.innerHTML = `<h3>${lesson.title}</h3><p>${lesson.description}</p>`;

        // Modal functionality
        card.onclick = () => {
            showModal(lesson);
        };

        container.appendChild(card);
    });
}

// Function to show modal with lesson details
function showModal(lesson) {
    const modal = document.getElementById('lesson-modal');
    modal.querySelector('.modal-title').innerText = lesson.title;
    modal.querySelector('.modal-body').innerText = lesson.details;
    modal.style.display = 'block';
}

// Close modal
document.getElementById('close-modal').onclick = () => {
    document.getElementById('lesson-modal').style.display = 'none';
};

// Call functions to fetch lessons
fetchVocabularyLessons();
fet
chGrammarLessons();