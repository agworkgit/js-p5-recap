// Namespace 1

let DEV1 = {
  colourDiv: function (ev) {
    let target = ev.currentTarget;
    target.style.backgroundColor = "purple";
    target.style.color = "white";
  },
  init: function () {
    let divA = document.getElementById("output");
    divA.addEventListener("mouseout", DEV1.colourDiv);
  },
};

DEV1.init();

// let colourDiv, divA;

// colourDiv = function (ev) {
//   let target = ev.currentTarget;
//   target.style.backgroundColor = "purple";
//   target.style.color = "white";
// };

// divA = document.getElementById("output");
// divA.addEventListener("mouseout", colourDiv);
