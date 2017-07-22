// OOP with JavaScript
// - JavaScript functions (named, anonymous, class/object methods)
// - JavaScript classes (ES5 Object Constructors and ES6 Classes) and objects/instances


////// ////// ////// CARDS ////// ////// //////

class Card {
  // var self = this;
  constructor (suit, value) {
    var stringVal = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];
    this.suit = suit;
    this.value = value;
    this.faceValue = stringVal[value] + " of " + suit;
  }
}

class Deck {
  // var this = this;
  constructor () {
    this.cards = [];
    this.reset();
  }
  reset () {
    var suits = ["Hearts","Diamonds","Spades","Clubs"];
    var len = suits.length;
    for (let i = 0; i < len; i++) {
      for (let j = 0; j < 13; j++) {
        this.cards.push(new Card(suits[i], j));
      }
    }
  }
  deal () {
    if (this.cards.length > 0) {
      // topCard = this.cards[0];
      return this.cards.shift();
    }
  }
  shuffle () {
    var len = this.cards.length;
    for (let i = 0; i < len; i++) {
      var randInd = Math.floor(Math.random()*len);
      var temp = this.cards[randInd];
      this.cards[randInd] = this.cards[i];
      this.cards[i] = temp;
    }
  }
}

class Player {
  constructor (name) {
    this.name = name;
    this.hand = [];
  }
  draw (deck) {
    this.hand.push(deck.deal());
    return this;
  }
  discard (index) {
    this.hand.splice(index,1);
    return this;
  }
}

var myDeck = new Deck();
myDeck.shuffle();
var erica = new Player("Erica");
console.log(erica);
erica.draw(myDeck).draw(myDeck).draw(myDeck);
console.log(erica);
erica.draw(myDeck).discard(1).discard(20);
console.log(erica);


////// ////// ////// CARDS ////// ////// //////

// Write named functions

function sum(x,y){
  var sum = 0;
  for(var i = x; i<=y; i++){
    sum += i;
  }
  return sum;
}

function min(arr){
  var min = arr[0];
  for(var i=1; i<arr.length; i++){
    if (arr[i] < min){
      min = arr[i];
    }
  }
  return min;
}

function avg(arr){
  var sum = 0;
  for(var i=1; i<arr.length; i++){
    sum += arr[i];
  }
  return sum/arr.length;
}

console.log(sum(7,14));
console.log(min([7,14,21,42]));
console.log(avg([7,14,21,42]));

// Rewrite these 3 as anonymous functions assigned to variables.

var anonSum = function(x,y){
  var sum = 0;
  for(var i = x; i<=y; i++){
    sum += i;
  }
  return sum;
}

var anonMin = function(arr){
  var min = arr[0];
  for(var i=1; i<arr.length; i++){
    if (arr[i] < min){
      min = arr[i];
    }
  }
  return min;
}

var anonAvg = function(arr){
  var sum = 0;
  for(var i=1; i<arr.length; i++){
    sum += i;
  }
  return sum/arr.length;
}

console.log(anonSum(7,14));
console.log(anonMin([7,14,21,42]));
console.log(anonAvg([7,14,21,42]));

// Rewrite these as methods of an object

var functionObject = {
  anonSum: function(x,y){
    var sum = 0;
    for(var i = x; i<=y; i++){
      sum += i;
    }
    return sum;
  },
  anonMin: function(arr){
    var min = arr[0];
    for(var i=1; i<arr.length; i++){
      if (arr[i] < min){
        min = arr[i];
      }
    }
    return min;
  },
  anonAvg: function(arr){
    var sum = 0;
    for(var i=1; i<arr.length; i++){
      sum += i;
    }
    return sum/arr.length;
  }
}

console.log(functionObject.anonSum(7,14));
console.log(functionObject.anonMin([7,14,21,42]));
console.log(functionObject.anonAvg([7,14,21,42]));


// Create a JavaScript object called person with the following properties/methods.

var person = {
  name: 'Erica',
  distance_traveled: 0,
  say_name: function(param){
    console.log(this.name);
  },
  say_something: function(param){
    console.log(this.name + " says '" + param + "'");
  },
  walk: function(){
    console.log(this.name + " is walking");
    this.distance_traveled += 3;
  },
  run: function(){
    console.log(this.name + " is running");
    this.distance_traveled += 10;
  },
  crawl: function(){
    console.log(this.name + " is crawling");
    this.distance_traveled += 1;
  }
};

console.log(person.say_name());
console.log(person.distance_traveled);
console.log(person.say_something("I'm on a boat"));
console.log(person.distance_traveled);
console.log(person.walk());
console.log(person.distance_traveled);
console.log(person.run());
console.log(person.distance_traveled);
console.log(person.crawl());
console.log(person.distance_traveled);

