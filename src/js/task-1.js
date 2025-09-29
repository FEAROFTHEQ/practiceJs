import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
const button = document.querySelector("button[data-start]");
const days = document.querySelector("span[data-days]");
const hours = document.querySelector("span[data-hours]");
const minutes = document.querySelector("span[data-minutes]");
const seconds = document.querySelector("span[data-seconds]");
button.disabled = true;
let userSelectedDate;
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0].getTime() < options.defaultDate.getTime()) {
      button.disabled = true;
      alert("Unvalid");
      return;
    }
    userSelectedDate = selectedDates[0];
    button.disabled = false;
  },
};
flatpickr("#datetime-picker", options);

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

function generalAddZero(value) {
  if (value.toString().length < 2) {
    return value.toString().padStart(2, "0");
  }
  return value;
}
function daysAddZero(value) {
  if (value.toString().length < 2) {
    return value.toString().padStart(2, "0");
  }
  if (value.toString().length > 2) {
    return value.toString().padStart(3, "0");
  }
  return value;
}

button.addEventListener("click", (e) => {
  button.disabled = true;
  document.querySelector("#datetime-picker").disabled = true;

  const id = setInterval(() => {
    const timeLeft = convertMs(userSelectedDate.getTime() - Date.now());
    if (userSelectedDate.getTime() - Date.now() < 0) {
      alert("done");
      clearInterval(id);
      button.disabled = false;
      document.querySelector("#datetime-picker").disabled = false;
      return;
    }
    days.textContent = daysAddZero(timeLeft.days);
    hours.textContent = generalAddZero(timeLeft.hours);
    minutes.textContent = generalAddZero(timeLeft.minutes);
    seconds.textContent = generalAddZero(timeLeft.seconds);
  }, 1000);
});
