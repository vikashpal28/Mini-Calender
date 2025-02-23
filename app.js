let d = document.querySelector(".date");
let y = document.querySelector(".year");

// new date object
let today = new Date();
// today's date
let date = today.getDate();
// today's week day
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let week = days[today.getDay()]; // Use today.getDay() to get the correct day index
// today's month
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let month = today.getMonth();
let m = months[month];
console.log(m);
// this year
let year = today.getFullYear();

d.innerHTML = `${week}, ${date}`; // Include the week day in the date

y.innerHTML = `${m} ${year}`;
