/* 
Placeholder images for AJAX
Notes:
-
*/

// new syntax (node require vs import)
import fetch from "node-fetch";
let url = "https://picsum.photos/list";

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    console.log("arr length:", data.length);
    console.log("first item:", data[0]);
    // you can access any info in the 'item' with dot notation

    // frontend usage :
    // let img = document.createElement("img");
    // img.src = data[0].post_url;
  })
  .catch((err) => {
    console.log(JSON.stringify(err, null, 2));
  });

/*
Fetch return:

arr length: 993
first item: {
  format: 'jpeg',
  width: 5000,
  height: 3333,
  filename: '0.jpeg',
  id: 0,
  author: 'Alejandro Escamilla',
  author_url: 'https://unsplash.com/photos/yC-Yzbqy7PY',
  post_url: 'https://unsplash.com/photos/yC-Yzbqy7PY'
} */
