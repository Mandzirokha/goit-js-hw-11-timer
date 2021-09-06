const daysRef = document.querySelector('.value[data-value="days"]');
const hoursRef = document.querySelector('span[data-value="hours"]');
const minsRef = document.querySelector('span[data-value="mins"]');
const secsRef = document.querySelector('span[data-value="secs"]');

const targetDate = new Date('October 17, 2021');

class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
    this.setInterval = setInterval(() => {
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
    }, 1000);
  }
}

new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('December 20, 2021'),
});
