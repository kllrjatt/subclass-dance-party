// var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
//   var blinkyDancer = makeDancer(top, left, timeBetweenSteps);

//   // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
//   // so we must keep a copy of the old version of this function

//   var oldStep = blinkyDancer.step;

//   blinkyDancer.step = function() {
//     // call the old version of step at the beginning of any call to this new version of step
//     oldStep();
//     // toggle() is a jQuery method to show/hide the <div> tag.
//     // See http://api.jquery.com/category/effects/ for this and
//     // other effects you can use on a jQuery-wrapped html tag.
//     blinkyDancer.$node.toggle();
//   };

//   return blinkyDancer;
// };

var Teddy = function (top, left, timeBetweenSteps) {
  this.$node = $('<div class="teddy"></div>');
  // call dancer class
  // pass in correct refrence 
  Dancer.call(this, top, left, timeBetweenSteps);
};

// create object prototype chain 
// add dancer prototype to chain 
// refer consturctor back to blink dancer 

Teddy.prototype = Object.create(Dancer.prototype);
Teddy.prototype.constructor = Teddy;

// write step function 
Teddy.prototype.step = function () {
  // call the older dancer function from dancer prototype 
  // use this to refer to blink dancer 
  Dancer.prototype.step.call(this);
  // toggle node per previours structure 
  this.$node.toggle();
};


var Carlton = function (top, left, timeBetweenSteps) {
  this.$node = $('<div class="carlton"></div>');
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

var Dean = function (top, left, timeBetweenSteps) {
  this.$node = $('<div class="dean"></div>');
  // call dancer class
  // pass in correct refrence 
  Dancer.call(this, top, left, timeBetweenSteps);
};

// create object prototype chain 
// add dancer prototype to chain 
// refer consturctor back to blink dancer 

Dean.prototype = Object.create(Dancer.prototype);
Dean.prototype.constructor = Dean;

// write step function 
Dean.prototype.step = function () {
  // call the older dancer function from dancer prototype 
  // use this to refer to blink dancer 
  Dancer.prototype.step.call(this);
  // toggle node per previours structure 
  this.$node.toggle();
};

var Bender = function (top, left, timeBetweenSteps) {
  this.$node = $('<div class="bender"></div>');
  // call dancer class
  // pass in correct refrence 
  Dancer.call(this, top, left, timeBetweenSteps);
};

// create object prototype chain 
// add dancer prototype to chain 
// refer consturctor back to blink dancer 

Bender.prototype = Object.create(Dancer.prototype);
Bender.prototype.constructor = Bender;

// write step function 
Bender.prototype.step = function () {
  // call the older dancer function from dancer prototype 
  // use this to refer to blink dancer 
  Dancer.prototype.step.call(this);
  // toggle node per previours structure 
  this.$node.toggle();
};
