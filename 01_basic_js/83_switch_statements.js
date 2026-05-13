/* 
Switch Statements
Notes:
- An alternative to if...else statements
- Useful when you have a long list of values to compare
*/

// Simulated AJAX call
let fetch = () => {
  let codes = [
    { code: 200, text: "OK" },
    { code: 201, text: "Created" },
    { code: 304, text: "Not Modified" },
    { code: 400, text: "Bad Request" },
    { code: 401, text: "Unauthorised" },
    { code: 403, text: "Forbidden" },
    { code: 404, text: "File Not Found" },
    { code: 405, text: "Method Not Allowed" },
    { code: 500, text: "Internal Server Error" },
    { code: 503, text: "Service Unavailable" },
    { code: 600, text: "Not A Real Code" },
  ];

  let num = Math.floor(Math.random() * codes.length);
  return codes[num];
};

let response = fetch();
console.log(response);

switch (response.code) {
  case 200:
  case 201: // -> we can even group multiple cases together
    console.log("All is good", response.text);
    break; // -> do not forget about the break keyword, otherwise you'll create cascading execution
  case 304:
    console.log("Redirect", response.text);
    break;
  case 400:
  case 403:
  case 404:
    console.log("Problem", response.text);
    break;
  case 500:
  case 503:
    console.log("Server Error", response.text);
    break;
  default: // -> default, executes as a last resort
    console.log(response.code, response.text);
}