// An Object Constructor is a function that returns objects.

function personConstructor(name) {
  // var name = {
  return {
    name: name,
    distance_traveled: 0,
    say_name: function(param){
      console.log(this.name);
    },
    say_something: function(param){
      console.log(this.name + " says '" + param + "'");
    },
    walk: function(){
      console.log(this.name + " is walking");
      this.distance_traveled += 3;
    },
    run: function(){
      console.log(this.name + " is running");
      this.distance_traveled += 10;
    },
    crawl: function(){
      console.log(this.name + " is crawling");
      this.distance_traveled += 1;
    }
  }
  // return name;
}

Thomas = personConstructor('Thomas');
console.log(Thomas);
console.log(Thomas.say_name());
console.log(Thomas.distance_traveled);
console.log(Thomas.say_something("Hi Leslie!"));
console.log(Thomas.distance_traveled);
console.log(Thomas.walk());
console.log(Thomas.distance_traveled);
console.log(Thomas.run());
console.log(Thomas.distance_traveled);
console.log(Thomas.crawl());
console.log(Thomas.distance_traveled);


function ninjaConstructor(name, cohort){
  return {
    name: name,
    cohort: cohort,
    beltLevel: 'yellow-belt',
    levelUp: function(){
      if (this.beltLevel === 'yellow-belt') {
        this.beltLevel = 'red-belt';
      } else if (this.beltLevel === 'red-belt') {
        this.beltLevel = 'black-belt';
      }
    }
  }
}

Erica = ninjaConstructor('Erica','The Grim Repo');
console.log(Erica);
console.log(Erica.beltLevel);
Erica.levelUp();
console.log(Erica.beltLevel);
Erica.levelUp();
console.log(Erica.beltLevel);
Erica.levelUp();
console.log(Erica.beltLevel);


// When an instance is created using `new`, the Object Constructor can use `this` to refer to each individual instance.
// Methods can be chained together by returning this

function dogConstructor(name) {
  this.name = name;
  this.bark = function(){
    console.log(this.name + " says 'Woof!'");
    return this;
  }
}

Sparky = new dogConstructor('Sparky');
console.log(Sparky);
console.log(Sparky.name);
console.log(Sparky.bark().bark());

// ES6's Classes are syntactic wrappers around ES5's Object Constructors

class Bird {
  constructor(name) {
    this.name = name;
  }
  chirp(){
    console.log(`${this.name} says Chirp!`);  // ES6 string interpolation
  }
}

var Tweety = new Bird("Tweety");
console.log(Tweety);
console.log(Tweety.chirp());


// In JavaScript, all objects have a prototype that they inherit methods and properties from.

class Vehicle {
  constructor(name = "a vehicle", numberOfWheels = 1, numberOfPassengers = 1, speed = 100){

    // private properties
    // var distance_traveled = 0;
    var string = "ABCDERGHIJKLMNOPQRSTUVWXYZ0123456789"
    // var vin = makeVIN();

    // public properties
    this.name = name;
    this.numberOfWheels = numberOfWheels;
    this.numberOfPassengers = numberOfPassengers;
    this.speed = speed;
    this.distance_traveled = 0;
    this.vin = makeVIN();

    // private methods
    // function updateDistanceTraveled(){
    //   distance_traveled += speed;
    // }

    function makeVIN(){
      var vin = "";
      for(var i=1; i<=16; i++){
        vin += string[Math.floor(Math.random()*35)]
      }
      return vin;
    }

    // public methods moved to Prototype

  }
}

Vehicle.prototype.updateDistanceTraveled = function(){
  this.distance_traveled += this.speed;
}

Vehicle.prototype.makeNoise = function(noise){
  var noise = noise || "noise!"
  console.log(noise);
}

Vehicle.prototype.move = function(){
  this.updateDistanceTraveled();
  this.makeNoise();
}

Vehicle.prototype.checkMiles = function(){
  console.log(this.distance_traveled);
}

Bike = new Vehicle("My Bike", 2, 1);
console.log(Bike);
Bike.makeNoise();
Bike.makeNoise('ring ring!');
Sedan = new Vehicle("Beige Sedan", 4, 5);
Sedan.makeNoise("beep beep!");
Bus = new Vehicle("Big Bus", 14, 20);
Bus.passengerCount = 0;
Bus.pickUp = function(number){
  this.passengerCount += number;
}
console.log(Bus.passengerCount);
Bus.pickUp(5);
console.log(Bus.passengerCount);
Bus.move();
Bus.checkMiles();
console.log(Bus.vin);
