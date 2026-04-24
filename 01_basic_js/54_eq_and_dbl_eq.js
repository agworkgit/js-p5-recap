// == and ===
// equality vs strict equality
// what are the differences between the two?
// The negative versions are != and !==
// not equal and strictly non-equal

let a, b, obj1, obj2, copy1, copy2, html1, html2;
a = 5;
b = 5;

obj1 = { prop: "value" };
obj2 = { prop: "value" };

copy1 = obj1;
copy2 = obj2;

html1 = document.querySelector("h1");
html2 = document.querySelector("h1");
