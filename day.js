// Returns the day of the week for the given date.
function dayName(date) {
  const daysOfTheWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  return daysOfTheWeek[date.getDay()];
}

function greeting(date) {
  return `hello, world! Happy ${dayName(date)}.`
}
