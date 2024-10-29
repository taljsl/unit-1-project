let score = 0
let timeleft = 10
let countdown
const pizzaButtonElement = document.querySelector('.pizzaimage')
const scoreElement = document.querySelector('.score')














pizzaButtonElement.addEventListener('click', () => {
    console.log("I work!");
    countdown = setInterval(() => {
        timeLeft--; // Decrease the time left
    score++;
    scoreElement.textContent = `Pizza's made ${score}`
    if (score >=10) { scoreElement.textContent = `You did it you made ${score} pizza's victory is yours`}
  });