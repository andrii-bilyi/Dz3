let currentQuestion = 0;
let totalScore = 0;

function nextQuestion(questionNumber) {
    const startElement = document.getElementById(`startDiv`);
    if(startElement.style.display != 'none') {
        startElement.style.display = 'none';
    }

    const currentQuestionElement = document.getElementById(`question${questionNumber}`);
    currentQuestionElement.style.display = 'none';

    const selectedAnswer = document.querySelector(`input[name="q${questionNumber}"]:checked`);
    if (selectedAnswer) {
        totalScore += parseInt(selectedAnswer.value);
    }

    currentQuestion++;
    const nextQuestionElement = document.getElementById(`question${currentQuestion}`);

    if (nextQuestionElement) {
        nextQuestionElement.style.display = 'block';
    } 
    // else {
    //     const finishButton = document.getElementById('finishButton');
    //     finishButton.style.display = 'block';
    // }

    if(questionNumber == 10) {
        showResult();
        currentQuestion = 0;
        totalScore = 0;
    }
}

function showResult() {
    const result = document.getElementById('result');
    const score = document.getElementById('score');
    score.textContent = `Правильних відповідей: ${totalScore}`;
    result.style.display = 'block';
}

function refreshPage() {
    location.reload(); // Оновити поточну сторінку
}