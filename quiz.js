document.addEventListener('DOMContentLoaded', function() {
    const answers = {
        q1: 'b',
        q2: 'a',
        q3: 'd',
        q4: 'a'
    };

    const form = document.getElementById('quiz-form');
    const submitBtn = document.getElementById('submit-btn');
    const result = document.getElementById('result');
    const scoreDisplay = document.getElementById('score-value');
    const feedback = document.getElementById('feedback');

    submitBtn.addEventListener('click', function() {
        let score = 0;
        const formData = new FormData(form);
        
        for (let [key, value] of formData.entries()) {
            if (value === answers[key]) {
                score++;
            }
        }
        
        scoreDisplay.textContent = score;
        feedback.textContent = getFeedback(score);
        result.style.display = 'block';
    });

    function getFeedback(score) {
        if (score === 4) {
            return "Excellent! You know your stuff.";
        } else if (score === 3) {
            return "Good job! You have a good understanding.";
        } else if (score === 2) {
            return "Not bad, but there's room for improvement.";
        } else {
            return "Keep trying! You'll get better.";
        }
    }
});
