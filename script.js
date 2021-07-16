function generateColors() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return `rgb(${red}, ${green}, ${blue})`;
}

let rgbControl = 'rgb(168, 34, 1)';

function colorsBall() {
  const balls = document.getElementsByClassName('ball');
  const sort = Math.floor(Math.random() * 6);
  for (let index = 0; index < balls.length; index += 1) {
    if (sort === index) {
      balls[index].style.backgroundColor = rgbControl;
    } else {
      balls[index].style.backgroundColor = generateColors();
    }
  }
}

window.onload = colorsBall();

document.querySelectorAll('.ball').forEach((element) => {
  element.addEventListener('click', () => {
    const selectedBall = element.style.backgroundColor;
    const answerBall = `rgb${document.getElementById('rgb-color').innerText}`;
    if (selectedBall === answerBall) {
      document.getElementById('answer').innerHTML = 'Acertou!';
    } else {
      document.getElementById('answer').innerHTML = 'Errou! Tente novamente!';
    }
  })
});

document.getElementById('reset-game').addEventListener('click', () => {
  rgbControl = generateColors();
  document.getElementById('rgb-color').innerHTML = rgbControl.split('rgb')[1];
  colorsBall();
  document.getElementById('answer').innerHTML = "Escolha uma cor";

})