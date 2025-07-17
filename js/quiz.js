document.getElementById('submit-quiz').addEventListener('click', function () {
    const selectedAnswer = document.querySelector('input[name="quiz1"]:checked');
    const resultElement = document.getElementById('quiz-result');

    if (!selectedAnswer) {
        resultElement.textContent = '답안을 선택해주세요!';
        resultElement.style.color = 'red';
        return;
    }

    const correctAnswer = '3'; // 정답
    if (selectedAnswer.value === correctAnswer) {
        resultElement.textContent = '정답입니다! 🎉';
        resultElement.style.color = 'green';
    } else {
        resultElement.textContent = '오답입니다. 다시 시도해보세요.';
        resultElement.style.color = 'red';
    }
});