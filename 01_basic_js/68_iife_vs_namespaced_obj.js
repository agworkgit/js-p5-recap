// IIFE vs Namespaced Objects as wrappers for your code (avoid same name different variables conflicts)
// Namespace = top level variables

// Namespaced version
// Protected as long as another namespace doesn't share the same name (in this case objNS)

let objNS = {
  name: "Object Namespace",
  init: function () {
    // get the ball rolling
    objNS.name = "New Value";
    // objNS.action();
    // or
    this.action();
  },
  action: function () {
    // do some task
  },
};

objNS.init(); // the difference is here
// with this method we need to call init()

// IIFE version

let objIIFE = (function () {
  // we can create private variables in this scope
  let myPrivateVar = "hidden variable";
  let myPrivateFn = function () {
    // some task
    console.log("Private function running");
  };

  return {
    name: "Object IIFE",
    init: function () {
      // get the ball rolling
      objIIFE.name = "New Value";
      this.action();
    },
    action: function () {
      // do some task
      myPrivateFn(); // and run the private functions inside here
    },
  };
})(); // when called, the return gets stuffed into the variable objIIFE

objIIFE.init(); // init() -> action() -> myPrivateFn()

/* 
Note:
- If someone wants to call myPrivateFn() from outside the object, they can't, the function is not declared outside the object, it is private to the global scope.
*/
