// FACTORY PATTERN (does not make use of 'this' or 'new'!)

function Car(make, model) {
  return {
    props: { make, model },
    info() {
      return this.props;
    },
  };
}

let c1 = Car("BMW", "Z4");

console.log(c1.props); // works
console.log(c1.info()); // works
