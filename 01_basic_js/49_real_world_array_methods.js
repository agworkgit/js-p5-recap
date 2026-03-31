// load the sample weather JSON data
// build a grid of temps for the next 24hrs
// blue background in hours of high precipitation probability (over 70%)

let uri = "./49_sample_weather.json";
let req = new Request(uri, { method: "GET" });
let container, df;

document.addEventListener("DOMContentLoaded", init);

function init() {
  container = document.getElementById("container");
  df = new DocumentFragment();

  fetch(req)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("BAD HTTP");
      }
    })
    .then((json) => {
      // create the weather grid
      json.hourly.data.forEach((hour) => {
        // to show the temp
        let div = document.createElement("div");
        div.classList.add("hour");
        // new - timestamp
        let timestamp = hour.time;
        div.id = "ts_" + timestamp.toString();
        let temp = parseInt(hour.temperature);
        div.textContent = temp.toString().concat("\u00B0"); // unicode for degree symbol
        div.title = hour.summary; // on focus (show tooltip info with hour.summary)
        // to show the time
        let span = document.createElement("span");
        let currentTime = new Date(timestamp * 1000);
        span.textContent = currentTime.getHours().toString().concat(":00");

        div.appendChild(span);
        df.appendChild(div);
      });

      container.appendChild(df);

      // highlight the times when it will be raining
      // get the values for which precipitation is greater than 50%
      json.hourly.data
        .filter((hour) => {
          if (hour.precipProbability > 0.5) {
            return true;
          } else {
            return false;
          }
        })
        .map((hour) => {
          return hour.time;
        })
        .forEach((timestamp) => {
          let id = "ts_".concat(timestamp);
          document.getElementById(id).classList.add("precip");
        });

      // highest temp
      let highObj = json.hourly.data.reduce(
        (accumulator, hour) => {
          if (hour.temperature > accumulator.temp) {
            return { temp: hour.temperature, time: hour.time };
          } else {
            return accumulator;
          }
        },
        {
          temp: -100,
          time: 1000,
        },
      );
      let id = "ts_" + highObj.time;
      document.getElementById(id).classList.add("hot");
    })
    .catch((err) => {
      console.log(err.message);
    });
}
