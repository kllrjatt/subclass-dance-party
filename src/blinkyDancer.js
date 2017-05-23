// var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
//   var blinkyDancer = makeDancer(top, left, timeBetweenSteps);

//   // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
//   // so we must keep a copy of the old version of this function

//   var oldStep = blinkyDancer.step;

//   blinkyDancer.step = function() {
//     // call the old version of step at the beginning of any call to this new version of step
//     oldStep();
//     // toggle() is a jQuery method to show/hide the <span> tag.
//     // See http://api.jquery.com/category/effects/ for this and
//     // other effects you can use on a jQuery-wrapped html tag.
//     blinkyDancer.$node.toggle();
//   };

//   return blinkyDancer;
// };

var BlinkyDancer = function (top, left, timeBetweenSteps) {
  this.$node = $('<span class="dancer"></span>');
  // call dancer class
  // pass in correct refrence 
  Dancer.call(this, top, left, timeBetweenSteps);
};

// create object prototype chain 
// add dancer prototype to chain 
// refer consturctor back to blink dancer 

BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;

// write step function 
BlinkyDancer.prototype.step = function () {
  // call the older dancer function from dancer prototype 
  // use this to refer to blink dancer 
  Dancer.prototype.step.call(this);
  // toggle node per previours structure 
  this.$node.toggle();
};


var Carlton = function (top, left, timeBetweenSteps) {
  this.$node = $('<span class="carlton"></span>');
  // call dancer class
  // pass in correct refrence 
  Dancer.call(this, top, left, timeBetweenSteps);
};

// create object prototype chain 
// add dancer prototype to chain 
// refer consturctor back to blink dancer 

Carlton.prototype = Object.create(Dancer.prototype);
Carlton.prototype.constructor = Carlton;

// write step function 
Carlton.prototype.step = function () {
  // call the older dancer function from dancer prototype 
  // use this to refer to blink dancer 
  Dancer.prototype.step.call(this);
  // toggle node per previours structure 
  this.$node.toggle();
};


var leftAlign = function () {
  var top = 50;
  window.dancers.forEach(function (dancer) {
    dancer.setPosition(top, 15);
    top += 20;
  });
};

var rightAlign = function () {
  var top = 50;
  window.dancers.forEach(function (dancer) {
    dancer.setPosition(top, '95%');
    top += 20;
  });

};

var topAlign = function () {
  var left = 50;
  window.dancers.forEach(function (dancer) {
    dancer.setPosition(50, left);
    left += 20;
  });
};

var bottomAlign = function () {
  var left = 50;
  window.dancers.forEach(function (dancer) {
    dancer.setPosition(750, left);
    left += 20;
  });

};

var Spiderman = function (top, left, timeBetweenSteps) {
  this.$node = $('<span class="spiderman"></span>');
  // call dancer class
  // pass in correct refrence 
  Dancer.call(this, top, left, timeBetweenSteps);
};

// create object prototype chain 
// add dancer prototype to chain 
// refer consturctor back to blink dancer 

Spiderman.prototype = Object.create(Dancer.prototype);
Spiderman.prototype.constructor = Spiderman;

// write step function 
Spiderman.prototype.step = function () {
  // call the older dancer function from dancer prototype 
  // use this to refer to blink dancer 
  Dancer.prototype.step.call(this);
  // toggle node per previours structure 
  this.$node.toggle();
};

var DancingDog = function (top, left, timeBetweenSteps) {
  this.$node = $('<span class="dancingDog"></span>');
  // call dancer class
  // pass in correct refrence 
  Dancer.call(this, top, left, timeBetweenSteps);
};

// create object prototype chain 
// add dancer prototype to chain 
// refer consturctor back to blink dancer 

DancingDog.prototype = Object.create(Dancer.prototype);
DancingDog.prototype.constructor = DancingDog;

// write step function 
DancingDog.prototype.step = function () {
  // call the older dancer function from dancer prototype 
  // use this to refer to blink dancer 
  Dancer.prototype.step.call(this);
  // toggle node per previours structure 
  this.$node.toggle();
};
