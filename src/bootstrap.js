import moment from 'moment';

// const sixMonthsAgo = moment().subtract(6, 'months');

// console.log(sixMonthsAgo.toString());

// const twoWeeksFromNow = moment().add(14, 'days');

// console.log(twoWeeksFromNow)

const birthday = moment('1987-11-04', 'YYYY-MM-DD')

// console.log(birthday.fromNow());

// console.log(birthday.format('dddd'));

console.log(birthday.format('MMM Do YYYY'));