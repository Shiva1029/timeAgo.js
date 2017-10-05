var timeAgo = function(date) {
  var d = new Date();
  var UTCsecondsNow = (d.getTime() + d.getTimezoneOffset() * 60 * 1000);
  var UTCseconds = (date.getTime() + date.getTimezoneOffset() * 60 * 1000);
  var diff = UTCsecondsNow - UTCseconds;
  var tense = 'ago';
  if (diff < 0) {
    tense = 'later';
    diff = Math.abs(diff);
  }
  if (diff === 0) return 0;
  // 365.25 * 24 * 60 * 60 * 1000
  var years = singular(Math.round(diff / 31557600000), 'Year');
  if (years)
    return years + tense;
  var months = singular(Math.round(diff / 2592000000), 'Month');
  if (months)
    return months + tense;
  var days = singular(Math.round(diff / 86400000), 'Day');
  if (days)
    return days + tense;
  var hours = singular(Math.round(diff / 3600000), 'Hour');
  if (hours)
    return hours + tense;
  var mins = singular(Math.round(diff / 60000), 'Minute');
  if (mins)
    return mins + tense;
  var secs = singular(Math.round(diff / 1000), 'Second');
  if (secs)
    return secs + tense;
};

var singular = function(num, str) {
  if (num > 1) {
    if (num === 1)
      return '1 ' + str + ' ';
    else
      return num + ' ' + str + 's ';
  }
  return '';
};

console.log(timeAgo(new Date('2016-12-04T11:45:00.000Z')));
