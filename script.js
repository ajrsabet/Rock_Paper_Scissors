const buttons = document.querySelectorAll('.choice');
const resetButton = document.getElementById('reset');
const resultText = document.getElementById('result-text');
const userScore = document.getElementById("user-score");
const compScore = document.getElementById("comp-score");
let score = [0, 0];

function highlightChoice(button, className, duration = 2000) {
    button.classList.add(className);
    setTimeout(() => {
        button.classList.remove(className);
    }, duration);
}

function determineWinner(userChoice, computerChoice) {
    const rules = {
        rock: 'scissors',
        scissors: 'paper',
        paper: 'rock',
    };

    if (userChoice === computerChoice) return 'Draw';
    if (rules[userChoice] === computerChoice) return 'User';
    return 'Computer';
}

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const userChoice = button.id;
        const computerChoice = buttons[Math.floor(Math.random() * 3)].id;

        highlightChoice(button, 'highlight-user');
        const computerButton = document.getElementById(computerChoice);
        highlightChoice(computerButton, 'highlight-computer');

        const winner = determineWinner(userChoice, computerChoice);
        if (winner === 'User') {
            score[0]++;
            button.classList.add('winner');
        } else if (winner === 'Computer') {
            score[1]++;
            computerButton.classList.add('winner');
        }
        const userScore = document.getElementById("user-score");
        const compScore = document.getElementById("comp-score");

        userScore.textContent = score[0];
        compScore.textContent = score[1];
        if (winner == "Draw") {
            resultText.textContent = `${winner}!`;
        } else {
            resultText.textContent = `${winner} wins!`;
        }

        setTimeout(() => {
            button.classList.remove('winner');
            computerButton.classList.remove('winner');
        }, 2000);
    });
});

resetButton.addEventListener('click', () => {
    resultText.textContent = "";
    score = [0, 0];
    userScore.textContent = score[0];
    compScore.textContent = score[1];
});

