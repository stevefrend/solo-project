function convertMonthsToYears(date) {
  // input format: '2019-05-15'
  var diff = Date.now() - new Date(date);

  let seconds = Math.floor(diff / 1000);
  let minutes = Math.floor(seconds / 60);
  let hours = Math.floor(minutes / 60);
  let days = Math.floor(hours / 24);
  let months = Math.floor(days / 30);
  const years = Math.floor(months / 12);
  const remaininMonths = months % 12;

  return `Years: ${years} Months: ${remaininMonths}`;
}

export default convertMonthsToYears;
