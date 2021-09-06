// // new CountdownTimer({
// //   selector: '#timer-1',
// //   targetDate: targetDate,
// //   nowDate: nowDate,
// //   time: time,
// // });

const daysRef = document.querySelector('.value[data-value="days"]');
const hoursRef = document.querySelector('span[data-value="hours"]');
const minsRef = document.querySelector('span[data-value="mins"]');
const secsRef = document.querySelector('span[data-value="secs"]');

const targetDate = new Date('October 17, 2021');

//update countdown time
function updateCountdownTime() {
  const currentDate = new Date();
  const time = targetDate - currentDate;

  const days = Math.floor(time / (1000 * 60 * 60 * 24));
  const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
  const secs = Math.floor((time % (1000 * 60)) / 1000);

  daysRef.textContent = days;
  hoursRef.textContent = hours < 10 ? '0' + hours : hours;
  minsRef.textContent = mins < 10 ? '0' + mins : mins;
  secsRef.textContent = secs < 10 ? '0' + secs : secs;
}

setInterval(updateCountdownTime, 1000);

// const daysRef = document.querySelector('.value[data-value="days"]');
// const hoursRef = document.querySelector('.value[data-value="hours"]');
// const minsRef = document.querySelector('.value[data-value="mins"]');
// const secsRef = document.querySelector('.value[data-value="secs"]');

// class CountdownTimer {
//   constructor({ selector, targetDate }) {
//     this.selector = selector;
//     this.targetDate = targetDate;
//     this.setInterval = setInterval(() => {
//       const currentDate = Date.now();
//       const deltaTime = this.targetDate - currentDate;
//       const time = this.getTimeComponents(deltaTime);
//       this.updateClockface(time);
//     }, 1000);
//   }

//   getTimeComponents(time) {
//     const days = Math.floor(time / (1000 * 60 * 60 * 24));
//     const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
//     const secs = Math.floor((time % (1000 * 60)) / 1000);
//     return { days, hours, mins, secs };
//   }

//   updateClockface({ days, hours, mins, secs }) {
//     daysRef.textContent = `${days}`;
//     hoursRef.textContent = `${hours}`;
//     minsRef.textContent = `${mins}`;
//     secsRef.textContent = `${secs}`;
//   }
// }
// new CountdownTimer({
//   selector: '#timer-1',
//   targetDate: new Date('May 31, 2021 9:59:59'),
// });
