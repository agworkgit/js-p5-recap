// Date.now() vs data.valueOf()
// Jan 1, 1970 12:00:00
// Timestamp = Number of MS that have passed since then

const log = console.log;

let timestamp1 = Date.now(); // Class Method / Static Method
log(timestamp1); // -> 1777489785023 MS

let today = new Date(); // Instance of the Date object
log(today); // -> 2026-04-29T19:09:45.027Z

let timestamp2 = today.valueOf();
log(timestamp2); // -> 1777490063544

/* 
Clean mental model

Think of it like this:
-> Date.now() → “What time is it right now?” (raw number)
-> new Date() → “Give me a time object I can inspect/format”
-> .valueOf() → “Convert this object back into a timestamp”

Quick rule of thumb
-> Need performance / timestamps → use Date.now()
-> Need formatting / manipulation → use new Date()
*/
