// Date objects in JS
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
// moment.js (library to calculate the time between dates)

let log = console.log;

let d = new Date(); // holds current time and date
log(d); // 2026-03-31T10:57:29.673Z

let num = 1000 * 60 * 60 * 24 * 365.25 * 40;
// approx 40 yrs
// ms * sec * min * hr * day * year * x

let str = "20 July 2012";

let d1 = new Date(1500000000000); // with timestamp
// Unix Epoch Jan 1 00:00:00.000 1970
log(d1); // 2017-07-14T02:40:00.000Z

let d2 = new Date(num); // with timestamp
log(d2); // 2010-01-01T00:00:00.000Z

let d3 = new Date(str); // with string
log(d3); // 2012-07-19T22:00:00.000Z

// with all individual args
let d4 = new Date(2017, 0, 1, 12, 30, 0, 123); // 1st Jan 2017
log(d4); // 2017-01-01T11:30:00.123Z

// change values
d.setFullYear(2020);
d.setHours(9); // setMinutes(), setMonth(), setDate()
log(d); // 2020-03-31T07:09:07.229Z

// get only minutes from the date object
let t = d.getMinutes();
log(t); // 9

let d5 = d.getDay(); // day of week
log(d5); // 2 -> Tuesday

// Date Object -> OUTPUT
// ------- Metods UTC -----------
// toDateString(); -> representation of current UTC time
// toTimeString(); -> representation of current UTC time
// toISOString(); -> date simplified UTC
// toJSON(); -> date for use in JSON string in UTC
// toUTCString()
// ------ Metods Locale -------------
// toLocaleString(); - local time and date
// toLocaleString('en-GB'); - specific formatting local time and date

log(d.toDateString()); // Tue Mar 31 2020
log(d.toTimeString()); // 09:23:06 GMT+0200 (Central European Summer Time)
log(d.toLocaleString("en-GB")); // 31/03/2020, 09:23:06
log(d.toUTCString()); // Tue, 31 Mar 2020 07:23:06 GMT
