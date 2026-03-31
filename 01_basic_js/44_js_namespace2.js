// Namespace 2

let DEV2 = {
  colourDiv: function (ev) {
    let target = ev.currentTarget;
    target.style.backgroundColor = "olive";
    target.style.color = "#333";
  },
  init: function () {
    let divB = document.getElementById("output");
    // 'this' refers to the current object
    divB.addEventListener("mouseover", this.colourDiv);
  },
};

DEV2.init();

// let colourDiv, divB;

// colourDiv = function (ev) {
//   let target = ev.currentTarget;
//   target.style.backgroundColor = "olive";
//   target.style.color = "#333";
// };

// divB = document.getElementById("output");
// divB.addEventListener("mouseover", colourDiv);
