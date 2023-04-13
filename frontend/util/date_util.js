const months = {
  0: "January",
  1: "February",
  2: "March",
  3: "April",
  4: "May",
  5: "June",
  6: "July",
  7: "August",
  8: "September",
  9: "October",
  10: "November",
  11: "December",
};
const shortMonths = {
  0: "Jan",
  1: "Feb",
  2: "Mar",
  3: "Apr",
  4: "May",
  5: "Jun",
  6: "Jul",
  7: "Aug",
  8: "Sep",
  9: "Oct",
  10: "Nov",
  11: "Dec",
};

const daysOfWeek = {
  0: "Sunday",
  1: "Monday",
  2: "Tuesday",
  3: "Wednesday",
  4: "Thursday",
  5: "Friday",
  6: "Saturday",
};

const shortDays = {
  0: "Sun",
  1: "Mon",
  2: "Tue",
  3: "Wed",
  4: "Thu",
  5: "Fri",
  6: "Sat",
};

export const formatDate = (date) => {
  const obj = new Date(date);
  obj.setMinutes(obj.getMinutes() + obj.getTimezoneOffset());
  const month = months[obj.getMonth()];
  const day = obj.getDate();
  const year = obj.getFullYear();
  const dayOfWeek = daysOfWeek[obj.getDay()];
  return `${month} ${day}, ${year} (${dayOfWeek})`;
};

export const formatLastOnline = (date) => {
  const obj = new Date(date);
  obj.setMinutes(obj.getMinutes() + obj.getTimezoneOffset());
  const month = months[obj.getMonth()];
  const day = obj.getDate();
  const year = obj.getFullYear();
  return `${day} ${month} ${year}`;
};

export const formatAbsDate = (date) => {
  const obj = new Date(date);
  obj.setMinutes(obj.getMinutes() + obj.getTimezoneOffset());
  const month = obj.getMonth();
  const day = obj.getDate();
  const year = obj.getFullYear();
  // return `${day} ${month} ${year}`;
  return {
    day: day,
    month: month,
    year: year,
  };
};

export const formatMonthYear = (date) => {
  const obj = new Date(date);
  obj.setMinutes(obj.getMinutes() + obj.getTimezoneOffset());
  const month = months[obj.getMonth()];
  const year = obj.getFullYear();
  return `${month} ${year}`;
};

export const formatDateStyle = (date) => {
  const obj = new Date(date);
  obj.setMinutes(obj.getMinutes() + obj.getTimezoneOffset());
  const month = shortMonths[obj.getMonth()];
  const day = obj.getDate();
  const year = obj.getFullYear();
  const dayOfWeek = shortDays[obj.getDay()];

  return `${dayOfWeek}, ${day} ${month} ${year}`;
};

export const formatDateShowStyle = (date) => {
  const obj = new Date(date);
  obj.setMinutes(obj.getMinutes() + obj.getTimezoneOffset());
  const month = shortMonths[obj.getMonth()];
  const day = obj.getDate();
  const year = obj.getFullYear();
  const dayOfWeek = daysOfWeek[obj.getDay()];

  return `${dayOfWeek} ${day} ${month} ${year}`;
};

export const formatDateNews = (date) => {
  const obj = new Date(date);
  obj.setMinutes(obj.getMinutes() + obj.getTimezoneOffset());
  const dayOfWeek = shortDays[obj.getDay()];
  return `${dayOfWeek}, ${formatTime(date)}`;
};

export const formatDateNewsShow = (date) => {
  const obj = new Date(date);
  obj.setMinutes(obj.getMinutes() + obj.getTimezoneOffset());
  const month = shortMonths[obj.getMonth()];
  const day = obj.getDate();
  const year = obj.getFullYear();
  const dayOfWeek = shortDays[obj.getDay()];
  return `${dayOfWeek}/ ${day}~${month} ${year}~/ ${formatTime(date)}`;
};

export const formatTime = (date) => {
  const obj = new Date(date);
  const fullHours = obj.getHours();
  let hours = fullHours % 12;
  if (hours === 0) hours = 12;
  const minutes = obj.getMinutes();
  const tmp = `0${minutes}`;
  const paddedMinutes = tmp.slice(tmp.length - 2);
  const ampm = fullHours < 12 || fullHours === 0 ? "am" : "pm";
  return `${hours}:${paddedMinutes}${ampm}`;
};

export const formatDateTime = (date) =>
  `${formatDate(date)} ${formatTime(date)}`;

export const daysInMonth = () => {
  let now = new Date();
  return new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
};

export const daysInShortMonth = (month = "Jan", year = new Date().getFullYear()) => {
  const monthObj = Object.fromEntries(
    Object.entries(shortMonths).map((entry) => entry.reverse())
  );
  if (monthObj[month] == null) return 31;
  const monthNum = +monthObj[month] + 1;
  return new Date(+year || new Date().getFullYear(), monthNum, 0).getDate();
}

export const daysInLastMonth = () => {
  let now = new Date();
  return new Date(now.getFullYear(), now.getMonth(), 0).getDate();
};

export const firstDay = () => {
  let now = new Date();
  return new Date(now.getFullYear(), now.getMonth(), 1).getDay();
};

export const fiveDaySpan = (date) => {
  const dates = [];
  for (let i = -2; i <= 2; i++) {
    let newDate = new Date(date);
    newDate.setDate(newDate.getDate() + i);
    dates.push(newDate);
  }

  return dates.map((date) => [
    date.toDateString().split(" ")[0],
    date.getDate(),
  ]);
};

const wordNums = {
  1: "One",
  2: "Two",
  3: "Three",
  4: "Four",
  5: "Five",
  6: "Six",
  7: "Seven",
  8: "Eight",
  9: "Nine",
  10: "Ten",
  11: "Eleven",
  12: "Twelve",
  13: "Thirteen",
  14: "Fourteen",
  15: "Fifteen",
  16: "Sixteen",
  17: "Seventeen",
  18: "Eighteen",
  19: "Nineteen",
  20: "Twenty",
};

function convertMonths(num) {
  const months = num % 12;
  const years = (num - months) / 12;
  let yearStr = "";
  let monthStr = "";

  if (years > 0) {
    const unit = years > 1 ? "years" : "year";
    yearStr = `${years} ${unit}`;
    if (months > 0) yearStr += " and ";
  }
  if (months > 0) {
    const unit = months > 1 ? "months" : "month";
    monthStr = `${months} ${unit}`;
  }

  return `${yearStr}${monthStr}` || "now";
}

export const timeSinceBeganCoding = () => {
  const start = new Date(2019, 11, 21);
  let diff = Date.now() - start;
  let seconds = diff / 1000;
  let hours = seconds / 60 / 60;
  let months = Math.round(hours / 24 / 30);
  return months <= 20 ? wordNums[months] : convertMonths(months);
};
