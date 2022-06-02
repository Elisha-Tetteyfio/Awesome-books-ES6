import { DateTime } from './luxon.js';

export const now = DateTime.now();

const getDate = () => {
  let { month } = now;
  let { day } = now;
  const { year } = now;

  if (day < 10) { day = `0${day}`; }
  if (month < 10) { month = `0${month}`; }
  return `${day} - ${month} - ${year},`;
};

const getTime = () => {
  let { hour } = now;
  let minutes = now.minute;
  let seconds = now.second;
  if (hour < 10) { hour = `0${hour}`; }
  if (minutes < 10) { minutes = `0${minutes}`; }
  if (seconds < 10) { seconds = `0${seconds}`; }
  return `${hour}:${minutes}:${seconds}`;
};

export const insertDate = () => {
  const navbar = document.querySelector('header');

  const dateEl = document.createElement('div');
  dateEl.classList.add('date');

  dateEl.innerHTML = `${getDate()} ${getTime()}`;
  navbar.appendChild(dateEl);
};