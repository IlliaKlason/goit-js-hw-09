import Notiflix from 'notiflix';
const delay = document.querySelector('[name="delay"]');
const step = document.querySelector('[name="step"]');
const amount = document.querySelector('[name="amount"]');
const btnCreatePromise = document.querySelector('[type="submit"]');

function createPromise(position, delay) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
  return promise;
}
btnCreatePromise.addEventListener('click', e => {
  e.preventDefault();
  let firstDelay = +delay.value;
  let delayStep = +step.value;
  for (let i = 0; i < amount.value; i++) {
    createPromise(i + 1, firstDelay + delayStep * i)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `💡 Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `🐹 Rejected promise ${position} in ${delay}ms`
        );
      });
  }
});
