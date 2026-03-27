let uri = "http://jsonplaceholder.typicode.com/users/7";

// None of these examples do proper error handling of
// nasty http status codes or
// invalid data types - text, xml, json, etc...
// https://gist.github.com/prof3ssorSt3v3/84fa936813ea16b09689d196bf4e1476

// ***************************************************
// Old version AJAX (2012-2015)

let xhr = new XMLHttpRequest();
xhr.open("GET", uri, true); // true for asyncronous / false for blocking request
xhr.addEventListener("load", function (response) {
  // handle the response from the server
  let data = response.responseText; // or responseXML
  let json = JSON.parse(data); // JSON object
  console.log("XMLHttpRequest:", data);
});

xhr.addEventListener("error", function (err) {
  // error handling network request
});

xhr.send(null);

// ***************************************************
// New version AJAX (2015-current)

fetch(uri)
  .then(function (response) {
    return (response, json());
  })
  .then(function (data) {
    console.log(data);
  })
  .catch(function (err) {
    // error handling network request
  });
