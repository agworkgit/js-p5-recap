// Fundamentals of the JS fetch method for AJAX
// Using jsonplaceholder for the data
// Remember that fetch retuns a promise
// HTTP status codes - http://www.restapitutorial.com/httpstatuscodes.html
// to test with NODE we need to install the node-fetch package
// npm install node-fetch
// import fetch from "node-fetch";

import fetch from "node-fetch";

// get the details for a random user
const root = "http://jsonplaceholder.typicode.com";
let id = Math.floor(Math.random() * 20) + 1; // id 1 to 20
let uri = root + "/users/" + id;

console.log("FETCH:", uri);
// FETCH: http://jsonplaceholder.typicode.com/users/3
// any user id higher than 10 will generate a 404 error

fetch(uri)
  .then(function (response) {
    if (response.status === 200) {
      return response.json();
    } else {
      throw new Error("Invalid user ID!"); // calls catch function
    }
  })
  .then((data) => {
    // data is coming from the return above
    console.log(data);
    let jsonData = JSON.stringify(data); // if you want a string version of the JS object
  })
  .catch(function (err) {
    console.log("There was an error:", err.message);
    // in case of error we get -> There was an error: Invalid user ID!
  });

/* Example output:
{
  id: 3,
  name: 'Clementine Bauch',
  username: 'Samantha',
  email: 'Nathan@yesenia.net',
  address: {
    street: 'Douglas Extension',
    suite: 'Suite 847',
    city: 'McKenziehaven',
    zipcode: '59590-4157',
    geo: { lat: '-68.6102', lng: '-47.0653' }
  },
  phone: '1-463-123-4447',
  website: 'ramiro.info',
  company: {
    name: 'Romaguera-Jacobson',
    catchPhrase: 'Face to face bifurcated interface',
    bs: 'e-enable strategic applications'
  }
}
*/
