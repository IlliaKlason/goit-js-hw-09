function getRandomHexColor() {
   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnStart = document.querySelector('[data-start]');
const btnStop = document.querySelector('[data-stop]');
const textColor = document.querySelector('.colorchange');

btnStop.disabled = true
let timerId = null;


btnStart.addEventListener('click', () => {
   btnStart.disabled = true;
   btnStop.disabled = false;

   timerId = setInterval(() => {
      const randomColor = getRandomHexColor();
      textColor.textContent = randomColor;
      textColor.style.color = "white";
      document.body.style.backgroundColor = randomColor;
   }, 1000);

});

btnStop.addEventListener('click', () => {
   clearInterval(timerId);
   btnStart.disabled = false;
   btnStop.disabled = true;
});
