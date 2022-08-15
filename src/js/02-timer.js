import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';




const startBtn = document.querySelector('[data-start]');
const timerHtml = document.querySelector('.timer');
const dateChosen = document.querySelector('#datetime-picker');

const s = document.querySelector('[data-seconds]');
const m = document.querySelector('[data-minutes]');
const h = document.querySelector('[data-hours]');
const d = document.querySelector('[data-days]');



startBtn.disabled = true;
const options = {
   enableTime: true,
   time_24hr: true,
   defaultDate: new Date(),
   minuteIncrement: 1,
   onClose(selectedDate) {
      selectedDate[0] <= new Date() ? Notiflix.Notify.failure('Please choose a date in the future') : startBtn.disabled = false;

   }
}
flatpickr(dateChosen, options)


function convertMs(ms) {
   // Number of milliseconds per unit of time
   const second = 1000;
   const minute = second * 60;
   const hour = minute * 60;
   const day = hour * 24;

   // Remaining days
   const days = Math.floor(ms / day);
   // Remaining hours
   const hours = Math.floor((ms % day) / hour);
   // Remaining minutes
   const minutes = Math.floor(((ms % day) % hour) / minute);
   // Remaining seconds
   const seconds = Math.floor((((ms % day) % hour) % minute) / second);

   return { days, hours, minutes, seconds };
}


const addLeadingZero = (value) => value.toString().padStart(2, '0');


startBtn.addEventListener('click', () => {
   let timer = setInterval(() => {
      let countdown = new Date(dateChosen.value) - new Date();

      startBtn.disabled = true;

      if (countdown >= 0) {
         const { days, hours, minutes, seconds } = convertMs(countdown);



         d.textContent = addLeadingZero(days);
         h.textContent = addLeadingZero(hours);
         m.textContent = addLeadingZero(minutes);
         s.textContent = addLeadingZero(seconds);
         if (countdown <= 10000) {
            timerHtml.style.color = 'tomato';
         }
      } else {
         Notiflix.Notify.success('Countdown finished');
         timerHtml.style.color = 'blue';
         clearInterval(timer);
      }
   }, 1000);
});