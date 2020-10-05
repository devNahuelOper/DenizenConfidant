import _ from 'lodash';


function fillMonth(year, month) {
  let calendar = Array.from(Array(35));
  let date = new Date(year, month);
  let start = date.getDay();
  let lastDay = new Date(year, month + 1, 0).getDate();

  for (let i = 0; i <= lastDay - 1; i++) {
    calendar[start + i] = i + 1;
  }

  let prevMonthEnd = new Date(year, month, 0).getDate();

  for (let j = 0; j < start; j++) {
    calendar[start - (1 + j)] = prevMonthEnd - j;
  }

  let lastIndex = calendar.lastIndexOf(lastDay);
  let daysAfter = calendar.length - lastIndex - 1;
  for (let k = 1; k <= daysAfter; k++) {
    calendar[lastIndex + k] = k;
  }

  // console.log(`called with: (${year}, ${month})`);
  return _.chunk(calendar, 7);
}

function cachingDecorator(func, hash) {
  let cache = new Map();
  return function () {
    let key = hash(arguments);
    if (cache.has(key)) {
      return cache.get(key);
    }
    let result = func.apply(this, arguments);
    cache.set(key, result);
    return result;
  }
}

function hash(args) {
  return [].join.call(args);
}

export const getCalendar = (year, month) => {
  fillMonth = cachingDecorator(fillMonth, hash);
  return fillMonth(year, month);
}

export const formatMonth = month => {
  const months = {
    0: 'January',
    1: 'February',
    2: 'March',
    3: 'April',
    4: 'May',
    5: 'June',
    6: 'July',
    7: 'August',
    8: 'September',
    9: 'October',
    10: 'November',
    11: 'December',
  };
  
  return `${months[month]}`;
};


// fillMonth = cachingDecorator(fillMonth, hash);

const options = [
  { value: 11, label: 'December' },
  { value: 10, label: 'November' },
  { value: 9, label: 'October' },
  { value: 8, label: 'September' },
  { value: 7, label: 'August' },
  { value: 6, label: 'July' },
  { value: 5, label: 'June' },
  { value: 4, label: 'May' },
  { value: 3, label: 'April' },
  { value: 2, label: 'March' },
  { value: 1, label: 'February' },
  { value: 0, label: 'January' }
];

{/* <Select options={options} defaultValue={this.state.month} /> */}

const monthDrop = [
  { value: 11, label: 'December' },
  { value: 10, label: 'November' },
  { value: 9, label: 'October' },
  { value: 8, label: 'September' },
  { value: 7, label: 'August' },
  { value: 6, label: 'July' },
  { value: 5, label: 'June' },
  { value: 4, label: 'May' },
  { value: 3, label: 'April' },
  { value: 2, label: 'March' },
  { value: 1, label: 'February' },
  { value: 0, label: 'January' }
];