// Understanding `this`: Scope and Context in JavaScript

// Scope is function-based. It is unique to each function invocation and refers to the function's variable access
// Context is object-based. It refers to the object to which the currently executing code belongs. The context is `this`.

// this (i.e. the context) depends on how a function is invoked
//   function: this is the global context (e.g. window in a browser, or undefined with 'use strict')
//   function as a method of an object: this is the object
//   function invoked with `new`: this is the object


console.log(this);
// browser => Window {} object
// terminal => {}

function getContext(){
  return this;
}

var globalContext = getContext();
// console.log(globalContext);
// terminal => large global context object

class ParentClass {
  constructor(name){
    this.name = name;
    console.log("constructor function this", this);
  }
  getContext(){
    return this;
  }
}

ParentClass.prototype.changeName = function(){
  this.name = "name has been changed!";  // `this` refers to the object
  var self = this;
  function changeNameAgain(){
    this.name = "changed again!";  // `this` refers to the function; adds name attribute to function object
    // console.log(getContext());  // `this` no longer refers to the object
    self.name = "changed again, for real this time, with self!"  // use self instead
  }
  changeNameAgain();
}

var parent = new ParentClass("parent name attribute");

console.log(parent);

class ChildClass extends ParentClass {
  constructor(name) {
    super(name);
  }
}

var child = new ChildClass("child name");

console.log(parent.getContext());
console.log(child.getContext());

parent.changeName();

console.log(parent.getContext());
console.log(child.getContext());

child.changeName();

console.log(parent.getContext());
console.log(child.getContext());
