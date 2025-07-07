document.getElementById('submit-quiz').addEventListener('click', function () {
    const submitBtn = document.getElementById('submit-quiz');
    const selectedAnswer = document.querySelector('input[name="quiz1"]:checked');
    const resultElement = document.getElementById('quiz-result');
    const nextQuizButton = document.getElementById('next-quiz');

    if (!selectedAnswer) {
        resultElement.textContent = '답안을 선택해주세요!';
        resultElement.style.color = 'red';
        return;
    }

    const correctAnswer = '4';
    if (selectedAnswer.value === correctAnswer) {
        resultElement.textContent = '정답입니다! 🎉';
        resultElement.style.color = 'green';

        // 제출 버튼 숨기기
        submitBtn.style.display = 'none';
        // 다음 퀴즈 버튼 보이기
        nextQuizButton.style.display = 'inline-block';
    } else {
        resultElement.textContent = '오답입니다. 다시 시도해보세요.';
        resultElement.style.color = 'red';
        // 다시 시도 시 버튼 상태 원래대로
        submitBtn.style.display = 'inline-block';
        nextQuizButton.style.display = 'none';
    }
});

// 다음 퀴즈 페이지 이동
document.getElementById('next-quiz').addEventListener('click', function () {
    window.location.href = 'quiz3.html';
});