export const timeAgo = function (date) {
    const d = new Date();
    const UTCsecondsNow = (d.getTime() + d.getTimezoneOffset() * 60 * 1000);
    const UTCseconds = (date.getTime() + date.getTimezoneOffset() * 60 * 1000);
    let diff = UTCsecondsNow - UTCseconds;
    let tense = 'ago';
    if (diff < 0) {
        tense = 'later';
        diff = Math.abs(diff);
    }
    if (diff === 0) {
        return 'Just Now';
    }
    // 365.25 * 24 * 60 * 60 * 1000
    const years = singular(Math.round(diff / 31557600000), 'Year');
    if (years) {
        return years + tense;
    }
    const months = singular(Math.round(diff / 2592000000), 'Month');
    if (months) {
        return months + tense;
    }
    const days = singular(Math.round(diff / 86400000), 'Day');
    if (days) {
        return days + tense;
    }
    const hours = singular(Math.round(diff / 3600000), 'Hour');
    if (hours) {
        return hours + tense;
    }
    const mins = singular(Math.round(diff / 60000), 'Minute');
    if (mins) {
        return mins + tense;
    }
    const secs = singular(Math.round(diff / 1000), 'Second');
    if (secs) {
        return secs + tense;
    }
};

const singular = function (num, str) {
    if (num > 1) {
        if (num === 1) {
            return '1 ' + str + ' ';
        } else {
            return num + ' ' + str + 's ';
        }
    }
    return '';
};
