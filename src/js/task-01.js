// Напиши функцию delay(ms), которая возвращает промис, переходящий в состояние "resolved" через ms
// миллисекунд.
// Значением исполнившегося промиса должно быть то кол - во миллисекунд которое передали во время вызова функции delay.

const delay = ms => {
  const promise = new Promise(resolve => {
    setTimeout(() => {
      resolve(ms);
    }, ms);
  });
  return promise;
};

const logger = time => console.log(`Resolved after ${time} ms`);

// Вызовы функции для проверки
delay(2000).then(logger);
delay(1000).then(logger);
delay(1500).then(logger);
