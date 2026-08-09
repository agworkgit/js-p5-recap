/* 
What is a Polyfill
How to create a Polyfill

Array - justLetter - only keep Strings with a specific letter

Date - f$$kinDay - return the day of the week with prefix
*/

// The Array and Date method checks should be on the prototype e.g. Array.prototype.justLetter

let log = console.log;

if (!Array.justLetter) {
  // log("justLetter method missing");
  // we will now add the property to all Array type objects
  Array.prototype.justLetter = function (letter) {
    // 'this' refers to the object the method was called from, and we need to use the 'function' keyword to make it work
    let arr = this.filter((item) => {
      if (typeof item != "string") return false;
      return item.indexOf(letter) > -1;
    });
    return arr;
  };
}

let names = ["abc", "def", "ghi", "jkl", "cab", "dac"];
log(names);
log(names.justLetter("d")); // [ 'def', 'dac' ]
// if the polyfill existed you could call this method anywhere!

// date example

if (!Date.f$$kinDay) {
  // log("f$$kinDay method missing");
  Date.prototype.f$$kinDay = function () {
    // 'this' refers to the Date object itself
    switch (this.getDay()) {
      case 0:
        return "Today is f$$kin Sunday";
      case 1:
        return "Today is f$$kin Monday";
      case 2:
        return "Today is f$$kin Tuesday";
      case 3:
        return "Today is f$$kin Wednesday";
      case 4:
        return "Today is f$$kin Thursday";
      case 5:
        return "Today is f$$kin Friday";
      case 6:
        return "Today is f$$kin Saturday";
    }
    return this.getDay();
  };
}

log(new Date().f$$kinDay()); // Today is f$$kin Saturday

// so, that is what a polyfill is, a method you are adding onto some existing object, you provide functionality that doesn't already exist

if (Array.prototype.sort) {
  log("sort does exist");
}
